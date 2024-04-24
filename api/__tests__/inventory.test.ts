import request from 'supertest';
import { Request, Response, NextFunction } from 'express';

import app from '../src/app';
import db from '../src/db';


// Log error messages
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    next(err);
});

describe('Inventory API', () => {
    beforeEach(() => {
        db.reset();
    });

    it('should get all items in the inventory', async () => {
        const response = await request(app).get('/inventory');

        expect(response.status).toBe(200);
        expect(response.body.totalItems).toBe(4);
        expect(Object.keys(response.body.items)).toEqual([
            'to46owtf1t',
            'y07x55xhtee',
            'ibduyu1eblg',
            'oofl7xa94qr',
        ]);
    });

    it('should get a specific item from the inventory', async () => {
        const response = await request(app).get('/inventory/ibduyu1eblg');

        expect(response.status).toBe(200);
        expect(response.body.name).toBe('Space Helmet');
        expect(response.body.variants.length).toBe(3);
    });

    it('should return an error if the item is not found', async () => {
        const response = await request(app).get('/inventory/potato');

        expect(response.status).toBe(404);
        expect(response.body.error).toBe('Item not found');
    });

    it('should import a new variant in the inventory', async () => {
        const response = await request(app)
            .post('/inventory/ibduyu1eblg')
            .send({
                serialNumber: '1234',
                quantity: 10,
                hoursInSpace: 100,
            });

        expect(response.status).toBe(201);
        expect(response.body.serialNumber).toBe('1234');
        expect(response.body.quantity).toBe(10);
        expect(response.body.hoursInSpace).toBe(100);

        const item = db.getItem('ibduyu1eblg');
        expect(item.variants.length).toBe(4);
        expect(item.variants[3].serialNumber).toBe('1234');
    });

    it('should import an existing variant in the inventory', async () => {
        const response = await request(app)
            .post('/inventory/ibduyu1eblg')
            .send({
                serialNumber: 'supreme-helmet',
                quantity: 2,
                hoursInSpace: 50,
            });

        expect(response.status).toBe(201);
        expect(response.body.serialNumber).toBe('supreme-helmet');
        expect(response.body.quantity).toBe(3);

        const item = db.getItem('ibduyu1eblg');
        expect(item.variants.length).toBe(3);
        expect(item.variants[1].quantity).toBe(3);
    });

    it('should be able to import an existing variant with negative quantity to decrease stock quantity', async () => {
        const response = await request(app)
            .post('/inventory/ibduyu1eblg')
            .send({
                serialNumber: 'furry-snow-cap',
                quantity: -1,
            });

        expect(response.status).toBe(201);
        expect(response.body.serialNumber).toBe('furry-snow-cap');
        expect(response.body.quantity).toBe(2);

        const item = db.getItem('ibduyu1eblg');
        expect(item.variants.length).toBe(3);
        expect(item.variants[2].quantity).toBe(2);
    });

    it('should substract variant in the inventory', async () => {
        const response = await request(app)
            .delete('/inventory/ibduyu1eblg')
            .send({
                serialNumber: 'furry-snow-cap',
                quantity: 2,
            });

        expect(response.status).toBe(204);
        
        const item = db.getItem('ibduyu1eblg');

        expect(item.variants.length).toBe(3);
        expect(item.variants[2].quantity).toBe(1);
    });
});
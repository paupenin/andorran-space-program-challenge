import express, { NextFunction, Request, Response } from "express";
import { Location, Variant, Item, ObjectId } from "./types";
import db from "./db";

const app = express();

app.use(express.json());

// Log every request
app.use((req: Request, res: Response, next: NextFunction) => {
  next();
  console.log(`${req.method} ${req.path} - ${res.statusCode}`, req.body);
});

/**
 * Get the first available location in the warehouse
 */
function getAvailableLocation(): Location {
  // This is a very advanced algorithm that finds the first available location
  // in the warehouse. It is so advanced that it is not implemented yet.
  return "LOC-1-1";
}

/**
 * Get all items in the inventory
 */
app.get("/inventory", (req: Request, res: Response) => {
  const items = db.getItems();
  res.send({
    totalItems: Object.keys(items).length,
    items: items,
  });
});

/**
 * Get a specific item from the inventory
 */
app.get("/inventory/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const item = db.getItem(id);

  if (!item) {
    res.status(404).send({ error: "Item not found" });
    return;
  }

  res.send(item);
});

/**
 * Import a variant to an item in the inventory
 */
app.post("/inventory/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const data = req.body as Variant;

  if (!data.location) {
    data.location = getAvailableLocation();
  }

  const item = db.getItem(id);

  let variantIndex = item.variants.findIndex(
    (v) => v.serialNumber === data.serialNumber
  );

  if (variantIndex > -1) {
    item.variants[variantIndex] = {
      serialNumber: data.serialNumber,
      quantity: item.variants[variantIndex].quantity + data.quantity,
      location: data.location ?? item.variants[variantIndex].location,
      hoursInSpace:
        data.hoursInSpace ?? item.variants[variantIndex].hoursInSpace,
    };
  } else {
    item.variants.push({
      serialNumber: data.serialNumber,
      quantity: data.quantity,
      location: data.location,
      hoursInSpace: data.hoursInSpace,
    });

    variantIndex = item.variants.length - 1;
  }

  res.status(201).send(item.variants[variantIndex]);
});

/**
 * Remove a variant from an item in the inventory
 */
app.delete("/inventory/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const data = req.body as {
    serialNumber: string;
    quantity: number;
  };

  const item = db.getItem(id);

  let variantIndex = item.variants.findIndex(
    (v) => v.serialNumber === data.serialNumber
  );

  if (variantIndex > -1) {
    // The Andorran space program is not very good at counting,
    // so we are leaving that job to the poor developer who has to implement this.
    item.variants[variantIndex].quantity -= data.quantity;
  }

  res.status(204).send();
});

export default app;

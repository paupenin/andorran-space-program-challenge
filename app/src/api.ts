import axios from "axios";

const BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: BASE_URL,
});

// Get all inventory items
export const getInventoryItems = () => api.get(`/inventory`);

// Get a specific inventory item
export const getInventoryItem = (id: string) => api.get(`/inventory/${id}`);

// Import a variant to an item in the inventory
export const postInventoryItem = (id: string, data: any) =>
  api.post(`/inventory/${id}`, data);

// Remove a variant from an item in the inventory
export const deleteInventoryItem = (id: string, data: any) =>
  api.delete(`/inventory/${id}`, { data });

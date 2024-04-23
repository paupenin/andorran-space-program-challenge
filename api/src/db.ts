import { Item, ItemList, ObjectId } from "./types";

/**
 * ATTENTION!
 *
 * This is the Production database full of rocket fuel, don't touch it or it will explode.
 *
 * Do not modify this file.
 */
let items: ItemList = {};

// Add some production data to the database
addProductionData();

function addProductionData() {
  items["to46owtf1t"] = {
    name: "Rocket parts",
    variants: [
      {
        serialNumber: "nose-cone-123",
        quantity: 1,
        location: "LOC-1-1",
        hoursInSpace: 20,
      },
      {
        serialNumber: "engine-456",
        quantity: 0,
        location: "LOC-2-3",
        hoursInSpace: 35,
      },
      {
        serialNumber: "fuel-tank-789",
        quantity: 1,
        location: "LOC-4-5",
      },
    ],
  };
  items["y07x55xhtee"] = {
    name: "Space Suit",
    variants: [
      {
        serialNumber: "ralph-lauren-123",
        quantity: 1,
        location: "LOC-4-5",
        hoursInSpace: 10,
      },
      {
        serialNumber: "gucci-456",
        quantity: 0,
        location: "LOC-6-7",
      },
      {
        serialNumber: "versace-789",
        quantity: 3,
        location: "LOC-8-9",
      },
    ],
  };
  items["ibduyu1eblg"] = {
    name: "Space Helmet",
    variants: [
      {
        serialNumber: "marc-jacobs-sunglasses",
        quantity: 1,
        location: "LOC-6-7",
        hoursInSpace: 10,
      },
      {
        serialNumber: "supreme-helmet",
        quantity: 1,
        location: "LOC-8-9",
        hoursInSpace: 2,
      },
      {
        serialNumber: "furry-snow-cap",
        quantity: 3,
        location: "LOC-10-11",
      },
    ],
  };
  items["oofl7xa94qr"] = {
    name: "Oxygen Tank",
    variants: [
      {
        serialNumber: "sunseeker-123",
        quantity: 0,
        location: "LOC-12-13",
        hoursInSpace: 0,
      },
      {
        serialNumber: "andorra-la-vella-air",
        quantity: -10,
        location: "LOC-16-16",
      },
      {
        serialNumber: "mountain-air-in-a-can",
        quantity: 100,
        location: "LOC-14-15",
      },
    ],
  };
}

/**
 * Create a new ID that is not already in use
 */
function createNewId(): ObjectId {
  const items = db.getItems();
  let id: ObjectId;
  do {
    id = Math.random().toString(36).substring(2);
  } while (items[id]);
  return id;
}

/**
 * Database methods
 */
const db = {
  reset: () => {
    // Reset the database to the initial state
    items = {};
    addProductionData();
  },
  getItems: () => items,
  getItem: (id: ObjectId) => items[id],
  addItem: (item: Item) => {
    const id = createNewId();
    items[id] = item;
    return items[id];
  },
  updateItem: (id: ObjectId, item: Item) => {
    items[id] = item;
    return items[id];
  },
  removeItem: (id: ObjectId) => {
    delete items[id];
  },
};

export default db;

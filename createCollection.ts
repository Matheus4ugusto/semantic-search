import { client } from "./client.js";
import { menuItems } from "./mock.js";

await client.createCollection("items", {
    vectors: { size: 384, distance: "Cosine" },
});
 
const points: any[] = [];
let idx = 0;

for (const menuItem of menuItems) {
  points.push({
    id: idx,
    vector: {
        text: `${menuItem[0]} ${menuItem[1]}`,
        model: "sentence-transformers/all-MiniLM-L6-v2",
    },
    payload: {
      item_name: menuItem[0],
      description: menuItem[1],
      price: menuItem[2],
      category: menuItem[3],
    },
  });
  idx++;
}

await client.upsert("items", { points });
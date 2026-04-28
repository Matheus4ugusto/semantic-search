import 'dotenv/config'
import { client } from "./client.js";

const queryText = "dishes with fish or beans";

const results = await client.query("items", {
  query: {
    text: queryText,
    model: "sentence-transformers/all-MiniLM-L6-v2",
  },
  with_payload: true,
  limit: 50,
});

for (const result of results.points) {
  console.log(`Item: ${result.payload?.item_name || 'N/A'}`);
  console.log(`Score: ${result.score}`);
  console.log(`Description: ${result.payload?.description || 'N/A'}`);
  console.log(`Price: ${result.payload?.price || 'N/A'}`);
  console.log('---');
}
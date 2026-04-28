import { QdrantClient } from "@qdrant/js-client-rest";

export const client = new QdrantClient({
    url: process.env.QDRANT_CLUSTER_ENDPOINT,
    apiKey: process.env.QDRANT_API_KEY,
});
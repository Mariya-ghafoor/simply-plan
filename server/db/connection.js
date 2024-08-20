//import dotenv from "dotenv";
//dotenv.config();

import "dotenv/config";

import { MongoClient, ServerApiVersion } from "mongodb";
console.log("****** I am in connection.js ******");

console.log("#######", process.env.ATLAS_URI);

console.log("^^^ ATLAS_URI ", process.env.ATLAS_URI);
const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

//let db = client.db("employees");
//let db = client.db("sample_airbnb");
let db = client.db("simply_plan");

export default db;

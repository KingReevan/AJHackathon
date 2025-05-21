const { MongoClient } = require('mongodb');
require('dotenv').config();

async function fetchDestinations() {
  const uri = process.env.MONGO_URI; // Make sure this includes your DB name, e.g. "...mongodb.net/TravelTribe?..."
  const client = new MongoClient("mongodb+srv://admin:1212@ajcluster.fegq2ox.mongodb.net/TravelTribe?retryWrites=true&w=majority&appName=AJCluster");

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(); // Uses DB from URI
    const collection = db.collection('destinations');

    const destinations = await collection.find().toArray();
    console.log('Fetched destinations:', destinations);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

fetchDestinations();

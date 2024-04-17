
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://shoaibaslam140:22081998@cluster0.bz1lt8a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let collection;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function runDB() {
    try {
        await client.connect();
        collection = client.db().collection('data');
        console.log(collection);
    } catch (ex) {
        console.error(ex);
    }
}

async function postCard(card) {
    try {
        const result = await collection.insertOne(card);
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function getAllCards() {
    try {
        const cards = await collection.find({}).toArray();
        return cards;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = {
    runDB,
    postCard,
    getAllCards
};

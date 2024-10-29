const { MongoClient } = require('mongodb');

const user = "eexxttrraa1112";
const password = "unf1mJnupqzjEJ20";
const uri = `mongodb+srv://${user}:${password}@cluster0.nci87.mongodb.net/`;
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db('blog');
        const collection = db.collection('articulos');
    
        // Find the first document in the collection
        const articulo = await db.collection('articulos').findOne();
        console.log(articulo.titulo);
    } finally {
      // Close the database connection when finished or an error occurs
        await client.close();
    }
}
run().catch(console.error);

//npm init
//npm install mongodb
//node --watch index.js
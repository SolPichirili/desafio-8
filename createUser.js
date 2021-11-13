use admin;

db.createUser(
    {
        user: "pepe",
        pwd: "asd456",
        roles: [
            { role: "read", db: "ecommerce"}
        ]
    }
)

//Prueba
mongod --auth --dbpath ;
mongo -u pepe -p asd456;
use ecommerce;
db.productos.find().pretty();
db.productos.insertOne({ producto: "test" });

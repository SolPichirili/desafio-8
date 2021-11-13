db.mensajes.insertMany([
    {
        date: Date(),
        author: "sol.pichirili@gmail.com",
        text: "Hola mundo"
    },
    {
        date: Date(),
        author: "sol@gmail.com",
        text: "Hola"
    },
    {
        date: Date(),
        author: "sol.pichirili@gmail.com",
        text: "¿Cómo están?"
    },
    {
        date: Date(),
        author: "pichirili@gmail.com",
        text: "¿Todo bien?"
    },
    {
        date: Date(),
        author: "carlosrodriguez@gmail.com",
        text: "Holaaaa"
    },
    {
        date: Date(),
        author: "mariamartinez@gmail.com",
        text: "Buenos días"
    },
    {
        date: Date(),
        author: "pennylane@gmail.com",
        text: "Bien"
    },
    {
        date: Date(),
        author: "jaime@gmail.com",
        text: "Este es un mensaje para todos."
    },
    {
        date: Date(),
        author: "mongo@gmail.com",
        text: "Hola mongodb"
    },
    {
        date: Date(),
        author: "renataalvarez@gmail.com",
        text: "Hola, ¿qué tal?"
    }
])

db.productos.insertMany([
    {
        name: "Saladitos x 12",
        description: "Canapés surtidos.",
        code: 164,
        photo: "https://i.ytimg.com/vi/WIPg7_st9qo/maxresdefault.jpg",
        price: 1010,
    },
    {
        name: "Sanguches de miga x 16",
        description: "Sanguches con dos sabores a elección.",
        code: 740,
        photo: "https://placeralplato.com/files/2015/05/Receta-de-sndwiches-de-miga.jpg",
        price: 1240,
    },
    {
        name: "Chips x 12",
        description: "Pequeños sanguches con pan tipo brioche de un gusto a elección.",
        code: 478,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHwHORhFLEEubrG5dDBdx2LKstT1FhDzcTmg&usqp=CAU",
        price: 2005,
    },
    {
        name: "Medialunas con jamón y queso",
        description: "Medialunas caseras rellenas",
        code: 104,
        photo: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/293/750/products/medialunajyqtantesara1-7fb57646a2c33114d016052781877975-1024-1024.jpg",
        price: 2420,
    },
    {
        name: "Marquise",
        description: "Marquise de chocolate con crema y dulce de leche.",
        code: 289,
        photo: "https://d3ugyf2ht6aenh.cloudfront.net/stores/604/496/products/pic_20191107_185813-65a9d80a6909cd16ff15731638996190-1024-1024.jpg",
        price: 3300,
    },
    {
        name: "Panes saborizados porción individual",
        description: "Tres panes de cebolla, orégano y aceitunas.",
        code: 447,
        photo: "https://cocinerosargentinos.com/content/recipes/500x500/recipes.12902.jpeg",
        price: 365,
    },
    {
        name: "Pastafrola",
        description: "Pastafrola de membrillo, batata o dulce de leche, a elección.",
        code: 784,
        photo: "https://www.elmundoeats.com/wp-content/uploads/2019/09/Pasta-Frola-2.jpg",
        price: 980,
    },
    {
        name: "Torta óreo gigante",
        description: "Torta de galletitas óreo de tres kilos, para 10 personas.",
        code: 850,
        photo: "https://d3ugyf2ht6aenh.cloudfront.net/stores/941/519/products/2f0a2627-e1ea-4f20-9ea5-91ae40cf87bc_nube-27dbac0e36adee8fa116055660511559-1024-1024.jpg",
        price: 4050,
    },
    {
        name: "Letter Cake",
        description: "Torta con forma de números o letras, con base de bizcochuelo o galletitas.",
        code: 401,
        photo: "https://carolinascookies.com/wp-content/uploads/2018/11/ok-MA-letter.jpg",
        price: 4999,
    },
    {
        name: "Cheescake",
        description:"Tarta de queso con frutos rojos",
        code: 540,
        photo: "https://www.elmundoeats.com/wp-content/uploads/2019/11/Easy-Cheesecake-500x500.jpg",
        price: 3200,
    }
])
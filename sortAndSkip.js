db.productos.find({}, { name: true, _id: false }).sort({ price: 1 }).skip(2).limit(1)
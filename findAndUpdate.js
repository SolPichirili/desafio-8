db.productos.updateMany({ price: { $gt: 4000 } }, { $set: { stock: 0 } })
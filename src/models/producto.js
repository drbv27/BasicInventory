const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productoSchema = new Schema({
  nombre: String,
  precio: Number,
  precioUSD: Number,
  cantidad: Number,
  procesador: String,
  ram: String,
  hdd: String,
  so: String,
  deterioro: String,
});

//crear el modelo

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;

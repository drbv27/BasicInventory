const express = require("express");
const indexRoutes = require("./routes/index.routes");
const indexProductos = require("./routes/Productos.routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

require("dotenv").config();

const port = process.env.PORT || 3002;

//Conexión a base de Datos
const mongoose = require("mongoose");
const user = "mongoAdmin";
const pass = "JRhQYppv7PvHmwSj";
const dbname = "inventory";

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.mzxff.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
/* const uri = `mongodb+srv://${user}:${pass}@cluster0.mzxff.mongodb.net/${dbname}?retryWrites=true&w=majority`; */

mongoose
  .connect(uri)
  .then(() => console.log("Base de datos conectada"))
  .catch((e) => console.log(e));

app.use("/", indexRoutes);

app.listen(port, () => {
  console.log("Servidor listo en el puerto: ", port);
});

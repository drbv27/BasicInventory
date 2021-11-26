const express = require("express");
const router = express.Router();
const Producto = require("../models/producto");

router.get("/", (req, res) => {
  /* res.send("Hello World...."); */
  res.render("index", { titulo: "Mi titulo Dinamico" });
});
router.get("/servicios", (req, res) => {
  /* res.send("<h1>All about</h1>"); */
  res.render("servicios", { tituloServicios: "Mi titulo Dinamico2" });
});

router.get("/productos", async (req, res) => {
  try {
    const arrayProductosDB = await Producto.find();
    console.log(arrayProductosDB);
    res.render("productos", {
      arrayProductos: arrayProductosDB,
      /* arrayProductos: [
        {
          id: "kklnuuy",
          nombre: "Lenovo Ideapad3",
          procesador: "AMD Ryzen 4500u",
          ram: "24GB",
          hdd: "256 SSD",
          precio: 2500000,
          so: "Windows 11",
          cantidad: 7,
          Tipo: "Laptop",
        },
        {
          id: "mlkhfsh",
          nombre: "ASUS Magic",
          procesador: "AMD Ryzen 4700u",
          ram: "32GB",
          hdd: "512 SSD",
          precio: 4500000,
          so: "Windows 11",
          cantidad: 17,
          Tipo: "Laptop",
        },
      ], */
    });
  } catch (error) {}

  /* res.render("productos", {
    arrayProductos: [
      {
        id: "kklnuuy",
        nombre: "Lenovo Ideapad3",
        procesador: "AMD Ryzen 4500u",
        ram: "24GB",
        hdd: "256 SSD",
        precio: 2500000,
        so: "Windows 11",
        cantidad: 7,
        Tipo: "Laptop",
      },
      {
        id: "mlkhfsh",
        nombre: "ASUS Magic",
        procesador: "AMD Ryzen 4700u",
        ram: "32GB",
        hdd: "512 SSD",
        precio: 4500000,
        so: "Windows 11",
        cantidad: 17,
        Tipo: "Laptop",
      },
    ],
  }); */
});
router.get("/crear", (req, res) => {
  res.render("crear");
});
router.post("/", async (req, res) => {
  const body = req.body;
  try {
    /* const mascotaDB = new Mascota(body);
    await mascotaDB.save(); */

    await Producto.create(body);

    res.redirect("/productos");
  } catch (error) {
    console.log(error);
  }
});
router.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "Not found",
  });
});

module.exports = router;

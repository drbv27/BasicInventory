const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  /* res.send("Hello World...."); */
  res.render("index", { titulo: "Mi titulo Dinamico" });
});
router.get("/servicios", (req, res) => {
  /* res.send("<h1>All about</h1>"); */
  res.render("servicios", { tituloServicios: "Mi titulo Dinamico2" });
});

router.get("/productos", (req, res) => {
  res.render("productos", {
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
        nombre: "Lenovo Ideapad5",
        procesador: "AMD Ryzen 4700u",
        ram: "32GB",
        hdd: "512 SSD",
        precio: 4500000,
        so: "Windows 11",
        cantidad: 17,
        Tipo: "Laptop",
      },
    ],
  });
});

module.exports = router;

router.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "Not found",
  });
});

module.exports = router;

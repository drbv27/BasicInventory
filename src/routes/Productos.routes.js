const express = require("express");
const router = express.Router();

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

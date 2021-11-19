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

router.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "Not found",
  });
});

module.exports = router;

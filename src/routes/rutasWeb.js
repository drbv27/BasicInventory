const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { titulo: "Mi titulo dinamico" });
});
/* app.get("/", (req, res) => {
  res.send("Hello World!");
}); */

router.get("/servicios", (req, res) => {
  res.render("servicios", { tituloServicios: "Un titulo mas" });
});
/* app.get("/servicios", (req, res) => {
  res.send("en servicios");
}); */

module.exports = router;

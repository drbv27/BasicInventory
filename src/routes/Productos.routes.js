const express = require("express");
const router = express.Router();

const Producto = require("../models/producto");

router.get("/", async (req, res) => {
  try {
    const arrayProductosDB = await Producto.find();
    console.log(arrayProductosDB);

    res.render("productos", {
      arrayProductos: arrayProductosDB,
    });
  } catch (error) {
    console.log(error);
  }
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

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const productoDB = await Producto.findOne({ _id: id });
    console.log(productoDB);
    res.render("detalle", {
      producto: productoDB,
      error: false,
    });
  } catch (error) {
    console.log(error);
    res.render("detalle", {
      error: true,
      mensaje: "No se encuentra el id seleccionado",
    });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const productoDB = await Producto.findByIdAndDelete({ _id: id });
    if (productoDB) {
      res.json({
        estado: true,
        mensaje: "Eliminado!!!",
      });
    } else {
      res.json({
        estado: false,
        mensaje: "Fallo Eliminar!!!",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const productoDB = await Producto.findByIdAndUpdate(id, body, {
      useFindAndModify: false,
    });
    console.log(productoDB);
    res.json({
      estado: true,
      mensaje: "Editado",
    });
  } catch (error) {
    console.log(error);
    res.json({
      estado: false,
      mensaje: "Fallo Editar",
    });
  }
});
module.exports = router;

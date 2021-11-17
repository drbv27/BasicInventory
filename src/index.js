const express = require("express");
const indexRoutes = require("./routes/index.routes");

const app = express();

const port = 3002;

app.use(indexRoutes);

app.listen(port, () => {
  console.log("Servidor listo en el puerto: ", port);
});

const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const { PORT } = process.env;
// Hora y fecha de Colombia
const moment = require("moment-timezone");

// Configurar la zona horaria de Colombia (Bogotá)
moment.tz.setDefault("America/Bogota");

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
// true para eliminar BD y false para conservar

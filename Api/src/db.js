const { Sequelize } = require("sequelize");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/paby`,
  {
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const {
  Document,
  Sex,
  User,
  Vehicle,
  Zone,
  Rol,
  Reservation,
  Permission,
  Floor,
  Parking,
  Payment,
} = sequelize.models;

// Aca vendrian las relaciones

// Usuario con tipo de documento y sexo de uno a muchos.
Sex.hasMany(User);
User.belongsTo(Sex);

// Documento con user
Document.hasMany(User);
User.belongsTo(Document);

// Usuario con vehiculo relación de uno a muchos.
User.hasMany(Vehicle);
Vehicle.belongsTo(User);

// Usuario con rol relación de uno a muchos.
Rol.hasMany(User);
User.belongsTo(Rol);

// Relación de muchos a muchos entre el rol y permisos
Rol.belongsToMany(Permission, { through: "PermissionRol" });
Permission.belongsToMany(Rol, { through: "PermissionRol" });

// Usuario con reservación
User.hasMany(Reservation);
Reservation.belongsTo(User);

// Reservación con zona
Zone.hasMany(Reservation);
Reservation.belongsTo(Zone);

// Reservación metodo de pago
Payment.hasMany(Reservation);
Reservation.belongsTo(Payment);

// Zona con pisos
Floor.hasMany(Zone, { as: "zonesFloor" });
Zone.belongsTo(Floor);

// Pisos con parqueadero
Parking.hasMany(Floor, { as: "parkingFloors" });
Floor.belongsTo(Parking);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};

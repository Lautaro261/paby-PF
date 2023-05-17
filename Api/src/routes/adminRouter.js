const { Router } = require("express");
// VERIFY TOKEN
const verifyToken = require("../utils/verifyToken");

/////////// HANDLERS ////////////

// USUARIOS
const handlerGetUsers = require("../handlers/admin/handlerGetUsers.js");
const handlerDeleteUser = require("../handlers/admin/handlerDeleteUser")
// VEHICULOS
const handlerGetVehicle = require("../handlers/admin/handlerGetVehicle.js");
const handlerLogin = require("../handlers/admin/handlerLogin.js");
const handlerGetUserById = require("../handlers/admin/handlerGetUserById");
// PARQUEADEROS
const {
  handlerGetAllParkings,
  handlerGetParkingById,
} = require("../handlers/admin/handlerGetParkings");
const handlerCreateParking = require("../handlers/admin/handlerPostParking");
const handlerUpdateParking = require("../handlers/admin/handlerPutParking");
// PISOS
const {
  handlerGetAllFloors,
  handlerGetFloorsByParkingId,
} = require("../handlers/admin/handlerGetFloor");
const handlerCreateFloor = require("../handlers/admin/handlerPostFloor");
const handlerUpdateFloorById = require("../handlers/admin/handlerPutFloor");
// ZONAS
const {
  handlerGetAllZonesWithFloors,
  handlerGetZonesByParkingId,
} = require("../handlers/admin/handlerGetZone");
const handlerCreateZones = require("../handlers/admin/handlerPostZone");
const handlerUpdateZone = require("../handlers/admin/handlerPutZone");
// RESERVACIONES
const {
  handlerGetAllReservations,
  handlerGetReservationsByUserId,
} = require("../handlers/admin/handlerGetReservations");
const handlerCreateReservation = require("../handlers/admin/handlerPostReservation");

//// ROUTER ADMIN ////
const adminRouter = Router();

/////////// ROUTES ////////////

adminRouter.post("/login", handlerLogin);

// USUARIOS
adminRouter.get("/allusers", verifyToken, handlerGetUsers);
adminRouter.get("/user/:idUser", verifyToken, handlerGetUserById);
adminRouter.put("/delete/user", verifyToken, handlerDeleteUser)
// VEHICULOS
adminRouter.get("/allvehicles", verifyToken, handlerGetVehicle);
// PARQUEADEROS
adminRouter.get("/parking/alls", verifyToken, handlerGetAllParkings);
adminRouter.get("/parking/:id", verifyToken, handlerGetParkingById);
adminRouter.post("/parking/create", verifyToken, handlerCreateParking);
adminRouter.put("/parking/:id", verifyToken, handlerUpdateParking);
// PISOS
adminRouter.get("/floors/alls", verifyToken, handlerGetAllFloors);
adminRouter.get(
  "/parking/:id/floors",
  verifyToken,
  handlerGetFloorsByParkingId
);
adminRouter.post("/parking/:id/createfloor", verifyToken, handlerCreateFloor);
adminRouter.put("/parking/editfloor/:id", verifyToken, handlerUpdateFloorById);
// ZONAS
adminRouter.get("/zones/alls", verifyToken, handlerGetAllZonesWithFloors);
adminRouter.get("/parking/:id/zones", verifyToken, handlerGetZonesByParkingId);
adminRouter.post(
  "/parking/floor/:id/createzones",
  verifyToken,
  handlerCreateZones
);
adminRouter.put("/parking/zone/:id/edit", verifyToken, handlerUpdateZone);
// RESERVACIONES
adminRouter.get("/reservation/alls", verifyToken, handlerGetAllReservations);
adminRouter.get(
  "/reservation/:id",
  verifyToken,
  handlerGetReservationsByUserId
);
adminRouter.post("/reservation/create", verifyToken, handlerCreateReservation);

//// EXPORTACION DE RUTAS ////
module.exports = adminRouter;

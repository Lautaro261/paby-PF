// Modelos de base de base de datos
const { Reservation, User, Zone, Vehicle } = require("../../db");

// Controller para obtener todas las reservaciones
const getAllReservations = async () => {
  const reservations = await Reservation.findAll({
    attributes: [
      "id",
      "admission_time",
      "departure_time",
      "full_reserve_value",
      "payment_date",
      "payment_status",
    ],
    include: [
      { model: User, attributes: ["sub", "name", "email"] },
      { model: Zone, attributes: ["id", "zone_number"] },
      {
        model: Vehicle,
        attributes: ["license_plate_id", "car_brand", "license_plate"],
      },
    ],
  });
  if (reservations.length === 0) {
    return { message: "No hay reservaciones creadas" };
  }
  return reservations;
};

// Controller para obtener todas las reservaciones de un usuario en especifico
const getReservationsByUserId = async (id) => {
  // Verificar si el usuario existe
  const user = await User.findByPk(id, {
    attributes: ["sub", "name", "email"],
  });

  if (!user) {
    return { message: "Usuario no encontrado o datos ingresados incorrectos" };
  }

  // Buscar todas las reservaciones asociadas al usuario
  const reservations = await Reservation.findAll({
    where: { userSub: id },
    attributes: [
      "id",
      "admission_time",
      "departure_time",
      "full_reserve_value",
      "payment_date",
      "payment_status",
      "reservation_status",
    ],
    include: [
      { model: Zone, attributes: ["zone_number", "vehicle_type"] },
      {
        model: Vehicle,
        attributes: ["car_brand", "license_plate"],
      },
    ],
  });

  if (reservations.length === 0) {
    return {
      message: "Este usuario no tiene reservaciones creadas o finalizadas",
    };
  } else {
    return [user, reservations];
  }
};

module.exports = { getAllReservations, getReservationsByUserId };

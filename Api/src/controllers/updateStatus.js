// Modelos de base de base de datos
const { Reservation, Zone } = require("../db");

// Controller para actualizar estados de Reservaciones y Zonas
const updateStatus = async () => {
  const reservations = await Reservation.findAll({
    where: {
      payment_status: "approved",
    },
  });

  for (const reservation of reservations) {
    const zone = await reservation.getZone();
    const admissionTime = new Date(reservation.admission_time);
    const departureTime = new Date(reservation.departure_time);
    const currentTime = new Date();

    if (currentTime >= admissionTime && currentTime <= departureTime) {
      // Si la reserva está en curso
      reservation.reservation_status = "En curso";
      await reservation.save();

      if (zone.zone_status === "Disponible") {
        // Si la zona está disponible, actualizar a ocupada
        zone.zone_status = "Ocupada";
        await zone.save();
      }
    } else if (currentTime < admissionTime) {
      // Si la reserva está programada
      reservation.reservation_status = "Programada";
      await reservation.save();

      if (zone.zone_status === "Disponible") {
        // Si la zona está disponible, actualizar a reservada
        zone.zone_status = "Reservada";
        await zone.save();
      }
    } else if (currentTime > departureTime) {
      // Si la reserva ha finalizado
      reservation.reservation_status = "Finalizada";
      await reservation.save();
    }
  }
  const reservationsUpdate = await Reservation.findAll({
    attributes: [
      "admission_time",
      "departure_time",
      "full_reserve_value",
      "payment_date",
      "payment_status",
      "reservation_status",
    ],
    include: [{ model: Zone, attributes: ["zone_status", "zone_number"] }],
  });

  return reservationsUpdate;
};

module.exports = { updateStatus };

// Modelos de base de base de datos
const { Reservation, User, Zone, Vehicle, Cart } = require("../../db");
const { Op } = require("sequelize");

// Controlador para crear reservaciones y agregarlas al carrito de compras
const postReservationCart = async (
  userSub,
  zoneId,
  vehicleLicensePlateId,
  admission_time,
  departure_time,
  instant_photo,
  full_reserve_value,
  comments,
  req // Objeto request de Express
) => {
  // Verificar si el usuario existe
  const user = await User.findOne({
    where: {
      sub: userSub,
    },
  });

  // Verificar si el usuario existe
  if (!user) {
    return {
      message: "El usuario no existe",
    };
  }

  // Verificar si la zona existe
  const zone = await Zone.findByPk(zoneId);
  if (!zone) {
    return {
      message: "La zona no existe",
    };
  }

  // Verificar si el vehiculo existe
  const vehicle = await Vehicle.findByPk(vehicleLicensePlateId);
  if (!vehicle) {
    return {
      message: "El vehiculo no existe",
    };
  }

  // Verificar si la zona ya está reservada para la hora especificada
  const existingReservation = await Reservation.findOne({
    where: {
      zoneId: zoneId,
      [Op.or]: [
        {
          admission_time: {
            [Op.between]: [admission_time, departure_time],
          },
        },
        {
          departure_time: {
            [Op.between]: [admission_time, departure_time],
          },
        },
        {
          admission_time: {
            [Op.lte]: admission_time,
          },
          departure_time: {
            [Op.gte]: departure_time,
          },
        },
      ],
    },
  });
  if (existingReservation) {
    return {
      message: "La zona ya está reservada para el rango de tiempo especificado",
    };
  }

  // Obtener el carrito de compras actual del usuario
  const shoppingCart = await Cart.findOne({
    where: {
      userSub: user.sub,
    },
    order: [["createdAt", "DESC"]],
    limit: 1,
  });

  // Verificar si el carrito de compras ya ha sido pagado
  if (shoppingCart.cart_status === "Pagado") {
    return {
      message: "El carrito de compras ya ha sido pagado",
    };
  }

  // Crear la reservación con el shoppingCartId asignado
  const newReservation = await Reservation.create({
    userSub,
    zoneId,
    vehicleLicensePlateId,
    admission_time,
    departure_time,
    instant_photo,
    full_reserve_value,
    comments,
    cartId: shoppingCart.id,
  });

  // Actualizar el carrito de compras
  const reservationsCount = await Reservation.count({
    where: {
      cartId: shoppingCart.id,
    },
  });
  const cartAmount = await Reservation.sum("full_reserve_value", {
    where: {
      cartId: shoppingCart.id,
    },
  });

  await shoppingCart.update({
    cart_status: reservationsCount > 0 ? "Por pagar" : "Vacío",
    cart_amount: cartAmount,
    quantity: reservationsCount,
  });

  return newReservation;
};

module.exports = { postReservationCart };

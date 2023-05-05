const { Payment } = require("../db");

// Controlador para crear un nuevo pago
const createPayment = async (id, name, payment_status) => {
  // Verificar si el metodo de pago existe
  const vefifyPaymentId = await Payment.findOne({
    where: {
      id: id,
      name: name,
    },
  });
  if (vefifyPaymentId) {
    return { message: "El método de pago ya existe" };
  }
  // Si no existe, se crea
  const newPayment = await Payment.create({
    id,
    name,
    payment_status,
  });
  return newPayment;
};

module.exports = { createPayment };

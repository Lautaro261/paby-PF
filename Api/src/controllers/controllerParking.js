const { Parking } = require("../db");

// Handler para obtener todos los parqueaderos
const getAllParkings = async (req, res) => {
  try {
    const parkings = await Parking.findAll();
    res.json(parkings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Handler para obtener un parqueadero por id
const getParkingById = async (req, res) => {
  const { id } = req.params;
  try {
    const parking = await Parking.findByPk(id);
    if (parking) {
      res.json(parking);
    } else {
      res.status(404).json({
        message: "Parqueadero no encontrado o datos de busqueda incorrectos",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Handler para crear un parqueadero
const createParking = async (req, res) => {
  const {
    name,
    nit,
    country,
    city,
    address,
    neighborhood,
    floors,
    fee,
    photo,
    regulation,
  } = req.body;
  try {
    const parking = await Parking.create({
      name,
      nit,
      country,
      city,
      address,
      neighborhood,
      floors,
      fee,
      photo,
      regulation,
    });
    res.json(parking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Handler para actualizar un parqueadero
const updateParking = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    nit,
    country,
    city,
    address,
    neighborhood,
    floors,
    fee,
    photo,
    regulation,
  } = req.body;
  try {
    const parking = await Parking.findByPk(id);
    if (parking) {
      await parking.update({
        name,
        nit,
        country,
        city,
        address,
        neighborhood,
        floors,
        fee,
        photo,
        regulation,
      });
      res.json({ message: "Parqueadero actualizado correctamente" });
    } else {
      res.status(404).json({ message: "Parqueadero no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = {
  getAllParkings,
  getParkingById,
  createParking,
  updateParking,
};

const PutProfile = require("../controllers/PutProfile");

const handlerPutProfile = async (req, res) => {
  try {
    const { sub, nickname, phone, country, city, address, neighborhood } =
      req.body;

    const upProfile = await PutProfile(
      sub,
      nickname,
      phone,
      country,
      city,
      address,
      neighborhood
    ); //AQUI TENGO EL PERFIL

    if (upProfile !== null) {
      res.status(200).json({ message: "se modifico correctamente!" });
    } else {
      res.status(400).json({ message: "No se encontro el perfil", sub: sub });
    }
  } catch (error) {
    res.status(400).json({ message: "no se pudo modificar", error: error.message });
  }
};

module.exports = handlerPutProfile;

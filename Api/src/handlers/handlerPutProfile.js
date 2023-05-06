const PutProfile = require("../controllers/PutProfile");

const handlerPutProfile = async (req, res) => {
  try {
    const { userId, nickname, phone, country, city, address, neighborhood } =
      req.body;

    await PutProfile(
      userId,
      nickname,
      phone,
      country,
      city,
      address,
      neighborhood
    ); //AQUI TENGO EL PERFIL

    res.status(200).json({ message: "se modifico correctamente!" });
  } catch (error) {
    res.status(400).json({ message: "no se pudo modificar" });
  }
};

module.exports = handlerPutProfile;

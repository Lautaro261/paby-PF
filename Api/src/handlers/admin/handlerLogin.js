//const { User } = require("../../db");
const getAdmin = require('../../controllers/admin/getAdmin');
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { KEY_SECRET } = process.env;

const handlerLogin = async (req, res) => {
  const { sub, email, password } = req.body;
  const user = await getAdmin(sub);

  if (!user) {
    res.status(400).json({ message: `No se encontro admin ${email}` });
  } else {
    if (
      sub === user.sub &&
      email === user.email &&
      password === user.password
    ) {
    
      const rol = user.rol;
      jwt.sign({ sub, email, rol }, KEY_SECRET, (err, token) => {
        res.status(201).json({
          rol,
          token,
        });
      });
    } else {
      res.status(400).json({ message: "Credenciales incorrectas!" });
    }
  }
};

module.exports = handlerLogin;

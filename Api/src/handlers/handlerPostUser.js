const postUser = require("../controllers/postUser");

const handlerPostUser = async (req, res) => {
  try {
    const {
      sub,
      name,
      email,
      photo,
      password
    } = req.body;

    // console.log(name)
   const newUser =  await postUser(
       sub,
      name,
      email,
      photo,
      password
    );

    //console.log(user)
    res.status(200).json({ message: "se creo correctamente",
    user :  newUser,
});
  } catch (error) {
    res.status(400).json({message: "no se pudo crear usuario",
    error : error.message
});
  }
};

module.exports = handlerPostUser;

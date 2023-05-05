const { User } = require("../db");

const postUser = async (
  name,
  identificacion,
  last_name,
  email,
  password,
  phone,
  country,
  city,
  address,
  neighborhood,
  photo
) => {
 const newUser= await User.create({
    name,
    identificacion,
    last_name,
    email,
    password,
    phone,
    country,
    city,
    address,
    neighborhood,
    photo,
  });

  return newUser;
};


module.exports = postUser;

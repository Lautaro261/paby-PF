const postUser = require('../controllers/postUser');

const handlerPostUser = async(req, res)=>{
    try {
        const {name, identificacion,last_name,email,password,phone,country,city,address,neighborhood,photo} = req.body
        const user = await postUser(
            name,
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
        )

        console.log(user)
        res.status(200).json('se creo correctamente')
    } catch (error) {
        res.status(400).json('no se pudo crear usuario')
    }
}

module.exports = handlerPostUser
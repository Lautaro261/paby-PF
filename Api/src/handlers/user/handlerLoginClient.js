const getUserId = require("../../controllers/user/getUserId");

const handlerLoginClient =  async(req, res)=>{

    const {sub, email, password} =  req.body;
    const idUser = sub

    const user = await getUserId(idUser)

    if(!user){
        res.status(400).json({message: `No se encontro user ${email}`})
    }else{

        if(user.userById.sub === sub && user.userById.email === email && user.userById.password === password){
            res.status(200).json({
                message: `Login exitoso`,
                user: user
        })
        }else{
            res.status(400).json({message: `credenciales incorrectas`})
        }
    }

}

module.exports =  handlerLoginClient
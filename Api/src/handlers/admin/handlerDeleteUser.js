

const handlerDeleteUser = async (req, res) =>{
    const {idUser} =req.body
    try {
        const deleteUser = await deleteUserLog (idUser, "borrado")
        res.status(200).json({ message: "se borro correctamente",
        delete: deleteUser,
    });
        
    } catch (error) {
        res.status(400).json({message: "no se pudo borrar al usuario"});
    }


}

module.exports = handlerDeleteUser
const deleteUserLog = require ("../../controllers/admin/deleteUserLog")

const handlerDeleteUser = async (req, res) =>{
    const {sub} =req.body
    try {
        const deleteUser = await deleteUserLog (sub, "borrado")
        res.status(200).json({ message: "Se borro correctamente",
        delete: deleteUser,
    });
        
    } catch (error) {
        res.status(400).json({message: `No se pudo borrar al usuario ${sub}`});
    }


}

module.exports = handlerDeleteUser
const { getCart } = require('../controllers/getCart');

const handlerGetCart = async (req, res) => {
    const {id} = req.params;
    try {
        const reservations = await getCart(id);
        res.status(200).json(reservations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = { handlerGetCart } ;
const { createMercadoPagoPreference } = require('../controllers/preferenciaPago');

const handlerPreferencia = async (req, res) => {
    const { id } = req.params
    try {
        const preference = await createMercadoPagoPreference(id);
        res.status(200).json(preference)
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
};

module.exports = { handlerPreferencia }
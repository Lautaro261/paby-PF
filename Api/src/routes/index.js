const { Router } =require('express');
const usersRouter = require('./usersRouter')
const parkingRouter = require('./parkingRouter')


const routes = Router();

//routes.use('/vehicles', vehiclesRouter)
routes.use('/users', usersRouter)

routes.use('/parking', parkingRouter)







module.exports = routes; 
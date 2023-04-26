const { Router } = require('express')


const parkingRouter = Router();

parkingRouter.get('/',/* handler */)  //HANDLER GENERAL PARKING
parkingRouter.post('/', /* handler */) //HANDLER GENERAL PARKING

parkingRouter.get('/zone', /* handler */) 
parkingRouter.get('/floor', /* handler */)

//parkingRouter.post('/zone', )
//parkingRouter.post('/floor', )


module.exports= parkingRouter

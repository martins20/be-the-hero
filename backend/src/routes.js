const routes = require('express').Router()

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')


//Rotas de Login
routes.post('/sessions', SessionController.create)

// Rotas de Ongs
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);

//Rotas de Listagens de Casos especificos de uma ong
routes.get('/profile', ProfileController.index)

// Rotas de Casos
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes

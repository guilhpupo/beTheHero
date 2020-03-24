const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController.js');
const CasoController = require('./controllers/CasoController.js');
const PerfilOngController = require('./controllers/PerfilOngController.js');
const SessionController = require('./controllers/SessionController.js');

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/casos', CasoController.index);
routes.post('/casos', CasoController.create);
routes.delete('/casos/:id', CasoController.delete);

routes.get('/perfil', PerfilOngController.index);

routes.post('/session', SessionController.create);



module.exports = routes;
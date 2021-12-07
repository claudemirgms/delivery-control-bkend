const express = require('express');
const UserController = require('./app/controllers/UserController');
const SessionController = require( './app/controllers/SessionController');
const PackageController = require('./app/controllers/PackageController');
const UnityController = require('./app/controllers/UnityController')

const authMiddleware = require('./app/middlewares/auth')

const routes = express.Router();

routes.post('/get-session', SessionController.get_session);
routes.post('/create-user', UserController.create_user);
routes.post('/create-unities', UnityController.create_unities);
routes.use(authMiddleware);
routes.post('/create-package', PackageController.create_package);
routes.get('/get-packages', PackageController.get_packages);
routes.post('/deliver-package/:package_id', PackageController.deliver_package);
routes.get('/get-unities', UnityController.get_unities);

module.exports = routes;
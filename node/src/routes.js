const {Router} = require('express');
const routes = Router();
const ProductsController = require('./controllers/product.controller');
const UsersController = require('./controllers/user.controller');

routes.get('/getAllProducts', ProductsController.getAllProducts);

routes.post('/products', ProductsController.storeProducts);

routes.put('/products', ProductsController.updateProducts);

routes.get('/users', UsersController.getUserByLogin);

routes.post('/users', UsersController.storeUser);

routes.put('/users', UsersController.updateUsers);

module.exports = routes;
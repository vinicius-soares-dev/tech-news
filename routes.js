const express = require('express');
const routes = express.Router();
const HomeController = require('./src/controller/HomeController');
const CadastredController = require('./src/controller/CadastredController');
const NewsController = require('./src/controller/NewsController')

routes.get('/', HomeController.Home);

routes.post('/cadastred', CadastredController.Cadastred);

routes.post('/news', NewsController.News);

module.exports = routes;
import express from "express";
import UsersController from "./controllers/UsersController";
import UrlsController from "./controllers/UrlsController";
import LeakagesController from "./controllers/LeakagesController";

const routes = express.Router();
const usersController = new UsersController();
const urlsController = new UrlsController();
const leakagesController = new LeakagesController();

routes.get("/users", usersController.index);
routes.get("/user/:id", usersController.findOne);
routes.post("/users", usersController.create);
routes.put("/user/:id", usersController.update);
routes.delete("/user/:id", usersController.delete);

routes.get("/urls", urlsController.index);
routes.get("/url/:id", urlsController.findOne);
routes.post("/urls", urlsController.create);
routes.put("/url/:id", urlsController.update);
routes.delete("/url/:id", urlsController.delete);

routes.get("/leakages", leakagesController.index);
routes.get("/leakage/:id", leakagesController.findOne);
routes.post("/leakages", leakagesController.create);
routes.put("/leakages/:id", leakagesController.update);
routes.delete("/leakage/:id", leakagesController.delete);

export default routes;

//Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params:Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Peginação, filtros, ordenação

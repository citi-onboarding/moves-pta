import express from "express";
import userController from "./controllers/UserController";
import ServiceController from "./controllers/ServiceController";
import personController from "./controllers/PersonController";

const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);

// rotas ServiceController
routes.post("/service", ServiceController.create)
routes.get("/service", ServiceController.get);
routes.delete("/service/:id", ServiceController.delete);
routes.patch("/service/:id", ServiceController.update);

routes.post("/person", personController.create);
routes.get("/person", personController.get);
routes.delete("/person/:id", personController.delete);
routes.patch("/person/:id", personController.update);

export default routes;

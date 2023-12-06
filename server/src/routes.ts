import express from "express";
import userController from "./controllers/UserController";
import ServiceController from "./controllers/ServiceController";

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

export default routes;

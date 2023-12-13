import { Request, Response } from "express";
import { Citi, Crud } from "../global";

class UserController implements Crud {
  constructor(private readonly citi = new Citi("Person")) {}
  create = async (request: Request, response: Response) => {
    const { name, role, link_img, description } = request.body;

    const isAnyUndefined = this.citi.areValuesUndefined(
      name,
      role,
      link_img,
      description
    );
    if (isAnyUndefined) return response.status(400).send();

    const newPerson = { name, role, link_img, description };
    const { httpStatus, message } = await this.citi.insertIntoDatabase(newPerson);

    return response.status(httpStatus).send({ message });
  };

  get = async (request: Request, response: Response) => {
    const { httpStatus, values } = await this.citi.getAll();

    return response.status(httpStatus).send(values);
  };

  delete = async (request: Request, response: Response) => {
    const { id } = request.params;

    const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);

    return response.status(httpStatus).send({ messageFromDelete });
  };

  update = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { name, role, link_img, description } = request.body;

    const updatedValues = { name, role, link_img, description };

    const { httpStatus, messageFromUpdate } = await this.citi.updateValue(
      id,
      updatedValues
    );

    return response.status(httpStatus).send({ messageFromUpdate });
  };
}

export default new UserController();

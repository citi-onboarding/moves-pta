import { Request, Response } from "express";
import { Citi, Crud } from "src/global";

class ServiceController implements Crud {
    constructor(private readonly citi = new Citi("Service")) {}

    create = async (request: Request, response: Response) => {
      const { imageLink, serviceDescription } = request.body;
  
      const isAnyUndefined = this.citi.areValuesUndefined(
            imageLink,
            serviceDescription
      );
      if (isAnyUndefined) return response.status(400).send();
  
      const newService = { imageLink, serviceDescription };
      const { httpStatus, message } = await this.citi.insertIntoDatabase(newService);
  
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
      const { imageLink, serviceDescription } = request.body;
  
      const updatedValues = { imageLink, serviceDescription };
  
      const { httpStatus, messageFromUpdate } = await this.citi.updateValue(
        id,
        updatedValues
      );
  
      return response.status(httpStatus).send({ messageFromUpdate });
    };
  }
  
  export default new ServiceController();
  
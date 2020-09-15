import { Request, Response } from "express";
import db from "../database/connection";

export default class UsersController {

  async index(request: Request, response: Response, next: any) {

    try {
      const results = await db("users");

    return response.json(results);
    } catch (error) {
      next(error);
    }
    
  }

  async create(request: Request, response: Response, next: any) {
    try {
      const { name, password, email, cpf } = request.body;

      await db("users").insert({
        name,
        password,
        email,
        cpf,
      });

      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  async update(request: Request, response: Response, next: any) {
    try {
      const { name, password, email, cpf } = request.body;
      const { id } = request.params;

      await db("users").update({ name, password, email, cpf }).where({ id });

      return response.send();
    } catch (error) {
      next(error);
    }
  }

  async findOne(request: Request, response: Response, next: any) {
    try {
      const { id } = request.params;
      const results = await db("users").where({ id });

      return response.json(results);
    } catch (error) {
      next(error);
    }
  }

  async delete(request: Request, response: Response, next: any) {
    try {
      const { id } = request.params;

      await db("users")
        .where({ id })
        // .update('deleted_at', new Date())
        .del();

      return response.send();
    } catch (error) {
      next(error);
    }
  }
}

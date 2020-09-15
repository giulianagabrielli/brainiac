import { Request, Response } from "express";
import db from "../database/connection";

export default class UsersController {
  async index(request: Request, response: Response) {
    const results = await db("leakages");

    return response.json(results);
  }

  async create(request: Request, response: Response, next: any) {
    try {
      const { url, email, password } = request.body;

      await db("leakages").insert({
        url,
        email,
        password,
      });

      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  async update(request: Request, response: Response, next: any) {
    try {
      const { url, email, password } = request.body;
      const { id } = request.params;

      await db("leakages").update({ url, email, password }).where({ id });

      return response.send();
    } catch (error) {
      next(error);
    }
  }

  async findOne(request: Request, response: Response, next: any) {
    try {
      const { id } = request.params;
      const results = await db("leakages").where({ id });

      return response.json(results);
    } catch (error) {
      next(error);
    }
  }

  async delete(request: Request, response: Response, next: any) {
    try {
      const { id } = request.params;

      await db("leakages")
        .where({ id })
        // .update('deleted_at', new Date())
        .del();

      return response.send();
    } catch (error) {
      next(error);
    }
  }

  async total(request: Request, response: Response) {
    const totalLeakages = await db("leakages").count("* as total");

    const { total } = totalLeakages[0];

    return response.json({ total });
  }
}

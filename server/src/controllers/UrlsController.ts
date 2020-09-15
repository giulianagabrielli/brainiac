import { Request, Response } from "express";
import db from "../database/connection";

export default class UrlsController {
  async index(request: Request, response: Response) {
    const results = await db("urls");

    return response.json(results);
  }

  async create(request: Request, response: Response, next: any) {
    try {
      const { url } = request.body;

      await db("urls").insert({
        url,
      });

      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  async update(request: Request, response: Response, next: any) {
    try {
      const { url } = request.body;
      const { id } = request.params;

      await db("urls").update({ url }).where({ id });

      return response.send();
    } catch (error) {
      next(error);
    }
  }

  async findOne(request: Request, response: Response, next: any) {
    try {
      const { id } = request.params;
      const results = await db("urls").where({ id });

      return response.json(results);
    } catch (error) {
      next(error);
    }
  }

  async delete(request: Request, response: Response, next: any) {
    try {
      const { id } = request.params;

      await db("urls")
        .where({ id })
        // .update('deleted_at', new Date())
        .del();

      return response.send();
    } catch (error) {
      next(error);
    }
  }
}

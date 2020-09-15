import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("urls").del();

  // Inserts seed entries
  await knex("urls").insert([
    { id: 1, url: "http://www.dominiofalso1.com" },
    { id: 2, url: "http://www.dominiofalso2.com" },
    { id: 3, url: "http://www.dominiofalso3.com" },
    { id: 4, url: "http://www.dominiofalso4.com" },
    { id: 5, url: "http://www.dominiofalso5.com" },
    { id: 6, url: "http://www.dominiofalso6.com" },
    { id: 7, url: "http://www.dominiofalso7.com" },
    { id: 8, url: "http://www.dominiofalso8.com" },
    { id: 9, url: "http://www.dominiofalso9.com" },
    { id: 10, url: "http://www.dominiofalso10.com" },
  ]);
}

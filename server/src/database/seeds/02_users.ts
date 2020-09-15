import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      id: 1,
      name: "Giuliana Gabrielli",
      password: "123",
      email: "g@g.com",
      cpf: "111.111.111-11",
    },
  ]);
}

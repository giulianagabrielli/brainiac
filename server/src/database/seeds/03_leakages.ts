import * as Knex from "knex";
const faker = require("faker");

const createFakeLeakages = () => ({
  email: faker.internet.email(),
  password: faker.internet.userName(),
  created_at: faker.date.recent(),
});

exports.seed = async function (knex: Knex, Promise: Promise<void>) {
  const fakeLeakages = [];
  const desireFakeLeakages = 1000;
  for (let i = 0; i < desireFakeLeakages; i++) {
    fakeLeakages.push(createFakeLeakages());
  }

  await knex("leakages").insert(fakeLeakages);
};

// export async function seed(knex: Knex): Promise<void> {
//   // Deletes ALL existing entries
//   await knex("leakages").del();

//   // Inserts seed entries
//   await knex("leakages").insert([
//     {
//       id: 1,
//       url: "http://www.qualquercoisa1.com",
//       email: "a@a.com",
//       password: "dljfldkjf",
//     },
//     {
//       id: 2,
//       url: "http://www.qualquercoisa2.com",
//       email: "b@b.com",
//       password: "djsijdof",
//     },
//     {
//       id: 3,
//       url: "http://www.qualquercoisa3.com",
//       email: "c@c.com",
//       password: "lsdfjalhs",
//     },
//     {
//       id: 4,
//       url: "http://www.qualquercoisa4.com",
//       email: "d@d.com",
//       password: "dofousdhfou",
//     },
//     {
//       id: 5,
//       url: "http://www.qualquercoisa5.com",
//       email: "e@e.com",
//       password: "jisadaosij",
//     },
//   ]);
// }

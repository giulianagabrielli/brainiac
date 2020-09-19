import * as Knex from "knex";
const faker = require("faker");

const createFakeUrls = () => ({
  url: faker.internet.url(),
  created_at: faker.date.recent(),
});

exports.seed = async function (knex: Knex, Promise: Promise<void>) {
  const fakeUrls = [];
  const desireFakeUrls = 1000;
  for (let i = 0; i < desireFakeUrls; i++) {
    fakeUrls.push(createFakeUrls());
  }

  await knex("urls").insert(fakeUrls);
};

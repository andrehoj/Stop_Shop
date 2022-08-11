import { faker } from "@faker-js/faker";
const db = require("../config/connection");

db.once("open", async () => {
  try {} catch (error) {}
});

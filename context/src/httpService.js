import { db } from "./db";

export const getUser = async () => {
  console.log("getUser fetching...");

  return Promise.resolve(db.user);
};

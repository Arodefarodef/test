import { connect } from "mongoose";
import { DB } from "./constant";

export const dbconfig = async () => {
  await connect(DB)
    .then(() => {
      console.clear();
      console.log("connected");
    })
    .catch((err) => console.error(err));
};

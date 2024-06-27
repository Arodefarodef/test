import { Schema, models, model, Types } from "mongoose";
import { iStaffsData } from "../interface";

const staffModel = new Schema<iStaffsData>(
  {
    staffname: {
      type: String,
    },
    email: {
      type: String,
    },
    role: {
      type: String,
    },
    avatar: {
      type: String,
    },
    password: {
      type: String,
    },
    address: {
      type: String,
    },
    company: [
      {
        type: Types.ObjectId,
        ref: "companies",
      },
    ],
    steps: [
      {
        type: Types.ObjectId,
        ref: "steps",
      },
    ],
  },
  { timestamps: true }
);

const staffData = models.Staff || model<iStaffsData>("staff", staffModel);
export default staffData;

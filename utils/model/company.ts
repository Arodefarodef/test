import { Types, model, models, Schema } from "mongoose";
import { iCompanyData } from "../interface";

const companyModel = new Schema<iCompanyData>(
  {
    companyname: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
    },
    logo: {
      type: String,
    },
    plan: {
      type: String,
    },
    plancost: {
      type: Number,
    },
    staffs: [
      {
        type: Types.ObjectId,
        ref: "staffs",
      },
    ],
    project: [
      {
        type: Types.ObjectId,
        ref: "companies",
      },
    ],
  },
  { timestamps: true }
);

const companyData =
  models.Companies || model<iCompanyData>("companies", companyModel);

export default companyData;

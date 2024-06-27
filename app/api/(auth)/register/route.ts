import { dbconfig } from "@/utils/dbconfig";
import companyData from "@/utils/model/company";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export const GET = async () => {
  try {
    await dbconfig();
    const company = await companyData.find();
    return NextResponse.json({
      message: "company found",
      status: 200,
      data: company,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error",
      status: 404,
      error: error.message,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { email, password, companyname, plan, plancost } = await req.json();
    await dbconfig();

    const salt = await bcryptjs.genSalt(10);
    const hashed = await bcryptjs.hash(password, salt);

    const company = await companyData.create({
      email,
      password: hashed,
      companyname,
      role: "owner",
      plan,
      plancost,
    });
    return NextResponse.json({
      message: "company found",
      status: 200,
      data: company,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error",
      status: 404,
      error: error.message,
    });
  }
};

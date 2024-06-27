import { dbconfig } from "@/utils/dbconfig";
import companyData from "@/utils/model/company";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import staffData from "@/utils/model/staff";

export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();
    await dbconfig();

    const company = await companyData.findOne({
      email,
    });

    const staff = await staffData.findOne({
      email,
    });

    if (company) {
      const check = await bcryptjs.compare(password, company.password);

      if (check) {
        console.log("show me: ", check);
        return NextResponse.json({
          message: "company sign in",
          data: company,
          status: 201,
        });
      } else {
        return NextResponse.json({
          message: "Error with Email",
          status: 404,
        });
      }
    } else if (staff) {
      const checkStaff = await bcryptjs.compare(password, staff.password);
      if (checkStaff) {
        return NextResponse.json({
          message: "staff sign in",
          data: staff,
          status: 201,
        });
      } else {
        return NextResponse.json({
          message: "Error with Email",
          status: 404,
        });
      }
    } else {
      return NextResponse.json({
        message: "Error with Email",
        status: 404,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "Error reading companies signin data",
      error: error.message || error,
      status: 404,
    });
  }
};

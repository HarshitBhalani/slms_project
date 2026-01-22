import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  try {
    // ✅ Dummy Users Data (Your schema ke exact according)
    const users = [
      {
        fullName: "Harshit Bhalani",
        companyName: "HB Logistics Pvt Ltd",
        designation: "Manager",
        role: "Manager",
        mobileNumber: "9999999991",
        email: "harshit1@gmail.com",
        password: "123456",

        currentOtp: 111111,
        otpCount: 1,
        otpHistory: [
          { code: 111111, type: "mail" },
          { code: 222222, type: "sms" },
        ],

        buildingNumber: "A-101",
        areaName: "Vastrapur",
        landmark: "Near Lake",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India",
        pinCode: "380015",

        gstNumber: "24ABCDE1234F1Z5",
        panNumber: "ABCDE1234F",
        panFrontImage: "https://dummycdn.com/pan-front.jpg",
        aadhaarNumber: "123412341234",
        aadhaarFrontImage: "https://dummycdn.com/aadhar-front.jpg",
        aadhaarBackImage: "https://dummycdn.com/aadhar-back.jpg",

        bankAccountNumber: "123456789012",
        ifscCode: "HDFC0000123",
        bankName: "HDFC Bank",
        accountHolderName: "Harshit Bhalani",

        vendorPending: false,
        vendorApproved: true,
        vendorVerified: true,

        isConfirmed: true,

        loginHistory: [
          { deviceInfo: "Chrome Windows 11" },
          { deviceInfo: "Android App" },
        ],
      },

      {
        fullName: "Bansri Bhalani",
        companyName: "BB Tech Solutions",
        designation: "Founder",
        role: "Founder",
        mobileNumber: "9999999992",
        email: "bansri@gmail.com",
        password: "654321",

        currentOtp: null,
        otpCount: 0,
        otpHistory: [],

        buildingNumber: "B-202",
        areaName: "Navrangpura",
        landmark: "Near Metro",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India",
        pinCode: "380009",

        gstNumber: null,
        panNumber: "PQRSX5678Y",
        panFrontImage: null,
        aadhaarNumber: null,
        aadhaarFrontImage: null,
        aadhaarBackImage: null,

        bankAccountNumber: null,
        ifscCode: null,
        bankName: null,
        accountHolderName: null,

        vendorPending: true,
        vendorApproved: false,
        vendorVerified: false,

        isConfirmed: false,

        loginHistory: [{ deviceInfo: "Safari MacOS" }],
      },
    ];

    // ✅ Insert users one by one using upsert (duplicate issue avoid)
    const inserted = [];
    for (const u of users) {
      const createdUser = await prisma.user.upsert({
        where: { email: u.email },
        update: {}, // agar already exist ho to update skip
        create: u as any,
      });
      inserted.push(createdUser);
    }

    return NextResponse.json(
      {
        success: true,
        message: "✅ Dummy users inserted successfully into MongoDB!",
        count: inserted.length,
        data: inserted,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("SEED ERROR:", error);
    return NextResponse.json(
      {
        success: false,
        message: "❌ Failed to insert dummy users",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

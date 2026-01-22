import mongoose from "mongoose";
 import cuid from "cuid";   
/** Embedded Types (Prisma type OtpAttempt) */
const OtpAttemptSchema = new mongoose.Schema(
  {
    code: { type: Number },
    type: { type: String }, // sms, mail, whatsapp
    createdAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

/** Embedded Types (Prisma type LoginRecord) */
const LoginRecordSchema = new mongoose.Schema(
  {
    deviceInfo: { type: String },
    loggedInAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

/** Enum Role */
const ROLE_ENUM = [
  "Founder",
  "CEO",
  "Manager",
  "Admin",
  "TechnicalSupport",
  "Consignor",
  "Consignee",
];

const UserSchema = new mongoose.Schema(
  {
    // Prisma Mongo ObjectId (_id)
    // id: String @id @default(auto()) @map("_id") @db.ObjectId
    // Mongoose automatically creates _id as ObjectId

    // UID 1 - Auto-generated unique string
   
    uid1: { type: String, unique: true, default: () => cuid() },
    uid2: { type: String, default: null }, // internal structure
    uid3: { type: String, default: null }, // pan card id visible

    // Identity
    fullName: { type: String, required: true },
    companyName: { type: String, required: true },
    designation: { type: String, required: true, default: "Manager" },
    role: { type: String, enum: ROLE_ENUM, default: "Manager" },

    mobileNumber: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },

    // password 6-digit numeric (store as string or hashed)
    password: { type: String, required: true },

    // OTP Logic
    currentOtp: { type: Number, default: null },
    otpCount: { type: Number, default: 0 }, // Max 3 logic
    otpHistory: { type: [OtpAttemptSchema], default: [] },

    // Address
    buildingNumber: { type: String, default: null },
    areaName: { type: String, default: null },
    landmark: { type: String, default: null },
    city: { type: String, default: null },
    state: { type: String, default: null },
    country: { type: String, default: "India" },
    pinCode: { type: String, default: null },

    // KYC
    gstNumber: { type: String, default: null },
    panNumber: { type: String, default: null },
    panFrontImage: { type: String, default: null },

    aadhaarNumber: { type: String, default: null },
    aadhaarFrontImage: { type: String, default: null },
    aadhaarBackImage: { type: String, default: null },

    // Bank
    bankAccountNumber: { type: String, default: null },
    ifscCode: { type: String, default: null },
    bankName: { type: String, default: null },
    accountHolderName: { type: String, default: null },

    // Vendor Status
    vendorPending: { type: Boolean, default: true },
    vendorApproved: { type: Boolean, default: false },
    vendorVerified: { type: Boolean, default: false },
    vendorBlocked: { type: Boolean, default: false },
    vendorDeleted: { type: Boolean, default: false },
    vendorTechIssue: { type: Boolean, default: false },

    // Workflow
    isConfirmed: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    isInTransit: { type: Boolean, default: false },
    isUnloading: { type: Boolean, default: false },
    isDelivered: { type: Boolean, default: false },
    isInvoiced: { type: Boolean, default: false },
    isPaid: { type: Boolean, default: false },

    loginHistory: { type: [LoginRecordSchema], default: [] },

    // createdAt DateTime @default(now())
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: false } // kyunki Prisma me sirf createdAt hai
);

// ✅ Indexing for performance (optional but recommended)
UserSchema.index({ email: 1 });
UserSchema.index({ mobileNumber: 1 });
UserSchema.index({ uid1: 1 });

export default mongoose.models.User || mongoose.model("User", UserSchema);

import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://harshitbhalani187_db_user:Ab4Usvv6SnVsropo@slmscluster.phmyf4m.mongodb.net/slms?appName=slmsCluster";

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env file");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

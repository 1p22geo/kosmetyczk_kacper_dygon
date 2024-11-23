import { MongoClient, ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { env } from "process";

export const GET = async (_: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  const uri = env.MONGODB_URI
    ? env.MONGODB_URI
    : (() => {
      throw Error("no mongodb URI, set MONGODB_URI environment variable");
    })();
  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db("kosmetyczk");
  const sessions = db.collection("sessions");
  const id = (await params).id

  const session = await sessions.findOne({ _id: new ObjectId(id) });
  if (!session) {
    return NextResponse.json({ status: "session not found" }, { status: 404 });
  }
  await client.close();
  return NextResponse.json({
    type: "session from session cookie",
    session: session,
  });
};

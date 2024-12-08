"use server"

import { env } from "process";
import { MongoClient, ObjectId, WithoutId } from "mongodb";
import { Treatment } from "@/app/components/admin-panel-related/treatment-list/treatment-list";
import {redirect} from "next/navigation";

export const usunZabieg = async (
  id: ObjectId
) => {
  "use server";
  const uri = env.MONGODB_URI
    ? env.MONGODB_URI
    : (() => {
      throw Error("no mongodb URI, set MONGODB_URI environment variable");
    })();

  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db("kosmetyczk");
  const treatments = db.collection<WithoutId<Treatment>>("treatments");

  await treatments.deleteOne({ _id: id });
  await client.close();


};

export const DelZabiegAction = async (d: FormData) => {
  "use server";
  await usunZabieg(
    new ObjectId(d.get("id_treatment")?.toString() ?? ""),
  );
  redirect(`/admin-panel`);
}

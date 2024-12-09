"use server";

import { env } from "process";
import { MongoClient, ObjectId, WithoutId } from "mongodb";
import { Treatment } from "@/app/components/admin-panel-related/treatment-list/treatment-list";
import { redirect } from "next/navigation";

export const edytujZabieg = async (
  id: ObjectId,
  nazwa: string,
  opis: string,
  cena: number,
  czas: number
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

  await treatments.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        price: cena,
        description: opis,
        title: nazwa,
        time: czas,
      },
    }
  );
  await client.close();
};

export const EdytujZabiegAction = async (d: FormData) => {
  "use server";
  await edytujZabieg(
    new ObjectId(d.get("id_zabieg")?.toString() ?? ""),
    d.get("nazwa")?.toString() ?? "",
    d.get("opis")?.toString() ?? "",
    parseFloat(d.get("cena")?.toString() ?? ""),
    parseInt(d.get("czas")?.toString() ?? "")
  );
  redirect(`/admin-panel?submitted=true`); // to se możesz zmienić
};

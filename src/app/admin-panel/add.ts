"use server"

import { env } from "process";
import { MongoClient, WithoutId } from "mongodb";
import { Treatment } from "../components/admin-panel-related/treatment-list/treatment-list";

export const dodajZabieg = async (
  nazwa: string,
  opis: string,
  cena: number,
  czas: number,
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

  await treatments.insertOne({
    title: nazwa,
    description: opis,
    price: cena,
    time: czas
  });

  await client.close();


};

export const DodajZabiegAction = async (d: FormData) => {
  "use server";
  return dodajZabieg(
    d.get("nazwa")?.toString() ?? "",
    d.get("opis")?.toString() ?? "",
    parseFloat(d.get("cena")?.toString() ?? "0"),
    parseInt(d.get("czas")?.toString() ?? "0"),
  );
};

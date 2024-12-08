import GeneralLayout from "@/app/generalLayout";
import "./admin-panel.css";
import { MongoClient, ObjectId, WithoutId } from "mongodb";
import { Zabiegi } from "./zabiegi";

import { env } from "process";
import {
  ClientSantizedTreatment,
  Treatment,
} from "../components/admin-panel-related/treatment-list/treatment-list";

export default async function AdminPanel() {
  const uri = env.MONGODB_URI
    ? env.MONGODB_URI
    : (() => {
        throw Error("no mongodb URI, set MONGODB_URI environment variable");
      })();
  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db("kosmetyczk");
  const treatments = db.collection<Treatment>("treatments");

  const treatmentArray: ClientSantizedTreatment[] = (
    await treatments.find({}).toArray()
  ).map((t) => ({ ...t, _id: t._id.toString() }));

  await client.close();

  return (
    <GeneralLayout>
      <div className="admin-panel">
        <h1>Panel admina</h1>
        <div className="admin-users-section">
          <h2>Konta użytkowników</h2>
          <div></div>
        </div>
        <Zabiegi treatmentArray={treatmentArray} />
        <div className="admin-workers-section">
          <h2>Pracownicy</h2>
        </div>
      </div>
    </GeneralLayout>
  );
}

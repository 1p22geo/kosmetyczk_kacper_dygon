import GeneralLayout from "@/app/generalLayout";
import {
  ClientSantizedTreatment,
  Treatment,
} from "@/app/components/admin-panel-related/treatment-list/treatment-list";
import "./treatments.css";

import { MongoClient, ObjectId, WithoutId } from "mongodb";

import { env } from "process";
import { Client } from "undici-types";

export default async function Treatments() {
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

  const renderedTreatmentList = treatmentArray.map(
    (treatment: ClientSantizedTreatment) => {
      return (
        <div key={treatment._id.toString()} className="treatment-element">
          <h2>
            <b>{treatment.title}</b>
          </h2>
          <p>{treatment.description}</p>
          <p>
            <b>Cena: </b>
            {treatment.price.toFixed(2)} zł
          </p>
          <p>
            <b>Czas trwania: </b>
            {treatment.time} minut
          </p>
          <a href="/book-now" className="plain-button">
            Umawiam się
          </a>
        </div>
      );
    },
  );

  return (
    <GeneralLayout>
      <div className="treatments">
        <h1>Dostępne zabiegi</h1>

        <div className="treatment-list">{renderedTreatmentList}</div>
      </div>
    </GeneralLayout>
  );
}

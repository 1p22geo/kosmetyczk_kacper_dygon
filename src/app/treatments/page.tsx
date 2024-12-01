import GeneralLayout from "@/app/generalLayout";
import {ClientSantizedTreatment, Treatment} from "@/app/components/admin-panel-related/treatment-list/treatment-list";
import "./treatments.css";

import { MongoClient, ObjectId, WithoutId } from "mongodb";

import { env } from "process";
import {Client} from "undici-types";

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


  // let id = 0;
  //
  // const treatmentArray: Treatment[] = [
  //   {
  //     id: id++,
  //     title: "Usuwanie oczów",
  //     description:
  //       "Procedura, w której usuwa się oczy, w przypadku, gdy ktoś chce być niewidomy.",
  //     price: 249.9,
  //     time: 90,
  //   },
  //   {
  //     id: id++,
  //     title: "Wycinanie nerek",
  //     description:
  //       "Nerki mają niekorzystny wpływ dla zdrowia - u nas możesz się ich pozbyć.",
  //     price: 399.9,
  //     time: 150,
  //   },
  //   {
  //     id: id++,
  //     title: "Obgryzanie paznokci",
  //     description:
  //       "Nasi pracownicy obgryzą Ci paznokcie, by wyglądały jeszcze piękniej.",
  //     price: 49.9,
  //     time: 30,
  //   },
  // ];

  const renderedTreatmentList = treatmentArray.map((treatment: ClientSantizedTreatment) => {
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
  });

  return (
    <GeneralLayout>
      <div className="treatments">
        <h1>Dostępne zabiegi</h1>

        <div className="treatment-list">{renderedTreatmentList}</div>
      </div>
    </GeneralLayout>
  );
}

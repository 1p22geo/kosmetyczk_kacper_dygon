import GeneralLayout from "@/app/generalLayout";
import "./admin-panel.css";
import { MongoClient, ObjectId, WithoutId } from "mongodb";
import { Zabiegi } from "./treatments/zabiegi";
import { User, ClientSantizedUser } from "./users/uzytkownicy";
import Pracownicy from "./workers/pracownicy";

import { env } from "process";
import {
  ClientSantizedTreatment,
  Treatment,
} from "@/app/components/admin-panel-related/treatment-list/treatment-list";
import Uzytkownicy from "@/app/admin-panel/users/uzytkownicy";

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

  const treatmentsArray: ClientSantizedTreatment[] = (
    await treatments.find({}).toArray()
  ).map((t: Treatment) => ({ ...t, _id: t._id.toString() }));

  const users = db.collection<User>("users");

  const usersArray: ClientSantizedUser[] = (await users.find({}).toArray()).map(
    (u: User) => ({ ...u, _id: u._id.toString() })
  );

  await client.close();

  //test
  usersArray[0].type = "pracownik";

  const workersArray: ClientSantizedUser[] = usersArray.filter((user) => {
    return user.type == "pracownik";
  });

  const clientsArray: ClientSantizedUser[] = usersArray.filter((user) => {
    return user.type == "klient";
  });

  return (
    <GeneralLayout>
      <div className="admin-panel">
        <h1>Panel admina</h1>
        <Uzytkownicy usersArray={usersArray} />
        <Zabiegi treatmentsArray={treatmentsArray} />
        <Pracownicy clientsArray={clientsArray} workersArray={workersArray} />
      </div>
    </GeneralLayout>
  );
}

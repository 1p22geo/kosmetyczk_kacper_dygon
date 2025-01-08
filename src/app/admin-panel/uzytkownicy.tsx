import { MongoClient, ObjectId, WithoutId } from "mongodb";
import { env } from "process";

export interface User {
  _id: ObjectId;
  username: string;
  email: string;
  hash: string;
  type: string;
}
export interface ClientSantizedUser {
  _id: string;
  username: string;
  email: string;
  hash: string;
  type: string;
}

export default async function Uzytkownicy() {
  const uri = env.MONGODB_URI
    ? env.MONGODB_URI
    : (() => {
        throw Error("no mongodb URI, set MONGODB_URI environment variable");
      })();
  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db("kosmetyczk");
  const users = db.collection<User>("users");

  const userArray: ClientSantizedUser[] = (await users.find({}).toArray()).map(
    (t) => ({ ...t, _id: t._id.toString() }),
  );

  await client.close();

  const renderedUserList = userArray.map((user: ClientSantizedUser) => {
    return (
      <div key={user._id.toString()} className="admin-panel-list-element">
        <p>Id: {user._id}</p>
        <p>Email: {user.username}</p>
        <p>Hash: {user.hash}</p>
        <p>Typ: {user.type}</p>
      </div>
    );
  });

  return <div>{renderedUserList}</div>;
}

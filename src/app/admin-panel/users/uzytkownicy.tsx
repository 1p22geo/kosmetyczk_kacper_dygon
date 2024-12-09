"use client";

import { MongoClient, ObjectId, WithoutId } from "mongodb";

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

export default function Uzytkownicy(props: {
  usersArray: Array<ClientSantizedUser>;
}) {
  const renderedUserList = props.usersArray.map((user: ClientSantizedUser) => {
    return (
      <div key={user._id.toString()} className="admin-panel-list-element">
        <p>Id: {user._id}</p>
        <p>Email: {user.username}</p>
        <p>Hash: {user.hash}</p>
        <p>Typ: {user.type}</p>
      </div>
    );
  });

  return (
    <div className="admin-section">
      <h2>Konta użytkowników</h2>
      <div>{renderedUserList}</div>
    </div>
  );
}

"use client";

import { User, ClientSantizedUser } from "@/app/admin-panel/users/uzytkownicy";
import AdminPanelDialog, {
  AdminPanelDialogHandle,
} from "@/app/components/admin-panel-related/admin-panel-dialog/admin-panel-dialog";
import { useRef } from "react";

export default function Pracownicy(props: {
  workersArray: Array<ClientSantizedUser>;
  clientsArray: Array<ClientSantizedUser>;
}) {
  const addWorkerDialog = useRef<AdminPanelDialogHandle>(null);

  const renderedClientsArray = props.clientsArray.map((user) => {
    return (
      <div className="admin-panel-list-element" key={user._id}>
        <p>Email: {user.username}</p>
        <button className="plain-button">Dodaj jako pracownika</button>
      </div>
    );
  });

  const renderedWorkersArray = props.workersArray.map((user) => {
    return (
      <div className="admin-panel-list-element" key={user._id}>
        <p>Email: {user.username}</p>
        <button className="plain-button">Usuń pracownika</button>
      </div>
    );
  });

  return (
    <div className="admin-section">
      <h2>Pracownicy</h2>
      <button
        className="primary-button"
        onClick={addWorkerDialog.current?.open}
      >
        Dodaj pracownika
      </button>

      {renderedWorkersArray}
      <AdminPanelDialog ref={addWorkerDialog}>
        {renderedClientsArray}
      </AdminPanelDialog>
    </div>
  );
}

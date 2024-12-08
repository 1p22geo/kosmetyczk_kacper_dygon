"use client";

import { ClientSantizedTreatment } from "@/app/components/admin-panel-related/treatment-list/treatment-list";
import { DelZabiegAction } from "@/app/components/admin-panel-related/treatment-list/del.action";
import AdminPanelDialog, {
  AdminPanelDialogHandle,
} from "@/app/components/admin-panel-related/admin-panel-dialog/admin-panel-dialog";
import { useRef } from "react";

export default function TreatmentItem(props: {
  treatment: ClientSantizedTreatment;
}) {
  const editTreatmentDialog = useRef<AdminPanelDialogHandle>(null);

  return (
    <div
      key={props.treatment._id.toString()}
      className="admin-panel-list-element"
    >
      <div>
        <p>
          <b>Nazwa: </b>
          {props.treatment.title}
        </p>
      </div>
      <div>
        <p>
          <b>Opis: </b>
          {props.treatment.description}
        </p>
      </div>
      <div>
        <p>
          <b>Cena: </b>
          {props.treatment.price.toFixed(2)} zł
        </p>
      </div>
      <div>
        <p>
          <b>Czas: </b>
          {props.treatment.time} minut
        </p>
      </div>
      <button
        className="plain-button"
        onClick={() => editTreatmentDialog.current?.open()}
      >
        Edytuj
      </button>
      <form className="inline" action={DelZabiegAction}>
        <input
          type="submit"
          id={`${props.treatment._id.toString()}-submit-delete`}
          className="sr-only"
        />
        <input
          type="hidden"
          name="id_treatment"
          defaultValue={props.treatment._id.toString()}
        />
        <label htmlFor={`${props.treatment._id.toString()}-submit-delete`}>
          <span className="plain-button cursor-pointer">Usuń</span>
        </label>
      </form>
      <AdminPanelDialog ref={editTreatmentDialog}>
        <form>
          <h3>Edytuj zabieg</h3>
          <label>
            Nazwa
            <input type="text" defaultValue={props.treatment.title} />
          </label>
          <label>
            Opis
            <textarea defaultValue={props.treatment.description} />
          </label>
          <label>
            Cena (zł)
            <input
              type="number"
              step="0.01"
              inputMode="numeric"
              min="0.01"
              defaultValue={props.treatment.price}
            />
          </label>
          <input type="submit" defaultValue="Edytuj" />
        </form>
      </AdminPanelDialog>
    </div>
  );
}

"use client";

import { useRef } from "react";
import AdminPanelDialog, {
  AdminPanelDialogHandle,
} from "@/app/components/admin-panel-related/admin-panel-dialog/admin-panel-dialog";

import TreatmentList, {
  ClientSantizedTreatment,
  Treatment,
} from "@/app/components/admin-panel-related/treatment-list/treatment-list";
import { DodajZabiegAction } from "./add";
export const Zabiegi = ({
  treatmentArray,
}: {
  treatmentArray: ClientSantizedTreatment[];
}) => {
  const addTreatmentDialog = useRef<AdminPanelDialogHandle>(null);

  return (
    <div className="admin-treatments-section">
      <h2>Zabiegi</h2>
      <button
        onClick={() => addTreatmentDialog.current?.open()}
        className="primary-button"
      >
        Dodaj zabieg
      </button>
      <TreatmentList treatmentsArray={treatmentArray} />

      <AdminPanelDialog ref={addTreatmentDialog}>
        <form action={DodajZabiegAction}>
          <h3>Dodaj zabieg</h3>
          <label>
            Nazwa
            <input type="text" name="nazwa" />
          </label>
          <label>
            Opis
            <textarea name="opis" />
          </label>
          <label>
            Cena (zł)
            <input
              type="number"
              step="0.01"
              inputMode="numeric"
              min="0.01"
              name="cena"
            />
          </label>
          <label>
            Czas (min)
            <input
              type="number"
              step="1"
              inputMode="numeric"
              min="1"
              name="czas"
            />
          </label>
          <input type="submit" value="Dodaj" />
        </form>
      </AdminPanelDialog>
    </div>
  );
};

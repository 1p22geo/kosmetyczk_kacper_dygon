import "./treatment-list.css";

import { ObjectId } from "mongodb";

// import AdminPanelDialog, {
//     AdminPanelDialogHandle
// } from "@/app/components/admin-panel-related/admin-panel-dialog/admin-panel-dialog";
export interface Treatment {
  _id: ObjectId;
  title: string;
  description: string;
  price: number;
  time: number;
}
export interface ClientSantizedTreatment {
  _id: string; // ObjectId nie można wysłać na klienta
  title: string;
  description: string;
  price: number;
  time: number;
}

export default function TreatmentList(props: {
  treatmentsArray: Array<ClientSantizedTreatment>;
}) {
  const renderedTreatmentList = props.treatmentsArray.map(
    (treatment: ClientSantizedTreatment) => {
      return (
        <div
          key={treatment._id.toString()}
          className="admin-panel-list-element"
        >
          <div>
            <p>
              <b>Nazwa: </b>
              {treatment.title}
            </p>
          </div>
          <div>
            <p>
              <b>Opis: </b>
              {treatment.description}
            </p>
          </div>
          <div>
            <p>
              <b>Cena: </b>
              {treatment.price.toFixed(2)} zł
            </p>
          </div>
          <div>
            <p>
              <b>Czas: </b>
              {treatment.time} minut
            </p>
          </div>
          <button className="plain-button">Edytuj</button>
          <button className="plain-button">Usuń</button>
          {/*<AdminPanelDialog>*/}
          {/*    <form>*/}
          {/*        <h3>Edytuj zabieg</h3>*/}
          {/*        <label>*/}
          {/*            Nazwa*/}
          {/*            <input type="text" value={treatment.title}/>*/}
          {/*        </label>*/}
          {/*        <label>*/}
          {/*            Opis*/}
          {/*            <textarea  value={treatment.description}/>*/}
          {/*        </label>*/}
          {/*        <label>*/}
          {/*            Cena (zł)*/}
          {/*            <input type="number" step="0.01" inputMode="numeric" min="0.01" value={treatment.price}/>*/}
          {/*        </label>*/}
          {/*        <input type="submit" value="Zmień"/>*/}
          {/*    </form>*/}
          {/*</AdminPanelDialog>*/}
        </div>
      );
    },
  );

  return <div>{renderedTreatmentList}</div>;
}

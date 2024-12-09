import "./treatment-list.css";
import TreatmentItem from "./treatment-item";

import { ObjectId } from "mongodb";

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
      return <TreatmentItem treatment={treatment} key={treatment._id} />;
    }
  );

  return (
    <div className="w-full flex flex-col items-center">
      {renderedTreatmentList}
    </div>
  );
}

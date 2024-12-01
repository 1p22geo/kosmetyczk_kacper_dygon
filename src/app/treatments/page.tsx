import GeneralLayout from "@/app/generalLayout";
import { Treatment } from "@/app/components/admin-panel-related/treatment-list/treatment-list";
import "./treatments.css";

export default function Treatments() {
  let id = 0;

  const treatmentArray: Treatment[] = [
    {
      id: id++,
      title: "Usuwanie oczów",
      description:
        "Procedura, w której usuwa się oczy, w przypadku, gdy ktoś chce być niewidomy.",
      price: 249.9,
      time: 90,
    },
    {
      id: id++,
      title: "Wycinanie nerek",
      description:
        "Nerki mają niekorzystny wpływ dla zdrowia - u nas możesz się ich pozbyć.",
      price: 399.9,
      time: 150,
    },
    {
      id: id++,
      title: "Obgryzanie paznokci",
      description:
        "Nasi pracownicy obgryzą Ci paznokcie, by wyglądały jeszcze piękniej.",
      price: 49.9,
      time: 30,
    },
  ];

  const renderedTreatmentList = treatmentArray.map((treatment: Treatment) => {
    return (
      <div key={treatment.id} className="treatment-element">
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

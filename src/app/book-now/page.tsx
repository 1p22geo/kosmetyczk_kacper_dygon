import GeneralLayout from "@/app/generalLayout";
import "./book-now.css";
import { env } from "process";
import {
  ClientSantizedTreatment,
  Treatment,
} from "@/app/components/admin-panel-related/treatment-list/treatment-list";
import { MongoClient, ObjectId, WithoutId } from "mongodb";
import TreatmentItem from "@/app/components/admin-panel-related/treatment-list/treatment-item";

export default async function BookNow() {
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

  return (
    <GeneralLayout>
      <section className="appointment-hero">
        <div className="appointment-hero-content">
          <h1>Umów się na wizytę</h1>
          <p>
            Zarezerwuj termin w naszym salonie w dogodnym dla Ciebie czasie.
          </p>
        </div>
      </section>

      <section className="appointment-form">
        <h2>Formularz rezerwacji</h2>
        <form
          action="/submit-appointment"
          method="post"
          className="form-container"
        >
          <div className="form-group">
            <label htmlFor="name">Imię i nazwisko:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Twoje imię i nazwisko"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Adres e-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Twój adres e-mail"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Numer telefonu:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Twój numer telefonu"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="worker">Wybierz preferowanego pracownika:</label>
            <select defaultValue="DEFAULT" required id="worker" name="worker">
              <option value="DEFAULT" disabled>
                Wybierz z listy...
              </option>
              <option>Obojętnie</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="service">Wybierz zabieg:</label>
            <select defaultValue="DEFAULT" id="service" name="service" required>
              <option value="DEFAULT" disabled>
                Wybierz z listy...
              </option>
              {treatmentArray.map((treatment: ClientSantizedTreatment) => {
                return <option key={treatment._id}>{treatment.title}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Data wizyty:</label>
            <input type="date" id="date" name="date" required />
          </div>
          <div className="form-group">
            <label htmlFor="time">Godzina wizyty:</label>
            <input type="time" id="time" name="time" required />
          </div>
          <div className="form-group">
            <label htmlFor="notes">Dodatkowe uwagi (opcjonalne):</label>
            <textarea
              id="notes"
              name="notes"
              placeholder="Czy masz jakieś szczególne wymagania?"
            ></textarea>
          </div>
          <button type="submit" className="btn-submit primary-button">
            Zarezerwuj termin
          </button>
        </form>
      </section>
    </GeneralLayout>
  );
}

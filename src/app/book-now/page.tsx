"use client"; // To pozwala na użycie logiki klienckiej

import { useState } from "react";
import "./book-now.css";
import GeneralLayout from "@/app/generalLayout";
import Page from "@/app/book-now/gowno/page";

export default function BookNow() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [notes, setNotes] = useState("");
    const [message, setMessage] = useState("");

    const availableTimes = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            phone,
            service,
            date,
            time,
            notes,
        };

        try {
            const response = await fetch("http://localhost:4000/submit-appointment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                setMessage(result.message); // Success message
            } else {
                setMessage("Coś poszło nie tak!");
            }
        } catch (error) {
            setMessage(`Wystąpił błąd przy wysyłaniu formularza: ${error.message}`);
        }
    };

    return (
        <GeneralLayout>
        <div>
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
                <form onSubmit={handleSubmit} className="form-container">
                    <div className="form-group">
                        <label htmlFor="name">Imię i nazwisko:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Twoje imię i nazwisko"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="service">Wybierz zabieg:</label>
                        <select
                            defaultValue="DEFAULT"
                            id="service"
                            name="service"
                            onChange={(e) => setService(e.target.value)}
                            required
                        >
                            <option value="DEFAULT" disabled>Wybierz z listy...</option>
<Page/>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Data wizyty:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Godzina wizyty:</label>
                        <select
                            id="time"
                            name="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        >
                            <option value="DEFAULT" disabled>Wybierz godzinę...</option>
                            {availableTimes.map((time, idx) => (
                                <option key={idx} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">Dodatkowe uwagi (opcjonalne):</label>
                        <textarea
                            id="notes"
                            name="notes"
                            placeholder="Czy masz jakieś szczególne wymagania?"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn-submit primary-button">Zarezerwuj termin</button>
                    {message && <p>{message}</p>}
                </form>
            </section>


        </div>
        </GeneralLayout>
    );
}

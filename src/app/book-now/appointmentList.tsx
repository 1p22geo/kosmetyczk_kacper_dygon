"use client"; // To pozwala na użycie logiki klienckiej

import React, { useEffect, useState } from 'react';

export default function UpcomingAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [message, setMessage] = useState("");  // Aby wyświetlić komunikat o błędzie

    useEffect(() => {
        // Funkcja do pobierania nadchodzących wizyt
        const fetchUpcomingAppointments = async () => {
            try {
                // Inicjowanie żądania do backendu
                const response = await fetch("http://localhost:4000/upcoming-appointments");

                if (response.ok) {
                    const data = await response.json();  // Czekamy na dane JSON
                    setAppointments(data);
                } else {
                    setMessage("Nie udało się pobrać nadchodzących wizyt.");
                }
            } catch (error) {
                console.error("Błąd przy ładowaniu wizyt:", error);
                setMessage("Błąd przy ładowaniu wizyt.");
            }
        };

        fetchUpcomingAppointments(); // Wywołanie funkcji po zamontowaniu komponentu
    }, []); // Pusty array oznacza, że efekt uruchomi się tylko raz po załadowaniu komponentu

    return (
        <div>
            <h2>Nadchodzące wizyty</h2>
            {message && <p>{message}</p>} {/* Wyświetlanie komunikatu o błędzie */}
            <ul>
                {appointments.length === 0 ? (
                    <li>Brak nadchodzących wizyt.</li>
                ) : (
                    appointments.map((appointment, idx) => (
                        <li key={idx} className="admin-panel-list-element" style={{width: 550 + "px"}}>
                            <h4>{appointment.name}</h4>
                            <p>{appointment.service}</p>
                                <p>{appointment.date}</p>
                                    <p>{appointment.time}</p>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 4000; // Możesz użyć innego portu

// Middleware do parsowania JSON
app.use(cors());
app.use(express.json());

const filePath = path.resolve(__dirname, "appointments.json");

// Endpoint do pobierania nadchodzących wizyt
app.get("/upcoming-appointments", (req, res) => {
    const filePath = path.resolve("./appointments.json");

    // Jeśli plik istnieje, wczytujemy dane z pliku JSON
    if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath);
        const appointments = JSON.parse(fileData);

        // Filtrujemy tylko nadchodzące wizyty (np. daty po dzisiejszej)
        const upcomingAppointments = appointments.filter(appointment => {
            const appointmentDate = new Date(appointment.date);
            const currentDate = new Date();
            return appointmentDate > currentDate; // Wizyty po dzisiejszej dacie
        });

        // Zwracamy nadchodzące wizyty
        res.status(200).json(upcomingAppointments);
    } else {
        res.status(404).json({ message: "Brak zapisanych wizyt" });
    }
});

// Endpoint do dodawania wizyt
app.post("/submit-appointment", (req, res) => {
    const { name, email, phone, service, date, time, notes } = req.body;

    let appointments = [];
    if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath);
        appointments = JSON.parse(fileData);
    }

    // Sprawdzanie dostępności terminu
    const isTimeTaken = appointments.some(
        (appointment) => appointment.date === date && appointment.time === time
    );

    if (isTimeTaken) {
        return res.status(400).json({ message: "Wybrany termin jest już zajęty." });
    }

    // Dodaj nową wizytę
    const newAppointment = { name, email, phone, service, date, time, notes };
    appointments.push(newAppointment);

    try {
        // Zapisz dane do pliku JSON
        fs.writeFileSync(filePath, JSON.stringify(appointments, null, 2));
        res.status(200).json({ message: "Wizyta została pomyślnie zarezerwowana!" });
    } catch (error) {
        console.error("Error writing to file:", error);
        res.status(500).json({ message: "Błąd przy zapisie do pliku" });
    }
});

// Uruchom serwer
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

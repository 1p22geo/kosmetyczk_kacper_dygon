'use client';

import GeneralLayout from "@/app/generalLayout";
import "./admin-panel.css";
import { useRef } from "react";


export default function AdminPanel() {

    const addTreatmentDialog = useRef<HTMLDialogElement>(null);

    function showAddTreatmentDialog() {
        addTreatmentDialog.current.showModal();
    }

    return (
        <GeneralLayout>
            <div className="admin-panel">
                <h1>Panel admina</h1>
                <div className="admin-users-section">
                    <h2>Konta użytkowników</h2>
                    <div>

                    </div>
                </div>
                <div className="admin-clients-section">
                    <h2>Klienci</h2>
                </div>
                <div className="admin-treatments-section">
                    <h2>Zabiegi</h2>
                    <button onClick={showAddTreatmentDialog} >Dodaj zabieg</button>
                    <dialog ref={addTreatmentDialog}>
                        <form>
                            <h3>Dodaj zabieg</h3>
                            <label>
                                Nazwa
                                <input type="text"/>
                            </label>
                            <label>
                                Opis
                                <textarea/>
                            </label>
                            <label>
                                Cena (zł)
                                <input type="number" step="0.01" inputMode="numeric"/>
                            </label>
                            <input type="submit" value="Dodaj"/>
                        </form>
                    </dialog>

                </div>
                <div className="admin-workers-section">
                    <h2>Pracownicy</h2>
                </div>
            </div>

        </GeneralLayout>
    )

}
'use client';

import GeneralLayout from "@/app/generalLayout";
import "./admin-panel.css";
import TreatmentList, { Treatment } from "@/app/components/admin-panel-related/treatment-list"

import CloseDialogIcon from './close-dialog-icon.svg'
import Image from "next/image"
import {useRef} from "react";


export default function AdminPanel() {

    const addTreatmentDialog = useRef<HTMLDialogElement>(null);

    let id = 0;

    function switchAddTreatmentDialogVisibility(){
        if (addTreatmentDialog.current.open) {
            addTreatmentDialog.current.close();
        } else {
            addTreatmentDialog.current.show();
        }
    }

    const treatmentArray: Treatment[] = [
        {
            id: id++,
            title: "Usuwanie oczów",
            description: "Procedura, w której usuwa się oczy, w przypadku, gdy ktoś chce być niewidomy.",
            price: 249.90
        },
        {
            id: id++,
            title: "Wycinanie nerek",
            description: "Nerki mają niekorzystny wpływ dla zdrowia - u nas możesz się ich pozbyć.",
            price: 399.90
        },
        {
            id: id++,
            title: "Obgryzanie paznokci",
            description: "Nasi pracownicy obgryzą Ci paznokcie, by wyglądały jeszcze piękniej.",
            price: 49.90
        }
    ]

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
                    <button onClick={switchAddTreatmentDialogVisibility} className="text-button">Dodaj zabieg</button>
                    <TreatmentList treatmentsArray={treatmentArray}/>


                    <dialog ref={addTreatmentDialog}>
                        <button className="close-dialog-button" onClick={switchAddTreatmentDialogVisibility}><Image src={CloseDialogIcon} alt="close dialog icon" /></button>
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
                                <input type="number" step="0.01" inputMode="numeric" min="0.01"/>
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
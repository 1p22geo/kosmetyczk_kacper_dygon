
import "./treatment-list.css"
// import AdminPanelDialog, {
//     AdminPanelDialogHandle
// } from "@/app/components/admin-panel-related/admin-panel-dialog/admin-panel-dialog";
export interface Treatment{
    id: number;
    title: string;
    description: string;
    price: number;
}

export default function TreatmentList(props: {treatmentsArray: Array<Treatment>}) {

    const renderedTreatmentsList = props.treatmentsArray.map((treatment: Treatment) => {



            return(
                <div key={treatment.id} className="admin-panel-list-element">
                    <div>
                        <p><b>Nazwa: </b>{treatment.title}</p>
                    </div>
                    <div>
                        <p><b>Opis: </b>{treatment.description}</p>
                    </div>
                    <div>
                        <p><b>Cena: </b>{treatment.price.toFixed(2)} zł</p>
                    </div>
                    <button>
                        Edytuj
                    </button>
                    <button>
                        Usuń
                    </button>
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
            )
        }

    )

    return (
        <div>
            {renderedTreatmentsList}
        </div>
    );


}
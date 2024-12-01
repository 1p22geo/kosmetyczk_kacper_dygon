
import "./treatment-list.css"

export interface Treatment{
    id: number;
    title: string;
    description: string;
    price: number;
}

export default function TreatmentList(props: {treatmentsArray: Array<Treatment>}) {

    // function switchEditDialogVisibility

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
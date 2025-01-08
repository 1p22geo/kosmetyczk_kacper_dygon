import {
    ClientSantizedTreatment,
    Treatment,
} from "@/app/components/admin-panel-related/treatment-list/treatment-list";


import { MongoClient, ObjectId, WithoutId } from "mongodb";

import { env } from "process";
import { Client } from "undici-types";

export default function Page() {
    // const uri = env.MONGODB_URI
    //     ? env.MONGODB_URI
    //     : (() => {
    //         throw Error("no mongodb URI, set MONGODB_URI environment variable");
    //     })();
    // const client = new MongoClient(uri);
    // await client.connect();
    //
    // const db = client.db("kosmetyczk");
    // const treatments = db.collection<Treatment>("treatments");
    //
    // const treatmentArray: ClientSantizedTreatment[] = (
    //     await treatments.find({}).toArray()
    // ).map((t) => ({ ...t, _id: t._id.toString() }));
    //
    // await client.close();
    //
    // const treatmentOptions = treatmentArray.map((treatment) => { return (<option value={treatment.title} key={treatment._id}>{treatments.title}</option>) });

    return (
<>
            <option value="jejapl15">jejapl15</option>
            <option value="wycinka nerek">wycinka nerek</option>
            <option value="manikur">manikur</option>
</>

    )
}
import React, {useState} from "react";
import { Procedure } from "../helpers/types";
import '../sass/edit-form.scss'

const EditProcedureForm = (props: any) => {
    let [procedure, setProcedure] = useState({...props.procedure})
    
    const handleChange = (event:any) => {
        setProcedure({ ...procedure, [event.target.name]: event.target.value });
    };
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        props.handleUpdate(procedure);
    }
    return (
        <div >
        <details>
            <summary>Edit Data</summary>
            <form onSubmit={handleSubmit}> 
                <div className="input-wrap">
                    <label htmlFor="name" id="procede-lbl">Procedure </label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={procedure.name}
                        className="procedure-input"
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        name="price"
                        onChange={handleChange}
                        value={procedure.price}
                        className="input"
                    />
                    <label htmlFor="Hospital name">hospital name</label>
                    <input 
                        type="text"
                        name="hospital_name"
                        onChange={handleChange}
                        value={procedure.hospital_name}
                        className="input"
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="Hospital city">Hospital City</label>
                    <input 
                        type="text"
                        name="hospital_city"
                        onChange={handleChange}
                        value={procedure.hospital_city}
                        className="input"
                    />
                    <label htmlFor="Hospital State">Hospital State</label>
                    <input 
                        type="text"
                        name="hospital_state"
                        onChange={handleChange}
                        value={procedure.hospital_state}
                        className="input"
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="Hospital rating">Rate Hospital</label>
                    <input 
                        type="number"
                        name="hospital_rating"
                        onChange={handleChange}
                        value={procedure.hospital_rating}
                        className="input"
                    />
                    <label htmlFor="healing time">Days to heal</label>
                    <input 
                        type="number"
                        name="heal_time"
                        onChange={handleChange}
                        value={procedure.heal_time}
                        className="input"
                    />
                </div>
                <br/>
                <div className="input-wrap">
                <input className="send" type="submit" value="SUBMIT"></input>
                </div>
            </form>
        </details>
        </div>
    )
}
export default EditProcedureForm
import React, {useState} from "react";
import { Procedure } from "../helpers/types";


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
        <div>
        <details>
            <summary>Edit Data</summary>
            <form onSubmit={handleSubmit}> 
                <div className="input-wrap">
                    <label htmlFor="name" id="procede-lbl">Procedure </label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        //@ts-ignore
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
                        //@ts-ignore
                        value={procedure.price}
                        className="input"
                    />
                    <label htmlFor="Hospital name">hospital name</label>
                    <input 
                        type="text"
                        name="hospitalName"
                        onChange={handleChange}
                        //@ts-ignore
                        value={procedure.hospitalname}
                        className="input"
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="Hospital city">Hospital City</label>
                    <input 
                        type="text"
                        name="hospitalCity"
                        onChange={handleChange}
                        //@ts-ignore
                        value={procedure.hospitalcity}
                        className="input"
                    />
                    <label htmlFor="Hospital State">Hospital State</label>
                    <input 
                        type="text"
                        name="hospitalState"
                        onChange={handleChange}
                        //@ts-ignore
                        value={procedure.hospitalstate}
                        className="input"
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="Hospital rating">Rate Hospital</label>
                    <input 
                        type="number"
                        name="hospitalRating"
                        onChange={handleChange}
                        //@ts-ignore
                        value={procedure.hospitalrating}
                        className="input"
                    />
                    <label htmlFor="healing time">Days to heal</label>
                    <input 
                        type="number"
                        name="healTime"
                        onChange={handleChange}
                        //@ts-ignore
                        value={procedure.healtime}
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
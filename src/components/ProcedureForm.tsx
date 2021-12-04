import React,{ChangeEvent, useState} from "react";
import '../sass/procedure-form.scss'

//procedure name
//Price
//hospital name
//address // city, state
//hospital expierence rating
//healing time
const ProcedureForm = (props: any) => {
    //set state of form
    const defaultForm = {name: ' ', price: ' ', hospitalName: ' ', hospitalCity: ' ', hospitalState: ' ', hospitalRating: ' ', healTime: ' '}
    let [procedure, setProcedure] = useState(defaultForm)

    //handle change
    // targets the value of each input baed on name
    //spreads throuh the value
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setProcedure({...procedure, [e.target.name]: e.target.value})        
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        props.handleCreate(procedure)        
    }

    return (
        <div className="procedure-form">
            <form onSubmit={handleSubmit}> 
                <h2>
                    <span id="logo">SUR+GICAL</span>
                    <br/>
                    contribue now
                    <br/>
                    <br/>
            </h2>
                <div className="input-wrap">
                    <label htmlFor="name" id="procede-lbl" >Procedure </label>
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
                        name="hospitalName"
                        onChange={handleChange}
                        value={procedure.hospitalName}
                        className="input"
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="Hospital city">Hospital City</label>
                    <input 
                        type="text"
                        name="hospitalCity"
                        onChange={handleChange}
                        value={procedure.hospitalCity}
                        className="input"
                    />
                    <label htmlFor="Hospital State">Hospital State</label>
                    <input 
                        type="text"
                        name="hospitalState"
                        onChange={handleChange}
                        value={procedure.hospitalState}
                        className="input"
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="Hospital rating">Rate Hospital</label>
                    <input 
                        type="number"
                        name="hospitalRating"
                        onChange={handleChange}
                        value={procedure.hospitalRating}
                        className="input"
                    />
                    <label htmlFor="healing time">Days to heal</label>
                    <input 
                        type="number"
                        name="healTime"
                        onChange={handleChange}
                        value={procedure.healTime}
                        className="input"
                    />
                </div>
                <br/>
                <div className="input-wrap">
                <input className="send" type="submit" value="SUBMIT"></input>
                </div>
    
            </form>
        </div>

    )
}
export default ProcedureForm
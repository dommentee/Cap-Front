import React,{useState} from "react";
import '../sass/procedure-form.scss'

//procedure name
//Price
//hospital name
//address // city, state
//hospital expierence rating
//healing time
const ProcedureForm = () => {
    return (
        <div className="procedure-form">
            <form>
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
                        className="procedure-input"
                        // onChange={handleChange}
                        // value={procedure.name}
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        name="price"
                        className="input"
                        // onChange={handleChange}
                        // value={message.title}
                    />
                    <label htmlFor="Hospital name">hospital name</label>
                    <input 
                        type="text"
                        name="hospital name"
                        className="input"
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="Hospital city">Hospital City</label>
                    <input 
                        type="text"
                        name="hospital City"
                        className="input"
                    />
                    <label htmlFor="Hospital city">Hospital State</label>
                    <input 
                        type="text"
                        name="hospital state"
                        className="input"
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="Hospital rating">Rate Hospital</label>
                    <input 
                        type="number"
                        name="rating"
                        className="input"
                    />
                    <label htmlFor="healing time">Days to heal</label>
                    <input 
                        type="number"
                        name="healing"
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
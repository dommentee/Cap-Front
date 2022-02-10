import React,{ChangeEvent, useState} from "react";
import '../sass/procedure-form.scss'
import '../helpers/user'
import { userInfo } from "os";

//procedure name
//Price
//hospital name
//address // city, state
//hospital expierence rating
//healing time
const ProcedureForm = (props: any) => {
    //set state of form

    const defaultForm = {name: '', price: '', hospital_name: '',hospital_city: '',hospital_state: '',hospital_rating: '',heal_time: '', contributor_id: ''}
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

    if(!props.user) return <div>loading...</div>
    console.log(props.user.id);
    
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
                <label htmlFor="name" id="procede-lbl" >Procedure </label><br/>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={procedure.name}
                    className="procedure-input"
                />
                <div className="input-wrap">
                    <label htmlFor="price">Price</label><br/>
                    <input
                        type="number"
                        name="price"
                        onChange={handleChange}
                        value={procedure.price}
                        className="input"
                    />
                    <label htmlFor="Hospital name">hospital name</label><br/>
                    <input 
                        type="text"
                        name="hospital_name"
                        onChange={handleChange}
                        value={procedure.hospital_name}
                        className="input"
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="Hospital city">Hospital City</label><br/>
                    <input 
                        type="text"
                        name="hospital_city"
                        onChange={handleChange}
                        value={procedure.hospital_city}
                        className="input"
                    />
                    <label htmlFor="Hospital State">Hospital State</label><br/>
                    <input 
                        type="text"
                        name="hospital_state"
                        onChange={handleChange}
                        value={procedure.hospital_state}
                        className="input"
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="Hospital rating">Rate Hospital</label><br/>
                    <input 
                        type="number"
                        name="hospital_rating"
                        onChange={handleChange}
                        value={procedure.hospital_rating}
                        className="input"
                    />
                    <label htmlFor="healing time">Days to heal</label><br/>
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
                <label htmlFor="contributor_id">Contributor ID </label><br/>
                <input
                    type="text"
                    name="contributor_id"
                    onChange={handleChange}
                    value={props.user.id}
                    className="input"
                    readOnly={true}
                    
                />
                <br/>
                <input className="send" type="submit" value="SUBMIT"></input>
                </div>
    
            </form>
        </div>

    )
}
export default ProcedureForm
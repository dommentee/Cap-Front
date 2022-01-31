import { userInfo } from 'os'
import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'


import EditProcedureForm from '../components/EditProcedureForm'
import { Procedure } from '../helpers/types'
import '../sass/profile.scss'

const Profile = (props: any) => {
    let navagate = useNavigate()
    if(!props.user) return <div>loading...</div>
    return (
        <div className="profile-wrap">
            <div className="user">

                <p>Welcome back {props.user.username}</p>
                <br/>
                <p>
                    Thanks to your contributions we are getting closer to your goal
                    we wudlnt be here without you
                </p>
                <span className="name">
            		SUR+GICAL
          		</span>
                <div className="upload-button" onClick={() => navagate('/contribute')}>Up load procedure</div>
            </div>
            <div className="right">
                <h3>Your contributions</h3>
                <div id="user-data">
                    {
                        props.procedures ? 
                        (
                        props.procedures.map((procedure: Procedure) => (
                        <div className="procedure" key={procedure.procedure_id}>
                            <table>
                                <td>Procedure: {procedure.name}</td>
                                <td>Price: {procedure.price}</td>
                                <td>Hospital: {procedure.hospital_name}</td>
                                <td>City: {procedure.hospital_city}</td>
                                <td>State: {procedure.hospital_state}</td>
                                <td>rating: {procedure.hospital_rating}</td>
                                <td>healing: {procedure.heal_time}</td>
                            </table>
                            <EditProcedureForm  
                                procedure={procedure}
                                handleUpdate={props.handleUpdate}
                            />
                            <button className="delete" onClick={props.handleDelete } value={procedure.procedure_id}>
                                Delete
                            </button>
                        </div>
                        ))
                        ): <></>
                    }
                </div>
            </div>
        </div>
    )
}
export default Profile
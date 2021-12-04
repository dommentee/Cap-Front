import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


import EditProcedureForm from '../components/EditProcedureForm'
import { Procedure } from '../helpers/types'
import '../sass/profile.scss'

const Profile = (props: any) => {
    let navagate = useNavigate()
    return (
        <div className="profile-wrap">
            <div className="user">
                <h3>Welcome back user</h3>
                <h4>
                    Thanks to your contributions we are getting closer to your goal
                    we wudlnt be here without you
                </h4>
                <h5>best</h5>
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
                        props.procedures.map((procedure: Procedure ) => (
                        <div className="procedure" key={procedure.procedure_id}>
                            <table>
                                <td>Procedure: {procedure.name}</td>
                                <td>Price: {procedure.price}</td>
                                <td>Hospital: {procedure.hospitalname}</td>
                                <td>State: {procedure.hospitalstate}</td>
                                <td>Your rating: {procedure.hospitalrating}</td>
                                <td>Time to heal: {procedure.healtime}</td>
                                
                            </table>
                            <EditProcedureForm  
                                procedure={procedure}
                                handleUpdate={props.handleUpdate}
                            />
                            <button onClick={props.handleDelete } value={procedure.procedure_id}>
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
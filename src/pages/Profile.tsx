import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

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
                <h3>Yoour contributions</h3>
                <div id="user-data">
                    {
                        props.procedures ? 
                        (
                        props.procedures.map((procedure: any) => (
                        <div className="procedure">
                            <div className="attribute">{procedure.name}</div>
                            <div className="attribute">{procedure.price}</div>s
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
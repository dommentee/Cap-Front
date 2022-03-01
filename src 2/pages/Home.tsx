import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../sass/home.scss'

//procedure name
//Price
//hospital name
//address // city, state
//hospital expierence rating
//healing time

//the point is not to have a list of procedures
//the point is to properly display the infomation/stats

const Home = (props: any ) => {
      //navaget is used to route for different button 
  let navagate = useNavigate()
    return (
        <div className="home">
            <div className="landing-banner"> 
                <div className='intro'>
                    <p>
                        <span>SUR+GICAL</span>
            		    is here to better prepare you for the unexpected.<br/>
                        It estimates the cost of a medical procedure with the help of you and others willing to share
                        their expierences. The goal? better expierences and transprenacy of hospitals /clinics.
          		    </p>
                </div>
                <div className="intro right">
                    <span className="name">
            		    SUR+GICAL
          		    </span>
 
                    <div>contribue now</div>
                    <div className="upload-button" onClick={() => navagate('/contribute')}>Up load procedure</div>
			    </div>
			</div>

		</div>
    )
}

export default Home
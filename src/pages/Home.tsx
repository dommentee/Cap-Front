import React from 'react'
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
    return (
        <div className="home">
            <div className="landing-banner"> 
                <div className='intro'>
                    <p>
            		    Sur+Gical is the app that takes the estimamted cost of a medical procedure.<br/>
                        The prices are a combnation of you and other users willing to share <br/>
                        their expierences. The goal? transprenacy of hospitals 
          		    </p>
                </div>
                <div className="intro right">
                    <span className="name">
            		    SUR+GICAL
          		    </span>
 
                    <div>contribue now</div>
                    <div className="upload-button">Up load procedure</div>
			    </div>
			</div>
            <div className="mapWrap">
                
            </div>
		</div>
        
        
            // {/* {
            //     props.procedures ? 
            //     (
            //         props.procedures.map((procedure: any) => (
            //         <div className="procedure">
            //             <div className="attribute">{procedure.name}</div>
            //             <div className="attribute">{procedure.price}</div>
            //         </div>
            //     ))
            //     ): <></>
            // } */}

    )
}

export default Home
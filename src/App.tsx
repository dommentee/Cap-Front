import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './sass/App.scss';

//import types
import { Procedure} from './helpers/types';

//components
import ProcedureForm from './components/ProcedureFrom';
import Header from './components/Header';



const App = () => {
  //set state of data
  const [procedures, setProcedures] = useState<Array<Procedure>>([])//need to be array of porocedures
  const getProcedures = () => {
    axios.get(`https://still-plateau-52039.herokuapp.com/procedures`)
    .then((response) => setProcedures(response.data.rows),
    (err) => console.error(err.message));
  }
  console.log(procedures);
  
  useEffect(() => {
    getProcedures()
  },[])
  
  return (
    <div className="container">
      <Header />
      
      {/* <ProcedureForm /> */}
      {
        procedures ? (
          procedures.map((procedure) => (
          <div>
            {procedure.name}
          </div>
          ))
        ): <></>
      }
      <h3>Home</h3>
    </div>
  )

}

export default App;

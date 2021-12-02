import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './sass/App.scss';

//import types
import { Procedure} from './helpers/types';


const App = () => {
  //set state of data
  const [procedures, setProcedures] = useState<Array<Procedure>>([])//need to be array of porocedures
  const getProcedures = () => {
    axios.get(`http://localhost:3001/procedures`)
    .then((response) => setProcedures(response.data.rows),
    (err) => console.error(err.message));
  }
  console.log(procedures);
  
  useEffect(() => {
    getProcedures()
  },[])
  
  return (
    <div>
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

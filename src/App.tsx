import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './sass/App.scss';


const App = () => {
  const getProcedures = () => {
    axios.get(`http://localhost:3001/procedures`)
    .then((response) => {
      response.data
    })
  }

  return (
    <h3>Home</h3>
  )

}

export default App;

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

import './sass/App.scss';

//import types
import { Procedure} from './helpers/types';

//components
import ProcedureForm from './components/ProcedureFrom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';


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
      <Router>
        <div className="header">
          <div className="search-form-warp">
            <div className="home-button"><Link to="/">Home</Link></div>
            <form className="seach-form">
              <input 
                type="input" 
                className="searh-input"
                />
              <input type="submit" value="search" className="submit-search" />
            </form>
          </div>
          <div className="user-wrap">
            <div className="session-button" id="sign-up"><Link to="/signup">sign up</Link></div>
            <div className="session-button" id="login"><Link to="/login">login</Link></div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="*" element={<ErrorPage />} />  */}

        </Routes>
      </Router>
      
      {/* {
        procedures ? (
          procedures.map((procedure) => (
          <div>
            {procedure.name}
          </div>
          ))
        ): <></>
      } */}
    </div>
  )

}

export default App;

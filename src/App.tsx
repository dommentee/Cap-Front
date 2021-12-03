import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './sass/App.scss';

//import types
import { Procedure} from './helpers/types';

//components
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import ProcedureForm from './components/ProcedureForm';


const App = () => {
  //navaget is used to route for different button 
  //set state of data
  const [procedures, setProcedures] = useState<Array<Procedure>>([])//need to be array of porocedures
  const getProcedures = () => {
    axios.get(`https://still-plateau-52039.herokuapp.com/procedures`)
    .then((response) => setProcedures(response.data.rows),
    (err) => console.error(err.message));
  }
  console.log(procedures);
  //create fuction
  const handleCreate = (newProcedure: Procedure) => {
    axios.post(`https://still-plateau-52039.herokuapp.com/procedures`,newProcedure)
    .then((response) => setProcedures(response.data.rows),
      (err) => console.error(err.message));
  } 
  
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
                placeholder="search procedure"
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
          <Route path="/" element={
            <Home 
              procedures={procedures}
            />
          }/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/contribute" element={<ProcedureForm  handleCreate={handleCreate}/>}/>
          {/* <Route path="*" element={<ErrorPage />} />  */}
        </Routes>
      </Router>
      <Footer />
    </div>
  )

}

export default App;

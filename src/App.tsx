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
import Profile from './pages/Profile';


const App = () => {
  //navaget is used to route for different button 
  //state of user 
  let [user, setUser] = useState(true)
  //set state of data
  const [procedures, setProcedures] = useState<Array<Procedure>>([])//need to be array of porocedures
  const getProcedures = () => {
    axios.get('http://localhost:3001/procedures')
    .then((response) => setProcedures(response.data.rows),
    (err) => console.error(err.message));
  }
  console.log(procedures);
  //create fuction

  // const testPost = (newProcedure: Procedure) => {
  //   axios.post('http://localhost:3001/procedures', newProcedure)
  //   .then((response) => getProcedures())
  //   // console.log(newProcedure);
  // }
  const handleCreate = (newProcedure: Procedure) => {
    axios.post('http://localhost:3001/procedures', newProcedure)
    .then((response) => getProcedures(),
      (err) => console.error(err.message));
      console.log(newProcedure);
      
  }
  
  //update
  const handleUpdate = (editProcedure: any) => {
    axios.put('https://still-plateau-52039.herokuapp.com/procedures/'+ editProcedure._id, editProcedure)
    .then((response) => getProcedures())
  }
 
  //delete
  const handleDelete = (e: any) => {
    axios.delete('http://localhost:3001/procedures/' + e.target.value)
    .then((response) => getProcedures(),
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
            {
              user ? (
                <div className="session-button" id="login"><Link to="/profile">Profile</Link></div>
              ): (
                <>
                  <div className="session-button" id="sign-up"><Link to="/signup">sign up</Link></div>
                  <div className="session-button" id="login"><Link to="/login">login</Link></div>
                </>
              )
            }
          </div>
        </div>
        <Routes>
          <Route path="/" element={
            <Home />
          }/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/contribute" element={<ProcedureForm  handleCreate={handleCreate}/>}/>
          <Route path="/profile" element={<Profile
           procedures={procedures}
           handleDelete={handleDelete}
           handleUpdate={handleUpdate}
           />}/>
          {/* <Route path="*" element={<ErrorPage />} />  */}
        </Routes>
      </Router>
      <Footer />
    </div>
  )

}

export default App;

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
import { User } from './helpers/user';

const procedureApi = 'https://still-plateau-52039.herokuapp.com/procedures/';
const App = () => {
  ///USERS
  //state of user 
  let [user, setUser] = useState(true)

  ////API 
  //set state of data
  const [procedures, setProcedures] = useState<Array<Procedure>>([])//need to be array of porocedures
  const getProcedures = () => {
    axios.get('https://still-plateau-52039.herokuapp.com/procedures')
    .then((response) => setProcedures(response.data.rows),
    (err) => console.error(err.message));
  }
  // console.log(procedures);
  
  //create fuction
  const handleCreate = (newProcedure: Procedure) => {
    axios.post('https://still-plateau-52039.herokuapp.com/procedures', newProcedure)
    .then((response) => getProcedures(),
      (err) => console.error(err.message));
      console.log(newProcedure);
  }
  //update
  const handleUpdate = (editProcedure: Procedure) => {
    axios.put('https://still-plateau-52039.herokuapp.com/procedures/' + editProcedure.procedure_id, editProcedure)
    .then((response) => getProcedures(),
    (err) => console.error(err.message));
    console.log(editProcedure);     
  }
  //delete
  const handleDelete = (e: any) => {
    axios.delete('https://still-plateau-52039.herokuapp.com/procedures/' + e.target.value)
    .then((response) => getProcedures(),
    (err) => console.error(err.message));
  }

  
  //users
  const getUser = () => {
    console.log(user);
  }


  //create
  const createUser = (newUser: User) => {
    axios.post('http://localhost:3001/users', newUser)
    .then((response) => getUser(),
    (err) => console.error(err.message));
  }
  
  ///SEARCH 
  let [searchInput, setSearchInput] = useState(null as any)
  const makeRequest = (filter: any) => {
    axios.get(procedureApi + 'search/' + filter)
    .then((response) => getProcedures())
    
  }

  useEffect(() => {
    makeRequest('')
    // getProcedures()
  },[])

  const handleSearch = (e: any) => {
    e.preventDefault();
    makeRequest(`${searchInput}`)
    console.log(procedures); 
  }

  return (
    <div className="container">
      <Router>
        <div className="header">
          <div className="search-form-warp">
            <div className="home-button"><Link to="/">Home</Link></div>
            <form onSubmit={handleSearch} className="seach-form">
              <input 
                type="input" onChange={(e: any) => setSearchInput(e.target.value)} 
                className="searh-input"
                placeholder="search procedure"
                value={searchInput}
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
        {
            searchInput ? (
              <div>
                
                
              </div>
            ): <></>
          }
        <Routes>
          <Route path="/" element={
            <Home />
          }/>
          <Route path="/signup" element={<Signup createUser={createUser}/>}/>
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

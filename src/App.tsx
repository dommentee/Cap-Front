import React, {useEffect, useState} from 'react';
import axios from 'axios';


import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


import './sass/App.scss';

//import types
import { Procedure, SearchProcedureRespose, User} from './helpers/types';

//components
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import ProcedureForm from './components/ProcedureForm';
import Profile from './pages/Profile';
import Chart  from './components/Chart';
import HealChart from './components/HealChart';

const procedureApi = 'https://still-plateau-52039.herokuapp.com/procedures/';
const App = () => {
  ///USERS
  //state of user 
  let [user, setUser] = useState<User>()
  
  ////API 
  //set state of data
  const [searchInput, setSearchInput] = useState(null as any)
  const [searchResults, setSearchResults] = useState <SearchProcedureRespose>()
  const [connectApi, setConnectApi] = useState<Array<Procedure>>([])
  const [procedures, setProcedures] = useState<Array<Procedure>>([])//need  to be array of porocedures

  //procedures routes 
  const getProcedures = () => {
    axios.get('https://still-plateau-52039.herokuapp.com/procedures')
    .then((response) => setProcedures(response.data),
    (err) => console.error(err.message));
  }

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
  //end of procedures routes


  //users 
  const createUser = (newUser: User) => {
    //@ts-ignore
    axios.post('https://still-plateau-52039.herokuapp.com/users', newUser, {withCredentials: true})
    .then((response) => response,
    (err) => console.error(err.message));
    
  }
  const createToken = (user_name: User, password: User) => {

    fetch('https://still-plateau-52039.herokuapp.com/login', { 
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      redirect: 'follow',
      credentials: 'include', 
     }).then((response) => getUser(), 
     (err) => console.error(err.message));
    // {withCredentials: true}
    // axios.post('https://still-plateau-52039.herokuapp.com/login', { user_name , password },{withCredentials: true})
    // .then((response) => getUser(), 
    // (err) => console.error(err.message));
  }
  const getUser = () => {
    axios.get('https://still-plateau-52039.herokuapp.com/users', {withCredentials: true})
    .then((response) => setUser(response.data),  
    (err) => console.error(err.message));
  }

  const logout = () => {
    fetch('https://still-plateau-52039.herokuapp.com/logout', {
      method: 'POST',
      redirect: 'follow',
      credentials: 'include', // Don't forget to specify this if you need cookies
    }).then((response) => setUser(undefined),
    (err) => console.error(err.message));  

    //axios call does not work do delete cookies in the applicaion cookies 
    //had to use fatch
    // axios.post('http://localhost:3001/logout', {withCredentials: true})
    // .then((response) => setUser(undefined),
    // (err) => console.error(err.message));    

  }

  ///SEARCH 
  const makeRequest = async(filter: any) => {
    const response = await axios.get(procedureApi + 'search/' + filter)
    setSearchResults(response.data)
    return response.data
  }
  

  useEffect(() => {
  },[searchResults])
  

  useEffect(() => {
    // makeRequest(`${searchInput}`)
    getProcedures()
    // getUser()
  },[])
  useEffect(() => {

  }, [getUser])

  const handleSearch = (e: any) => {
    e.preventDefault();
    makeRequest(`${searchInput}`)
  }

  return (
    <div className="container">
      <Router>
        <div className="header">
          <div className="search-form-warp">
           <Link to="/"><div className="home-button">SUR<i className="fas fa-plus"></i>GICAL</div></Link>
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
                <>                
                  <Link to="/profile"><div className="session-button" id="login">profile</div></Link>
                  <Link to="/"><div className="session-button" id="logout" onClick={logout}>logout</div></Link>
                </>
              ): (
                <>
                 <Link to="/signup"><div className="session-button" id="sign-up">signup</div></Link>
                  <Link to="/login"><div className="session-button" id="login">login</div></Link>
                </>
              )
            }
          </div>
        </div>
        {
          searchResults ? (
            <div className="results">
              <h3>Search Results for {searchInput}</h3>
              <div className="chartwrap">
                <Chart searchResults={searchResults}
                      searchInput={searchInput}
                />
                <HealChart searchResults={searchResults}
                    searchInput={searchInput}
                />
              </div> 
              <div className="result-stats">
              <h4>recommended hospitals/clinics</h4>
              {
                searchResults.procedures.map((results) => (
                  <div className="hospital">
                    <div>name: {results.hospital_name}</div>
                    <div>City: {results.hospital_city}</div>
                    <div>State: {results.hospital_state}</div>
                    <div>Rating: {results.hospital_rating}</div>
                  </div>
                )
              )}
            </div>
            </div>
          ): <></>
        }
        <Routes>
          <Route path="/" element={
            <Home />
          }/>
          <Route path="/signup" element={<Signup createUser={createUser}/>}/>
          <Route path="/login" element={<Login createToken={createToken}/>}/>
          <Route path="/contribute" element={<ProcedureForm 
            user={user}
            handleCreate={handleCreate}
          />}/>
          <Route path="/profile" element={<Profile
           procedures={procedures}
           handleDelete={handleDelete}
           handleUpdate={handleUpdate}
           user={user}
           />}/>
          {/* <Route path="*" element={<ErrorPage />} />  */}
        </Routes>
      </Router>
      <Footer />
    </div>
  )

}

export default App;

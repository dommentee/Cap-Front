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

const procedureApi = 'https://still-plateau-52039.herokuapp.com/procedures/';
const App = () => {
  ///USERS
  //state of user 
  let [user, setUser] = useState(false)

  ////API 
  //set state of data
  const [searchInput, setSearchInput] = useState(null as any)
  const [searchResults, setSearchResults] = useState <SearchProcedureRespose>()
  const  [connectApi, setConnectApi] = useState<Array<Procedure>>([])
  const [procedures, setProcedures] = useState<Array<Procedure>>([])//need  to be array of porocedures
  const getProcedures = () => {
    axios.get('https://still-plateau-52039.herokuapp.com/procedures')
    .then((response) => setProcedures(response.data),
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
  const createToken = (user_name: User, password: User) => {
    axios.get('http://localhost:3001/users', {withCredentials: true});
      // {withCredentials: true}
        axios.post('http://localhost:3001/users' + '/login', { user_name , password }, { withCredentials:true })
  }
  const logout = () => {
    console.log('logged out');
    
  }

  // const logout = (user: User) => {
  //   axios
  // }





  ///SEARCH 
  const makeRequest = async(filter: any) => {
    const response = await axios.get(procedureApi + 'search/' + filter)
    setSearchResults(response.data)
    console.log(searchResults);
    return response.data
  }

  useEffect(() => {
    console.log(searchResults);
  },[searchResults])

  useEffect(() => {
    // makeRequest(`${searchInput}`)
    getProcedures()
  },[])


  const handleSearch = (e: any) => {
    e.preventDefault();
    makeRequest(`${searchInput}`)
  }

  return (
    <div className="container">
      <Router>
        <div className="header">
          <div className="search-form-warp">
           <Link to="/"><div className="home-button">SUR+GICAL</div></Link>
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
                  <Link to="/"><div className="session-button" id="logout" onClick={logout}>profile</div></Link>
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
            <div>
               <h4>Search REsults for </h4>
               <h4>{searchResults.stats.avgPrice}</h4>
               <h4>{searchResults.stats.avgHealTime}</h4>
              {
                searchResults.procedures.map((results) => (
                  <h3>{results.name}</h3>

                )
              )}
            </div>
          ): <></>
        }
        <Routes>
          <Route path="/" element={
            <Home />
          }/>
          <Route path="/signup" element={<Signup createUser={createUser}/>}/>
          <Route path="/login" element={<Login createToken={createToken}/>}/>
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

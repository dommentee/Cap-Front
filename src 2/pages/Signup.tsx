import React, {useState} from "react";
import '../sass/login-logout.scss'


const Signup = (props: any) => {

    const defaultForm = {user_name: '', password: ''}
    let [newUser, setNewUSer] = useState(defaultForm)
    const handleChange = (e:any) => {
        setNewUSer({...newUser, [e.target.name]: e.target.value})  
    } 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        props.createUser(newUser)        
    }

    return (
        <div className="form-wrap">
            <h3>Sign up</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user name" id="u-l">user name</label><br/>
                <input
                    type="text"
                    name="user_name"
                    onChange={handleChange}
                    value={newUser.user_name}
                    required
                    className="input"
                    placeholder="user name"

                />
                <br/>
                <br/>
                <label htmlFor="password">password</label><br/>
                <input 
                    type="text"
                    name="password"
                    onChange={handleChange}
                    value={newUser.password}
                    className="input"
                    placeholder="password"
                />
                <br/>
                <br/>
                <input className="send" type="submit" value="SUBMIT"></input>
            </form>
        </div>
    )
}
export default Signup
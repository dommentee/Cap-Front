import React, {useState} from "react";
import '../sass/login-logout.scss'

const Login = (props: any) => {

    const defaultForm = {user_name: '', password: ''}
    let [userLogin, setUserLogin] = useState(defaultForm)
    const handleChange = (e:any) => {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})  
    } 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(userLogin);
        props.createToken(userLogin.user_name, userLogin.password)        
    }
    return(
        <div className="form-wrap">
            <h3>login</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user name" id="u-l">user name</label><br/>
                <input
                    type="text"
                    name="user_name"
                    onChange={handleChange}
                    value={userLogin.user_name}
                    required
                    className="input"
                    placeholder="user name"
                    
                />
                <br/>
                <br/>
                <label htmlFor="password">password</label><br/>
                <input 
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={userLogin.password}
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
export default Login
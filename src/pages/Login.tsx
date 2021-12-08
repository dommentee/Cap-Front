import React, {useState} from "react";

const Login = (props: any) => {

    const defaultForm = {user_name: '', password: ''}
    let [userLogin, setUserLogin] = useState(defaultForm)
    const handleChange = (e:any) => {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})  
    } 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        props.createToken(userLogin)        
    }
    return(
        <div>
            <h3>login</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user name">user name</label>
                <input
                    type="text"
                    name="user_name"
                    onChange={handleChange}
                    value={userLogin.user_name}
                    required
                    className="input"
                />
                <label htmlFor="password">password</label>
                <input 
                    type="text"
                    name="password"
                    onChange={handleChange}
                    value={userLogin.password}
                    className="input"
                />
             <input className="send" type="submit" value="SUBMIT"></input>
            </form>
        </div>

    )
}
export default Login
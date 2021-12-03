import React, {useState} from "react";

//css
import '../sass/header.scss'


const  Header = () => {



    return (
        <div className="header">
            <div className="search-form-warp">
                <form className="seach-form">
                    <input 
                    type="input" 
                    className="searh-input"
                    />
                    <input type="submit" value="search" className="submit-search" />
                </form>
            </div>
            <div className="user-wrap">
                <div className="session-button" id="sign-up">sign up</div>
                <div className="session-button" id="login">login</div>
            </div>


        </div>
    )
}

export default Header
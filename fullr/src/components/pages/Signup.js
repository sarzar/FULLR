import React from 'react';
import "../../App.css";
import '../Signup.css';

function SignUp () {
    return (
        <div> 
            <form >
                <h1 className = "signUp"> Sign up </h1>
                <label className = "firstName"> First Name </label> <input type = "text" className = "enterValue"  placeholder = "First Name "/><br />
                <label > Last Name :</label> <input type = "text" placeholder = "Last Name"/><br />
                <label> Password :</label> <input type = "text"  placeholder = "Password"/> <br />  
                <label> Confirm Password :</label> <input type = "text" placeholder = "Confirm Password"/><br />
                
                
               
               <input type = "submit" value="Submit"/>
            </form>


        </div>


    )
    
        


}

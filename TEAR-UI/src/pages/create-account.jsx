import React,{useState} from "react";
import { UilUserCircle, UilEyeSlash } from '@iconscout/react-unicons';
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
   const history = useNavigate();
   const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        if (!firstName || !lastName || !username || !email || !password) {
            setError('Please fill in all fields');
            return;
        }
        const data = {
            firstName,
            lastName,
            username,
            email,
            password
        };
        console.log('Form submitted:', data);
        setErrorMessage('error');
        setSuccessMessage('Account created successfully');
        // try {
        //     const response = await fetch("/api/create-account", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(data)
        //     });
        //     if (response.ok) {
        //         history.push("/memories");
        //     } else {
        //         setError('Something went wrong. Please try again. ');  
        //     }
        // }
        // catch (error) {
        //     console.error('Error:', error);
        // }
    };

    return (
    <div className="wrapper">
        <div className="section informational">
                <h1>We're glad you're here.</h1>
                <h4>Sign up and get started for free!</h4>
                <p>Or, <a href="/login">Login</a> if you already have an account.</p>
        </div>
        <div className="section form">
        <div className="create-account-box">
                    <h2>Create Your Account</h2>
            <form action="/create-account" method="post">
        <div className="input-box">
            <label>First Name </label>
            <input type="text" required />
        </div>
        <div className="input-box">
            <label>Last Name </label>
            <input type="text" required />
        </div>
        <div className="input-box">
            <label>Username </label>
        <div className="input-with-icon">
            <input type="text" required />
            
        </div>
        </div>
        <div className="input-box">
            <label>Email </label>
            <input type="text" required />
        </div>
        <div className="input-box">
            <label>Password </label>
            <div className="input-with-icon">
            <input type="password" id="registration-password" required /> 
            
       </div>
       </div>
       <div className="terms">
           <label>
           <input type="checkbox" className="checkbox-margin"/> I agree to the
           <a href="https://www.godaddy.com/en-ph/legal/agreements/universal-terms-of-service-agreement?isc=sem3year&countryview=1&currencyType=USD&cdtl=c_16570306059.g_154117058103.k_dsa-399440795981.a_688669130615.d_c.ctv_g&bnb=nb&gad_source=1&gbraid=0AAAAAD_AGdz9Y3E8f5ry_c4fKk2Ryx3zx&gclid=CjwKCAjw4_K0BhBsEiwAfVVZ_y9kO0jJiT11EvuFMKO5697c-wrlvl-SUBQiTeg96g6_n19fZ5Sd_BoCaogQAvD_BwE" target="_blank"> Terms & Conditions</a>
         </label>
        </div>
            <button type="submit" className="login-box">Create Account</button>
         </form>
        <div className="login-register">
            <p>Already have an account? <a href="/login" className="login-link">Login</a></p>
            </div>
            </div>
        </div>
    </div>
    );
};

export default CreateAccount;
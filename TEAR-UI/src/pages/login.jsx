import React, { useState } from "react";
import { useAuth } from "../components/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const response = await login(email, password); // login using provided email and password
            if (response.status === 200) {
                // verify user email and password from database, if successful
                const token = response.data.token;
                // store token in backend
                localStorage.setItem("authtoken", token);
                localStorage.setItem("userEmail", email);

                // Check if the user has saved memories
                const hasSavedMemories = checkUserMemories(email);

                // Redirect based on the check
                if (hasSavedMemories) {
                    navigate("/children");
                } else {
                    navigate("/memories");
                }
            }
        } catch (error) {
            console.log("Login failed");
        }
    };

    const checkUserMemories = (email) => {
        // Simulate fetching memories from local storage
        const allMemories = JSON.parse(localStorage.getItem("memories")) || {};
        const userMemories = allMemories[email] || [];
        return userMemories.length > 0;
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="wrapper">
            <div className="section informational">
                <h1>Storing your memories, made easy.</h1>
                <h4>From your child’s first steps to their last tooth, never lose track of the memories important to you.</h4>
            </div>
            <div className="form-container">
                <h1>Welcome back!</h1>
                <h4>Login to your account</h4>
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <span className="icon"></span>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <i className="uil uil-lock password"></i>
                    </div>
                    <div className="input-box">
                        <span className="icon"></span>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i
                            className={`uil ${passwordVisible ? "uil-eye" : "uil-eye-slash"} pw`}
                            onClick={togglePasswordVisibility}
                            style={{ cursor: "pointer" }}
                        ></i>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" className="checkbox-margin" />Remember me
                        </label>
                        <a href="forgot-password">Forgot Password?</a>
                    </div>
                    <button type="submit" className="login-box">Login</button>
                </form>
                <div className="login-register">
                    <h5>
                        New to Treasured Chest? <a href="create-account" className="register-link">Create an account</a>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Login;
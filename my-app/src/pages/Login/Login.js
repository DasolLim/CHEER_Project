import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Container } from "@mui/material";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();
        try {
            const loginData = {
                email: email,
                password: password,
            };

            // Use axios for making the POST request
            const response = await axios.post("/api/users/login", loginData);

            if (response.status === 200) {
                // Successful login
                alert('Login successful!');
                navigate("/");
            } else {
                // Handle other response statuses (e.g., show an error message)
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container>
            <div className="login">
                <h1>Login to CHEER Account</h1>
                <form action="POST">
                    <div className="register-page">
                        <div className="form">
                            <form className="register-form">
                                <input
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                />
                                <input
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                />
                                <button type="submit" onClick={submit}>
                                    Login
                                </button>
                                <p className="message">
                                    Not registered? <Link to="/register">Register</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </form>
            </div>
        </Container>
    );
}

export default Login;

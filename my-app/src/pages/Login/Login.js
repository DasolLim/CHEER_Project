import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { Container } from "@mui/material";


function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();
        try {
            const login = {
                email: email,
                password: password
            }
            const response = await fetch("/api/users/login",
                {
                    method: 'POST',
                    headers: { "Content-Type": "application/json", },
                    body: JSON.stringify(login)
                });

            if (response.ok) {
                navigate("/");
            }

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <Container>
            <div className="login">

                <h1>Login to CHEER Account</h1>

                <form action="POST">
                    <div class="register-page">
                        <div class="form">
                            <form class="register-form">
                                <input type="text" onChange={(e) => { setPassword(e.target.value) }} placeholder="Email" />
                                <input type="password" onChange={(e) => { setEmail(e.target.value) }} placeholder="Password" />
                                <button type="submit" onClick={submit}>login</button>
                                <p class="message"> Not registered?<a href="register">Register</a></p>
                            </form>
                        </div>
                    </div>
                </form>
            </div >
        </Container >
    )
}

export default Login
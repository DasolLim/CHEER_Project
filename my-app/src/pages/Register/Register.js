import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { Container } from "@mui/material";

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [userType, setUserType] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();
        try {
            alert('potato');
            const login = {
                username: name,
                userType: userType,
                email: email,
                password: password
            };
            const response = await fetch("/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(login)
            });
        }
        catch (e) {
            console.log(e);
        }

    }


    return (
        <Container>
            <div className="login">

                <h1>Create a New CHEER Account</h1>

                <form action="POST">
                    <div class="login-page">
                        <div class="form">
                            <form class="register-form">
                                <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Name" />
                                <input type="text" onChange={(e) => { setUserType(e.target.value) }} placeholder="User Type" />
                                <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                                {/* <button>create</button> */}
                                <button type="submit" onClick={submit}>create</button>
                                <p class="message"> Already registered? <a href="login">Login</a></p>
                            </form>
                        </div>
                    </div>
                </form>
            </div >
        </Container >
    )
}

export default Register
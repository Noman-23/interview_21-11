import React, { useState } from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // const [inputs, setInputs] = useState({})
    const [user, setUser] = useState("")
    const auth = useAuth();
    const navigate = useNavigate();
    // const handleInputs = (event) => {
    //     const {name, value} = event.target
    //     setInputs(val => ({...val, [name]: value }))
    // }

    const handleLogin = () => {
        auth.login(user)
        navigate('/')
    }
    return (
        <div style={formStyle}>
            <div>
                <label >
                    Email
                    <input type="text" name='email' value={user || ""} onChange={e => setUser(e.target.value)} />
                </label>
            </div>

            {/* <div>
                <label >
                    Name
                    <input type="text" name='name' value={inputs.name || ""} onChange={handleInputs} />
                </label>
            </div> */}
            <div>
                <button onClick={() => handleLogin()}>LOGIN</button>
            </div>
        </div>
    )
}

const formStyle = { display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', height: '20vh', marginTop: '10%' }
export default Login

import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoggedInUser } from '../redux/authSlice'
import { useNavigate } from 'react-router-dom'
import { handleError } from '../utils/utilities'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState(null)

    const handleSummit = async (e) => {
        e.preventDefault()
        try {
            const user = { email, password }
            const response = await axios.post('/api/user/login', user)

            if (response.status !== 200) return
            localStorage.setItem('user', JSON.stringify(response.data))
            dispatch(setLoggedInUser({ user: response.data }))
            navigate('/home', { replace: true })
        } catch (error) {
            console.log(error.response.data)
            handleError(error, setError)
        }
    }
    return (
        <form
            className='login'
            onSubmit={handleSummit}
        >
            <h3>Login 🌝 </h3>

            <label>Email:</label>
            <input
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button>Login</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default Login

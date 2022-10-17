import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setLoggedInUser } from '../redux/authSlice'
import { handleError } from '../utils/utilities'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSummit = async (e) => {
        try {
            e.preventDefault()
            const user = { email, password }
            const response = await axios.post('/api/user/signup', user)
            if (response.status !== 200) return
            localStorage.setItem('user', JSON.stringify(response.data))
            dispatch(setLoggedInUser({ user: response.data }))
            navigate('/login', { replace: true })
        } catch (error) {
            console.log(error.response.data)
            handleError(error, setError)
        }
    }

    return (
        <form
            className='signup'
            onSubmit={handleSummit}
        >
            <h3>Sign up 😲 </h3>

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
            <div className='test'>
                <button>Sign Up</button>
                <Link to='/login'>Have an account?</Link>
            </div>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default Signup

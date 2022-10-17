import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setLoggedOutUser } from '../redux/authSlice'

const Navbar = () => {
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        localStorage.removeItem('user')
        dispatch(setLoggedOutUser())
        navigate('/', { replace: true })
    }

    return (
        <header>
            <div className='container'>
                <Link to='/'>
                    <h1>Workout Buddy 🤘 </h1>
                </Link>
                {user ? (
                    <nav>
                        <div>
                            Hello👋 <span>{user.email}</span>
                        </div>
                        <div>
                            <button onClick={handleClick}>Log Out</button>
                        </div>
                    </nav>
                ) : (
                    <nav>
                        <div>
                            <Link
                                className='button'
                                to='/login'
                            >
                                Login
                            </Link>
                            <Link
                                className='button'
                                to='/signup'
                            >
                                Signup
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default Navbar

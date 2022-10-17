import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Welcome from './pages/Welcome'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <div className='pages'>
                    <Routes>
                        <Route
                            path='/'
                            element={<Welcome />}
                        />
                        <Route element={<ProtectedRoute />}>
                            <Route
                                path='/home'
                                element={<Home />}
                            />
                        </Route>

                        <Route
                            path='/login'
                            element={<Login />}
                        />
                        <Route
                            path='/signup'
                            element={<Signup />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App

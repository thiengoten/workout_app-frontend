import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <main>
            <h1>404 Not found your resourse!</h1>
            <Link to='/'>
                <h1>Come back to home ✈ </h1>
            </Link>
        </main>
    )
}

export default NotFound

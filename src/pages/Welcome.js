import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Welcome = () => {
    const user = useSelector((state) => state.auth.user)

    return (
        <main>
            {user ? (
                <>
                    <h1>Hello👋</h1>
                    <Link to='/home'>
                        <h1>Set Workout now 🤘 </h1>
                    </Link>
                </>
            ) : (
                <h1>You need to Login to set workout 💕 </h1>
            )}
        </main>
    )
}

export default Welcome

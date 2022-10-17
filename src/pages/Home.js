import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { setWorkout } from '../redux/workoutsSlice'
import { getWorkouts } from '../service/workout.service'
const Home = () => {
    const workouts = useSelector((state) => state.workouts)
    const user = useSelector((state) => state.auth.user)

    // console.log('🚀 ~ file: Home.js ~ line 13 ~ Home ~ workouts', workouts)
    const dispatch = useDispatch()
    const userT = localStorage.getItem('user')
    console.log('🚀 ~ file: Home.js ~ line 16 ~ Home ~ userT', userT)

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                console.log('Heloo')
                if (user && !workouts.length) {
                    const response = await getWorkouts()
                    dispatch(setWorkout(response.data))
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchWorkouts()
    }, [])

    return (
        <div className='home'>
            <div className='workouts'>
                {workouts.map((workout) => (
                    <WorkoutDetails
                        key={workout._id}
                        workout={workout}
                    />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home

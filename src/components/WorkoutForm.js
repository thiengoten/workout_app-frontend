import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addWorkout } from '../redux/workoutsSlice'
import { createWorkout } from '../service/workout.service'
import { handleError } from '../utils/utilities'

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    // console.log(
    //     '🚀 ~ file: WorkoutForm.js ~ line 13 ~ WorkoutForm ~ emptyFields',
    //     emptyFields
    // )

    const dispatch = useDispatch()

    const handleSummit = async (e) => {
        try {
            e.preventDefault()

            const workout = { title, load, reps }

            const response = await createWorkout(workout)

            if (response.status === 200) {
                setTitle('')
                setLoad('')
                setReps('')
                setError(null)
                setEmptyFields([])
                dispatch(addWorkout(response.data))
            }
        } catch (error) {
            console.log(
                '🚀 ~ file: WorkoutForm.js ~ line 36 ~ handleSummit ~ error',
                error
            )
            // handleError(error)
            handleError(error, setError, setEmptyFields)
        }
    }
    return (
        <form
            className='create'
            onSubmit={handleSummit}
        >
            <h3>Add new Workout</h3>
            <label>Excersize Title:</label>
            <input
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />
            <label>Load (kg):</label>
            <input
                type='number'
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyFields.includes('load') ? 'error' : ''}
            />
            <label>Reps:</label>
            <input
                type='number'
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes('reps') ? 'error' : ''}
            />

            <button>Add Workout</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default WorkoutForm

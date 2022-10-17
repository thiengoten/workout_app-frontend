import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteWorkout } from '../redux/workoutsSlice'
import { formatDistanceToNow } from 'date-fns'

const WorkoutDetails = ({ workout }) => {
    const dispatch = useDispatch()
    const handleClick = async () => {
        const response = await axios.delete(`/api/workouts/${workout._id}`)

        if (response.status !== 200) return console.log('Hmm')
        dispatch(deleteWorkout(response.data))
    }

    return (
        <div className='workout-details'>
            <h4>{workout.title}</h4>
            <p>
                <strong>Load(kg): </strong>
                {workout.load}
            </p>
            <p>
                <strong>Reps: </strong>
                {workout.reps}
            </p>
            <p>
                {formatDistanceToNow(new Date(workout.createdAt), {
                    addSuffix: true,
                })}
            </p>
            <span onClick={handleClick}>
                <FontAwesomeIcon
                    icon={faTrashAlt}
                    size='xl'
                />
            </span>
        </div>
    )
}

export default WorkoutDetails

import axios from 'axios'

export const getWorkouts = () => axios.get('/api/workouts')

export const createWorkout = (data) => axios.post('/api/workouts', { ...data })

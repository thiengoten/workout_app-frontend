import { createSlice } from '@reduxjs/toolkit'

export const workoutsSlice = createSlice({
    name: 'workouts',
    initialState: [],
    reducers: {
        setWorkout: (state, action) => {
            return state.concat(action.payload)
            // return [...state, ...action.payload]
        },
        addWorkout: (state, action) => {
            state.unshift(action.payload)
        },
        deleteWorkout: (state, action) => {
            return state.filter((item) => item._id !== action.payload._id)
        },
    },
})

export const { setWorkout, addWorkout, deleteWorkout } = workoutsSlice.actions

export default workoutsSlice.reducer

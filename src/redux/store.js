import { configureStore } from '@reduxjs/toolkit'
import workoutsReducer from './workoutsSlice'
import authReducer from './authSlice'

export default configureStore({
    reducer: {
        workouts: workoutsReducer,
        auth: authReducer,
    },
})

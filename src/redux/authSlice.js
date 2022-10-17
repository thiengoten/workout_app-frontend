import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {},
    reducers: {
        setLoggedInUser: (state, action) => (state = action.payload),
        setLoggedOutUser: (state, action) => (state = {}),
    },
})

export const { setLoggedInUser, setLoggedOutUser } = authSlice.actions

export default authSlice.reducer

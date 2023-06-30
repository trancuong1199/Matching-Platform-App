import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authData } from '../services/api/login';

export const loginUser = createAsyncThunk('get/loginUser', async (user) => {
    const response = await authData(user)
    return response.data.data.token
})

const initialState = {
    token: '',
    loading: false
}

const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        removeToken: (state) => {
            state.token = ''
        },
        saveTokenFromKeychain: (state, action) => {
            state.token = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loginUser.pending, state => {
                console.log(1);
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log(2);
                state.loading = false;
                state.token = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log(3);
                state.token = ""
                state.loading = false;
            })
    }
})

export const { saveTokenFromKeychain, removeToken } = authSlice.actions
export default authSlice.reducer
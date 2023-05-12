import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: true,
  error: undefined
}

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=5');
    const data = await response.json();
    const userNames = data.results.map(user => user.name);
    return userNames
  } catch (error) {
    return error.message;
  }
})

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true
      })

      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload
        state.isLoading = false
      })

      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false
      })
  }
})

export default userSlice.reducer;
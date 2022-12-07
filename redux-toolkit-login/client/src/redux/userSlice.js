import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// action name:  users/update
export const updateUser2 = createAsyncThunk('users/update', async (user) => {
  const res = await axios.post(
    'http://localhost:8800/api/users/123/update',
    user // action.payload
  );
  return res.data;
});

// export const deleteUser = createAsyncThunk('users/update', async (user) => {
//   const res = await axios.post(
//     'http://localhost:8800/api/users/123/update',
//     user // action.payload
//   );
//   return res.data;
// });

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      name: 'Jaeha',
      email: 'jaeha@gmail.com',
    },
    pending: null,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [updateUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser2.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    [updateUser2.rejected]: (state) => {
      state.pending = null;
      state.error = true;
    },
    // [deleteUser.pending]: (state) => {
    //   state.pending = true;
    //   state.error = false;
    // },
    // [deleteUser.fulfilled]: (state, action) => {
    //   state.pending = false;
    //   state.userInfo = action.payload;
    // },
    // [deleteUser.rejected]: (state) => {
    //   state.pending = false;
    //   state.error = true;
    // },
  },
});

console.log('userSlice: ', userSlice);

export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;

//
// reducers: {
//   update: (state, action) => {
//     state.name = action.payload.name;
//     state.email = action.payload.email;
//   },
//   remove: (state) => (state = {}), // 유저 1명 -> action 노필요
//   addHello: (state, action) => {
//     state.name = `Hello ${action.payload.name}`;
//   },
// },

// updateStart: (state) => {
//   state.pending = true;
// },
// updateSuccess: (state, action) => {
//   state.pending = false;
//   state.userInfo = action.payload;
// },
// updateError: (state) => {
//   state.pending = false;
//   state.error = true;
// },

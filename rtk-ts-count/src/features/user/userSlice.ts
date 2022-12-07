import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: number;
  name: string;
};
type InitialState = {
  loading: boolean;
  users: User[];
  error: string;
};
const initialState: InitialState = {
  loading: false,
  users: [],
  error: '',
};

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return res.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  // extraReducers: {
  //   [fetchUsers.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [fetchUsers.fulfilled]: (state, action: PayloadAction<User[]>) => {
  //     state.loading = false;
  //     state.users = action.payload;
  //     state.error = '';
  //   },
  //   [fetchUsers.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.users = [];
  //     state.error = action.error.message || 'Something went wrong';
  //   },
  // },
  extraReducers: (builder) => {
    // pending
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    // fullfilled
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = '';
      }
    );

    // rejected
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default userSlice.reducer;

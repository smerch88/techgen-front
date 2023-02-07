import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  roadmaps: [],
  roadmapsLoadingStatus: 'idle',
};

const instance = axios.create({
  baseURL: 'https://63e0f76559bb472a742d424b.mockapi.io/roadmaps',
});

export const fetchRoadmaps = createAsyncThunk(
  'roadmaps/fetchRoadmaps',
  async () => {
    const data = await instance
      .get()
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
    return data;
  }
);

const roadmapsSlice = createSlice({
  name: 'roadmaps',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRoadmaps.pending, state => {
        state.roadmapsLoadingStatus = 'loading';
      })
      .addCase(fetchRoadmaps.fulfilled, (state, action) => {
        state.roadmaps = action.payload ? action.payload : [];
        state.roadmapsLoadingStatus = 'idle';
      })
      .addCase(fetchRoadmaps.rejected, state => {
        state.roadmapsLoadingStatus = 'error';
      });
  },
});

export default roadmapsSlice.reducer;

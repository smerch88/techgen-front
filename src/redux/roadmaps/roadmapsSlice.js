import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { roadMapsInstance } from 'api';

const initialState = {
  filter: "skill",
  roadmaps: [],
  roadmapsLoadingStatus: 'idle',
};

export const fetchRoadmaps = createAsyncThunk(
  'roadmaps/fetchRoadmaps',
  async () => {
    const data = await roadMapsInstance
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
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRoadmaps.pending, state => {
        state.roadmapsLoadingStatus = 'loading';
      })
      .addCase(fetchRoadmaps.fulfilled, (state, action) => {
        state.roadmaps = action.payload;
        state.roadmapsLoadingStatus = 'idle';
      })
      .addCase(fetchRoadmaps.rejected, state => {
        state.roadmapsLoadingStatus = 'error';
      });
  },
});

export const {changeFilter} = roadmapsSlice.actions;
export default roadmapsSlice.reducer;

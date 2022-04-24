import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadBeerById = createAsyncThunk(
  '@@details/load-beer-by-id',
  (id, { extra: { client, api } }) => {
    return client.get(api.searchById(id));
  }
);

const initialState = {
  currentBeer: null,
  status: 'idle',
  error: null,
};

const detailsSlice = createSlice({
  name: '@@details',
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBeerById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadBeerById.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadBeerById.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentBeer = action.payload.data[0];
      });
  },
});

export const { clearDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;


// selectors
export const selectCurrentBeer = (state) => state.details.currentBeer;
export const selectDetails = (state) => state.details;


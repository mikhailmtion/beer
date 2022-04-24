import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const loadRandomBeer = createAsyncThunk(
  '@@random/load-random-beer',
  (_, {
    extra: {client, api},
  }) => {
    return client.get(api.RANDOM_BEER);
  }
);

const initialState = {
  randomBeer: null,
  status: 'idle',
  error: null,
};

const randomSlice = createSlice({
  name: '@@random',
  initialState,
  reducers: {
    clearRandom: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadRandomBeer.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadRandomBeer.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadRandomBeer.fulfilled, (state, action) => {
        state.status = 'received';
        state.randomBeer = action.payload.data[0];
      });
  },
});
export const randomReducer = randomSlice.reducer;

export const { clearRandom } = randomSlice.actions;



// selectors
export const selectRandomBeer = (state) => state.random.randomBeer;
export const selectRandom = (state) => state.random;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadBeers = createAsyncThunk(
  '@@beers/load-beers',
  (page = 1, {
    extra: {client, api},
  }) => {
    return client.get(api.allBeers(page));
  }
);

const initialState = {
  status:'idle',
  error: null,
  list:[],
};

const beerSlice = createSlice({
  name: '@@beers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadBeers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadBeers.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadBeers.fulfilled, (state, action) => {
        state.status = 'received';
        state.list = action.payload.data;
      });
  },
});

export const beerReducer = beerSlice.reducer;


export const selectBeersInfo = (state) => ({
  status: state.beers.status,
  error: state.beers.error,
  qty: state.beers.list.length,
});

export const selectAllBeers = (state) => state.beers.list;


export const selectVisibleBeers = (state, {search = '', style = ''}) => {

  return state.beers.list.filter(
    beer => (
      beer.name.toLowerCase().includes(search.toLowerCase()) &&  beer.tagline.includes(style)
    )
  );
};


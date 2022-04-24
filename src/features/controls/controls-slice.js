import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  style: '',
};

const controlsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setStyle: (state, action) => {
      state.style = action.payload;
    },
    clearControls: () => initialState,
  },
});

export const {setSearch,setStyle, clearControls} = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;

export const selectSearch = (state) => state.controls.search;
export const selectStyle = (state) => state.controls.style;
export const selectControls = (state) => state.controls;

export const controlsInfo = (state) => ({
  search: state.controls.search,
  style: state.controls.style,
});

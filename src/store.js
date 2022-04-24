import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';

import * as api from './config';
import { beerReducer } from './features/beers/beers-slice';
import { controlsReducer } from './features/controls/controls-slice';
import { detailsReducer } from './features/details/details-slice';
import { randomReducer } from './features/random/random-slice';

export const store = configureStore({
  reducer: {
    beers: beerReducer,
    controls: controlsReducer,
    details: detailsReducer,
    random: randomReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

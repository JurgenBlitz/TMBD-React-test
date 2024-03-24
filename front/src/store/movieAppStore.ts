import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const movieAppSlice = createSlice({
  name: 'movieAppSlice',
  initialState: {
    popularMovies: [],
    popularShows: [],
    selectedMovie: null,
    selectedShow: null,
    selectedTab: 'movies'
  },
  reducers: {
    setPopularMovies: (state, action: PayloadAction<any>) => {
      state.popularMovies = action.payload;
    },
    setPopularShows: (state, action: PayloadAction<any>) => {
      state.popularShows = action.payload;
    },
    setSelectedMovie: (state, action: PayloadAction<any>) => {
      state.selectedMovie = action.payload;
    },
    setSelectedShow: (state, action: PayloadAction<any>) => {
      state.selectedShow = action.payload;
    },
    setSelectedTab: (state, action:  PayloadAction<string>) => {
      state.selectedTab = action.payload;
    },
    clearStore: (state) => {
      state.popularMovies = [];
      state.popularShows = [];
      state.selectedMovie = null;
      state.selectedShow = null;
      state.selectedTab = 'movies'
    }
  },
});

export const {
  setPopularMovies,
  setPopularShows,
  setSelectedMovie,
  setSelectedShow,
  setSelectedTab
} = movieAppSlice.actions;

export default movieAppSlice.reducer;


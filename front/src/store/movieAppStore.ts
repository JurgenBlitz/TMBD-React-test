import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const movieAppSlice = createSlice({
  name: 'movieAppSlice',
  initialState: {
    popularMovies: [],
    popularShows: [],
    selectedMovie: null,
    selectedShow: null,
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
    clearStore: (state) => {
      state.popularMovies = [];
      state.popularShows = [];
      state.selectedMovie = null;
      state.selectedShow = null;
    }
  },
});

const {
  setPopularMovies,
  setPopularShows,
  setSelectedMovie,
  setSelectedShow
} = movieAppSlice.actions;


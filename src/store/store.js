import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"
import {moviesReducer, singleMovieReducer} from "./movies";
import userReducer from "./user"
import { searchReducer } from "./search";

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
    reducer:{
        movies: moviesReducer,
        singleMovies: singleMovieReducer,
        search: searchReducer,
        user: userReducer,
    }
})

export default store
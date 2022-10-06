import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const addFavorite = createAsyncThunk("ADD_FAVORITE", async (info, thunkAPI) => {
  try {
    console.log("AGREGAR FAVORITO", info)
    const {id, movie } = info
    console.log("MOVIEEE", movie)
     const type = movie.title ? movie.title : movie.name
    const favorite = await axios.post(`/api/favourites/${id}/add`, {movieId: movie.id, title: type, poster_path: movie.poster_path, overview: movie.overview});
    return favorite.data
  } catch (error) {
    console.log(error);
  }
});

// export const removeFavorite = createAsyncThunk("REMOVE_FAVORITE", async (data, thunkAPI) => {
//     try {
//       const deleteFavorite = await axios.delete(`/api/${id}/remove`, data);
//       return deleteFavorite
//     } catch (error) {
//       console.log(error);
//     }
//   });


export const favoritesActionsReducer = createReducer([], {
  [addFavorite.fulfilled]: (state, action) => action.payload,
  [addFavorite.rejected]: (state, action) => action.payload,

//   [removeFavorite.fulfilled]: (state, action) => action.payload,
//   [removeFavorite.rejected]: (state, action) => action.payload,
});

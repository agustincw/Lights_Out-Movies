import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const favoritesAll = createAsyncThunk("FAVORITES_DISPLAY_ALL", async (data) => {
    try{
// console.log("ALL FAVORITES", data)
        const favorites = await axios.get(`/api/favourites/${data}/all`)
        return favorites.data
    } catch (error) {
        console.log(error);
      }
});

export const favoritesAllReducer = createReducer([], {
    [favoritesAll.fulfilled]: (state, action) => action.payload,
    [favoritesAll.rejected]: (state, action) => action.payload,
  });
  
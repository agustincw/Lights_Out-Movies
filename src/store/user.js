import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

// export const loginRequest = createAsyncThunk(
//     "LOGIN",
//     ({ email, password }) => {
//       return axios
//         .post("http://localhost:3001/api/users/login", {
//           email: email.value,
//           password: password.value,
//         })
//         .then((res) => {
//           localStorage.setItem("user", JSON.stringify(res.data));
//           return res.data;
//         });
//     }
//   );



export const logInRequest = createAsyncThunk("LOGIN_USER",  async (data, thunkAPI) => {
    const {email, password} = data
  try {
    const user = await axios.post(`/api/user/login`, {
        email,
        password,
    })
    localStorage.setItem("user", JSON.stringify(user.data));
    return user.data
  } catch (error) {
    console.log(error);
  }
});



const moviesReducer = createReducer(
  [],
  {
    [logInRequest.fulfilled]: (state, action) => action.payload,
    [logInRequest.rejected]: (state, action) => action.payload,
  }
);

export default moviesReducer;
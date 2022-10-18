import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: []
  },
  reducers: {

  }
})

// Exportamos el reducer para poderlo agregar a nuestra store ./store/index.js
export default usersSlice.reducer;

export const fetchAllUsers = () => () => {
  axios
    .get("https://reqres.in/api/users?per_page=12")
    .then((response) => {})
    .catch((error) => console.log(error))
}

import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: []
  },
  reducers: {
    // La acción hay que exportarla para que quede expuesta a los reducers
    setUserList: (state, action) => {
      state.list = action.payload;
    }
  }
})

// Se desestructura para quedar expuesta a los demás componentes
export const { setUserList } = usersSlice.actions

// Exportamos el reducer para poderlo agregar a nuestra store ./store/index.js
export default usersSlice.reducer;

export const fetchAllUsers = () => (dispatch) => {
  axios
    .get("https://reqres.in/api/users?per_page=12")
    .then((response) => {
      // La respuesta tiene un cuerpo de datos que es llamado data
      // que contiene el array data
      // Pero para poder ser enviado al Provider hay que garantizarlo
      // por medio de un dispatcher, que es quien se encarga que ejecutar
      // las actions
      dispatch(setUserList(response.data.data))
    })
    .catch((error) => console.log(error))
}

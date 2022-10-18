// Primero configuramos la store 
import { configureStore } from "@reduxjs/toolkit"
// reducers
import users from "./slices/users"

export default configureStore({
  // Ese reducer se conforma con muchos otros reducers
  reducer: {
    // lo importamos al reducer principal para que quede disponible para toda la app
    users
  }
})
// Primero configuramos la store 
import { configureStore } from "@reduxjs/toolkit"
// reducers
import users from "./slices/users"

export default configureStore({
  // Ese reducer se conforma con muchos otros reducers
  reducer: {

  }
})
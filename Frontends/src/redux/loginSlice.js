import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userToken: null,
    userProfil: null,
  },
  reducers: {
    // Action pour connecter l'utilisateur
    loginUser: (state, action) => {
      state.userToken = action.payload;
    },
    // Action pour déconnecter l'utilisateur
    logoutUser: (state) => {
      state.userToken = null;
      state.userProfil = null;
    },
    // Action pour stocker les données utilisateur
    infoUser: (state, action) => {
      state.userProfil = action.payload;
    },
    // Action pour mettre à jour le nom d'utilisateur
    infoUserName: (state, action) => {
      // Vérifie si userProfil est null avant de modifier userName
      if (state.userProfil) {
        state.userProfil.userName = action.payload;
      }
    },
  },
});

export const { loginUser, logoutUser, infoUser, infoUserName } = loginSlice.actions;

export default loginSlice.reducer;

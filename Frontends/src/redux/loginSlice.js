// Dans votre fichier loginSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Créez une thunk asynchrone pour la connexion de l'utilisateur
export const loginUserAsync = createAsyncThunk(
  'login/loginUserAsync',
  async (userData) => {
    // Effectuez votre requête HTTP pour la connexion de l'utilisateur ici
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data; // Vous pouvez retourner les données reçues de la requête
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userToken: null,
    userProfil: null,
    loading: false,
    error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.userToken = action.payload.token;
        state.userProfil = action.payload.userProfil;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Exportez vos actions, y compris la thunk asynchrone
export const { loginUser, logoutUser, infoUser, infoUserName } = loginSlice.actions;

export default loginSlice;

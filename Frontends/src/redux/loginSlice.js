// loginSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logUser, getUserProfile, changeUsername } from "../components/Api/Api";

// Thunk asynchrone pour la connexion de l'utilisateur
export const loginUserAsync = createAsyncThunk(
  'login/loginUserAsync',
  async ({ email, password }) => {
    const userData = await logUser(email, password);
    return userData;
  }
);

// Thunk asynchrone pour récupérer le profil utilisateur
export const fetchUserProfileAsync = createAsyncThunk(
  'login/fetchUserProfileAsync',
  async (token) => {
    const userProfile = await getUserProfile(token);
    return userProfile;
  }
);

// Thunk asynchrone pour modifier le nom d'utilisateur
export const changeUsernameAsync = createAsyncThunk(
  'login/changeUsernameAsync',
  async ({ newUserName, token }) => {
    const updatedProfile = await changeUsername(newUserName, token);
    return updatedProfile;
  }
);

// Définition du slice Redux
export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userToken: null,
    userProfile: null,
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
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserProfileAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfileAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.userProfile = action.payload;
      })
      .addCase(fetchUserProfileAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(changeUsernameAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeUsernameAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.userProfile.userName = action.payload.userName;
      })
      .addCase(changeUsernameAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export des actions et du slice Redux
export const { loginUser, logoutUser, infoUser, infoUserName } = loginSlice.actions;

export default loginSlice;

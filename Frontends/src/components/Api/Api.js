// api.js

// Fonction pour se connecter
export async function logUser(email, password) {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  }
  
  // Fonction pour récupérer le profil utilisateur
  export async function getUserProfile(token) {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    return response.json();
  }
  
  // Fonction pour modifier le nom d'utilisateur
  export async function changeUsername(newUserName, token) {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: newUserName }),
    });
    return response.json();
  }
  
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { loginUserAsync, fetchUserProfileAsync } from "../../redux/loginSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "", staySignedIn: false });
  const dispatch = useDispatch();
const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({ ...formData, [name]: name === "staySignedIn" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form data:", formData);
    const userData = await dispatch(loginUserAsync(formData)); // Attend la résolution de loginUserAsync
    console.log("User data after login:", userData);
    if (userData.payload) {
      const token = userData.payload.body.token;
      if (formData.staySignedIn) {
        localStorage.setItem("token", token);
      }
       // Récupérer le token à partir des données de réponse
      dispatch(fetchUserProfileAsync(token)); // Passer le token directement à fetchUserProfileAsync
      console.log("Login successful");
      navigate("/user"); // Naviguer vers la page utilisateur après la connexion
    } else {
      // Gérer les erreurs de connexion ici
      console.error("Login failed");
    }
  };
  
  
  
  

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="userEmail">User Email</label>
            <input
              type="email"
              id="userEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" example@gmail.com"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              name="staySignedIn"
              checked={formData.staySignedIn}
              onChange={handleChange}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Button btnText={"Sign In"} className={"sign-in-button"} />
        </form>
      </section>
    </main>
  );
};

export default SignIn;

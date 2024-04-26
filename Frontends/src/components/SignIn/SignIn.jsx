import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { loginUserAsync } from "../../redux/loginSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "", staySignedIn: false });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({ ...formData, [name]: value === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dispatch de l'action asynchrone pour la connexion de l'utilisateur
      const userData = await dispatch(loginUserAsync(formData));
      console.log(formData);
      // Gestion de la réponse de l'action asynchrone
      if (userData.payload.token) {
        if (formData.staySignedIn) localStorage.setItem("token", userData.payload.token);
        navigate("/user");
      } else {
        setError("Identifiants incorrects");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      setError("Identifiants incorrects");
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
              placeholder=" exemple@gmail.com"
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
              name="rememberMe"
              checked={formData.staySignedIn}
              onChange={handleChange}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Button btnText={"Sign In"} className={"sign-in-button"} />
        </form>
        {error && <p className="errorConexion">{error}</p>}
      </section>
    </main>
  );
};

export default SignIn;

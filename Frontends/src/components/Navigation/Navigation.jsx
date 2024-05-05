import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink , useNavigate } from "react-router-dom";
import { logoutUser, fetchUserProfileAsync, loginUser } from "../../redux/loginSlice";

import logo from "../../assets/images/argentBankLogo.png";
import { LuLogOut } from "react-icons/lu";

const Navigation = () => {
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.login);
  const userProfile = useSelector((state) => state.login.userProfile);
  const firstName = userProfile ? userProfile.body.firstName : '';

  // Vérification de l'état de connexion au chargement de la page
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Si un token est trouvé dans le localStorage, connectez automatiquement l'utilisateur
      dispatch(loginUser(token));
      // Utilisez l'action asynchrone pour récupérer le profil de l'utilisateur
      dispatch(fetchUserProfileAsync(token));
    }
  }, [dispatch]);

  const navigate = useNavigate();
  const handleUser = (e) => {
    e.preventDefault();
    navigate("/user");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
  };


  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      <div className="login">
        
        
        {userToken && userProfile && (
          <div className="userName" >
            <i className="fa fa-user-circle"></i>
            <p onClick={handleUser} >{firstName}</p>
          </div>
        )}

        <div>
          {!userToken && (
            <NavLink className="main-nav-item" to="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          )}

          {userToken && (
            <NavLink className="main-nav-item" to="/" onClick={handleLogout}>
              <LuLogOut />
              Sign Out
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

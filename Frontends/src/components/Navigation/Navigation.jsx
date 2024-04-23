import logo from "../../assets/images/argentBankLogo.png";
import { LuLogOut } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../redux/loginSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  
  // Utilisation de la déstructuration pour extraire userToken et userProfil
  const { userToken, userProfil } = useSelector((state) => state.login);

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
  };

  return (
    <nav className="main-nav">
      {/* Logo */}
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      {/* Section de connexion */}
      <div className="login">
        {/* Affichage du nom d'utilisateur s'il est connecté */}
        {userToken && (
          <div className="userName">
            <i className="fa fa-user-circle"></i>
            <p>{userProfil.userName}</p>
          </div>
        )}

        {/* Boutons de connexion/déconnexion */}
        <div>
          {/* Bouton "Sign In" s'il n'est pas connecté */}
          {!userToken && (
            <NavLink className="main-nav-item" to="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          )}

          {/* Bouton "Sign Out" s'il est connecté */}
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

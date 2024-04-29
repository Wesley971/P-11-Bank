import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser, fetchUserProfileAsync } from "../../redux/loginSlice";

import logo from "../../assets/images/argentBankLogo.png";
import { LuLogOut } from "react-icons/lu";

const Navigation = () => {
  const dispatch = useDispatch();
  const { userToken, userProfile} = useSelector((state) => state.login);

  useEffect(() => {
    // Charge le profil utilisateur si un token est disponible
    if (userToken) {
      // Utilise l'action asynchrone pour récupérer le profil de l'utilisateur
      dispatch(fetchUserProfileAsync(userToken));
    }
  }, [dispatch, userToken]);

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
          <div className="userName">
            <i className="fa fa-user-circle"></i>
            <p>{userProfile.userName}</p>
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

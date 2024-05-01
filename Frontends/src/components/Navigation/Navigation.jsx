import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink , useNavigate } from "react-router-dom";
import { logoutUser, fetchUserProfileAsync } from "../../redux/loginSlice";

import logo from "../../assets/images/argentBankLogo.png";
import { LuLogOut } from "react-icons/lu";

const Navigation = () => {
  const dispatch = useDispatch();
  const { userToken} = useSelector((state) => state.login);
  const userProfile = useSelector((state) => state.login.userProfile);
  const { firstName } = userProfile.body;

  useEffect(() => {
    // Charge le profil utilisateur si un token est disponible
    if (userToken) {
      // Utilise l'action asynchrone pour récupérer le profil de l'utilisateur
      dispatch(fetchUserProfileAsync(userToken));
    }
  }, [dispatch, userToken]);
  const navigate = useNavigate();
  const handleUser = (e) => {
    e.preventDefault();
    navigate("/user");
  
  }
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

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Accounts from "../../data/accounts.json";// tableau Json
import Account from "../Account/Account";//Composant
import Button from "../Button/Button";
import EditName from '../EditName/EditName';
import { toggleEditState } from "../../redux/loginSlice";
const User = () => {
  const userProfile = useSelector(state =>(state.login.userProfile))
  const editingName = useSelector(state => state.login.editingName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [redirected, setRedirected] = useState(false);
  const handleDisplayEdit = () => {
    dispatch(toggleEditState()); // Déclencher l'action pour basculer l'état d'édition
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!userProfile && !token && !redirected)  {
      // Si aucun token n'est trouvé, rediriger l'utilisateur en rendant une redirection
      setRedirected(true);
      navigate("/");
    }
  }, [userProfile,redirected,navigate ]);
  console.log(setRedirected);

  const { firstName, lastName } = userProfile && userProfile.body ? userProfile.body : { firstName: '', lastName: '' };
  return (
    <main className="main bg-dark2">
      {editingName ? (
        <EditName  />
      ) : (
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}!
        </h1>
        <Button className={"edit-button"} btnText={"Edit Name"} onClick={handleDisplayEdit}></Button>
      </div>)}
      <h2 className="sr-only">Accounts</h2>
      {Accounts.map((account, index) => (
          <Account
          key={"account"+index}
          title={account.title}
          amount={account.amount}
          description={account.description}         
          />
        ))}
    </main>
  );
};

export default User;
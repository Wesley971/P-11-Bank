import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Account from "../Account/Account"; //Composant
import Button from "../Button/Button";

const User = () => {
  const username = useSelector(state => state.login.userProfile.userName);
  const navigate = useNavigate();

  const handleDisplayEdit = (e) => {
    e.preventDefault();
    navigate("/editUser");
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {username}!
        </h1>
        <Button className="edit-button" btnText="Edit Name" onClick={handleDisplayEdit} />
      </div>
      <h2 className="sr-only">Accounts</h2>
      {Account.map((account, index) => (
        <Account
          key={index} // Utilisation de l'index comme clé
          {...account} // Utilisation de la décomposition pour passer les props
        />
      ))}
    </main>
  );
};

export default User;

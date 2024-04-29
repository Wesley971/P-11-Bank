import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Account from "../Account/Account"; // Composant
import Button from "../Button/Button";

const User = () => {
  const userProfile = useSelector(state => state.login.userProfile);
  console.log("User profile:", userProfile); // Utilisation du sélecteur pour récupérer le profil utilisateur
  const navigate = useNavigate();
console.log(userProfile);
  const handleDisplayEdit = () => {
    navigate("/editUser");
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userProfile ? userProfile.username : "User"}! {/* Affichage du nom d'utilisateur s'il est disponible */}
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

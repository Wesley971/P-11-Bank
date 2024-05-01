import { useSelector } from "react-redux";
import Accounts from "../../data/accounts.json";// tableau Json
import Account from "../Account/Account";//Composant
import Button from "../Button/Button";
const User = () => {
  const userProfile = useSelector(state =>(state.login.userProfile))
  // Gestion de l'affichage du formulaire pour modifier son username

  const {firstName, lastName } = userProfile.body;
  return (
    <main className="main bg-dark2">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}!
        </h1>
        <Button className={"edit-button"} btnText={"Edit Name"}></Button>
      </div>
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
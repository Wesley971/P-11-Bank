import PropTypes from "prop-types"; // Utilisation de PropTypes (sans les accolades)

import Button from "../Button/Button";

const Account = ({ title, amount, description }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p> 
      </div>
      <div className="account-content-wrapper cta">
        <Button className="transaction-button" btnText="View transactions" /> 
      </div>
    </section>
  );
};

// Définition des types de props avec PropTypes
Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired,
};

export default Account;

import PropTypes from "prop-types";

const Button = ({ btnText, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {btnText}
    </button>
  );
};

// Validation des types des props
Button.propTypes = {
  // Le texte du bouton est une chaîne de caractères obligatoire
  btnText: PropTypes.string.isRequired,
  // L'événement onClick est une fonction optionnelle
  onClick: PropTypes.func,
  // La classe CSS est une chaîne de caractères optionnelle
  className: PropTypes.string
};

export default Button;

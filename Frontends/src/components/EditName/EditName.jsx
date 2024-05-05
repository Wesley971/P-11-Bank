 import { useState } from "react";
 import Button from "../Button/Button";
  import { toggleEditState } from "../../redux/loginSlice";

 //Variable pour manipuler le store redux
 import { useSelector, useDispatch } from "react-redux";
 import { infoUserName } from "../../redux/loginSlice";
 //Importation de la fonction pour le PUT
 import { changeUsername } from "../../services/api.service";

 const EditName = () => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(toggleEditState()); // Déclencher l'action pour annuler l'édition
  };
    // enregistrement de la slice login depuis le store dans une variable
    const login = useSelector((state) => state.login);
    const userProfile = login.userProfile;
    // Initialisation de la variable avec le store par default et onChange pour récupérer la valeur de l'input
    const [newUserName, setNewUserName] = useState(userProfile.userName || "");

    const token = login.userToken;
    const handleChangeUserName = (e) => {
      setNewUserName(e.target.value);
    };
    const handleForm = async (e) => {
        e.preventDefault();
        const updateUserName = await changeUsername(newUserName, token)
        if (updateUserName.status === 200) {
          dispatch(infoUserName(newUserName));
          console.log("Le nom d'utilisateur a bien été modifié.", updateUserName.status);
        } else {
          console.error("La mise à jour du nom d'utilisateur a échoué.");
        }
      };

      return (
        <main className="main bg-dark">
        <section className="sign-in-content toogle-edit-name">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Edit User info</h1>
          <form onSubmit={handleForm} onClick={(event) => event.stopPropagation()}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                value={newUserName}
                onChange={handleChangeUserName}
                type="text"
                id="username"
                placeholder="Tapez votre username"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                disabled
                value={userProfile.firstName}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                disabled
                value={userProfile.lastName}
              />
            </div>
            <Button  btnText={"Save"} className={"sign-in-button"}/>
          </form>
            <Button  btnText={"Cancel"} className={"sign-in-button"} onClick={handleCancel}/>
        </section>
        </main>
      );
    };
    
    export default EditName;
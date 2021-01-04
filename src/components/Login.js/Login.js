import React from "react";
import facebookLogo1 from "../../images/facebook-logo.png";
import facebookLogoText from "../../images/facebook-logo-2.png";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../Firebase/Firebase";
import { useStateValue } from "../../StateProvider/StateProvider";
import { actionType } from "../../Reducer/Reducer";
const Login = () => {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .setPersistence("session")
      .then(() => {
        auth.signInWithPopup(provider).then((result) => {
          dispatch({
            type: actionType.SET_USER,
            user: result.user,
          });
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={facebookLogo1} alt="" />
        <img src={facebookLogoText} alt="" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;

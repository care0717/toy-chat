import React, { useContext } from "react";
import { Button, Container } from "@material-ui/core";

import { firebaseApp } from "../../firebase/config";
import { UserSessionContext } from "../../Router";

export const AnonymousLoginButton = () => {
  const { setUserSession } = useContext(UserSessionContext);
  const onClickLoginButton = () => {
    firebaseApp
      .auth()
      .signInAnonymously()
      .then((result) => {
        const user = result.user;
        if (user) {
          const uid = user.uid;
          const name = `ゲストユーザー${user.uid}`;
          alert(`${name}としてログインしました。`);
          setUserSession({ uid, name });
        } else {
          alert("エラー");
        }
      });
  };

  return (
    <Container>
      <Button color="primary" variant="contained" onClick={onClickLoginButton}>
        匿名ログイン
      </Button>
    </Container>
  );
};

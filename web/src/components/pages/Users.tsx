import React, { useContext } from "react";
import styled from "styled-components";

import { UserIcon } from "../atoms/UserIcon";
import { UserSessionContext } from "../../Router";

export const Users = () => {
  const { userSession } = useContext(UserSessionContext);
  return (
    <SCContainer>
      <UserIcon userImage={userSession.userImage} />
      <span>〇〇</span>
    </SCContainer>
  );
};

const SCContainer = styled.div`
  min-height: calc(100vh - 112px);
  display: flex;
  flex-direction: column;
`;

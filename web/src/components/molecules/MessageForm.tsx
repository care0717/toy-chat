import React, { useState, useContext } from "react";
import styled from "styled-components";

import { SubmitButton } from "../atoms/SubmitButton";
import { MessageFormInput } from "../atoms/MessageFormInput";
import { postMessage } from "../../firebase/message";

import { UserSessionContext } from "../../Router";

export const MessageForm = () => {
  const { userSession } = useContext(UserSessionContext);
  const [content, setContent] = useState("");
  const onClickToPost = (content: string) => {
    console.log({ ...userSession, content });
    postMessage({ ...userSession, content });
    setContent("");
  };

  return (
    <SCFormContainer>
      <MessageFormInput content={content} setContent={setContent} />
      <SubmitButton onClickToPost={onClickToPost} content={content} />
    </SCFormContainer>
  );
};

const SCFormContainer = styled.div`
  display: flex;
`;

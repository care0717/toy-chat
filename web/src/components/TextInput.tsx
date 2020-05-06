import React from "react";
import { TextField } from "@material-ui/core";
import SendButton from "./SendButton";

function TextInput() {
  return (
    <React.Frament>
      <form className="wrap" noValidate autoComplete="off">
        <TextField
          id="standard-text"
          label="メッセージを入力"
          className="text"
          margin="normal"
        />
        <SendButton />
      </form>
    </React.Frament>
  );
}

export default TextInput;

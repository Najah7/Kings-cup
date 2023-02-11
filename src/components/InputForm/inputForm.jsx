// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@mui/material";
import React from "react";
import { useState } from "react";


export const InputForm = ({ playerList, setPlayerList }) => {
  const [inputText, setInputText] = useState("");

  const addPlayer = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }

    /* プレイヤーを追加する。 */
    setPlayerList([
      ...playerList,
      inputText,
    ]);
    
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="inputForm">
      <form onSubmit={addPlayer}>
      <Input placeholder="Type player name..." onChange={handleChange} value={inputText} variant='solid' size='lg' color='error' />
        <button onClick={addPlayer}>
        ➕
        </button>
      </form>
    </div>
  );
};
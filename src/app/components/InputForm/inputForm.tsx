import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

export const InputForm = ({ playerList, setPlayerList }: any) => {
  const [inputText, setInputText] = useState("");

  const addPlayer = (e:any) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    // console.log("add task");

    /* タスクを追加する。 */
    setPlayerList([
      ...playerList,
      {
        id: playerList.length,
        text: inputText,
      },
    ]);
    
    setInputText("");
  };

  const handleChange = (e:any) => {
    setInputText(e.target.value);
  };

  return (
    <div className="inputForm">
      <form onSubmit={addPlayer}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addPlayer}>
        ➕
        </button>
      </form>
    </div>
  );
};
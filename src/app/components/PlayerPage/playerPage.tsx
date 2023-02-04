import { useState } from "react";
import { InputForm } from "../InputForm/inputForm";
import { PlayerList } from "../PlayerList/playerList";


export const PlayerPage = () => {
    const [playerList, setPlayerList] = useState([]);
  
    return (
      <div className="body">
        <InputForm playerList={playerList} setPlayerList={setPlayerList} />
        <PlayerList playerList={playerList} setPlayerList={setPlayerList} />
      </div>
    );
  }
import { useState } from "react";
import { StartButton } from "../Button/StartButton/startButton";
import { InputForm } from "../InputForm/inputForm";
import { PlayerList } from "../PlayerList/playerList";
import styles from "./playerPage.module.css"

export const PlayerPage = () => {
    const [playerList, setPlayerList] = useState([]);
  
    return (
      <div className={styles.container}>
        <InputForm playerList={playerList} setPlayerList={setPlayerList} />
        <PlayerList playerList={playerList} setPlayerList={setPlayerList} />
        <StartButton/>
      </div>
    );
  }
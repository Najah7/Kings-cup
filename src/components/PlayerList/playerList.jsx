import { style } from '@mui/system';
import styles from './playerList.module.css'

export const PlayerList = ({ playerList, setPlayerList }) => {
    

  const handleDelete = (arg_index) => {
    console.log(arg_index)
    /* 現在のタスクを削除する。 */
    setPlayerList(playerList.filter((player, index) => index !== arg_index));
  };

  return (
    
    
    <div className={styles.PlayerList}>
      <div className="players">
        {playerList.map((player, index) => (
          <div
            className={styles.player}
            key={index}
          >
            <button onClick={() => handleDelete(index)}>
              ➖
              </button>
            <div className={styles.text}>
              <span className={styles.span}>{index + 1}. {playerList[index]}</span>
            </div>
            <div className={styles.icon}>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
import { style } from '@mui/system';
import styles from './playerList.module.css'

export const PlayerList = ({ playerList, setPlayerList }) => {
    

  const handleDelete = (id) => {
    /* 現在のタスクを削除する。 */
    setPlayerList(playerList.filter((player) => player.id !== id));
  };

  return (
    <div className={styles.PlayerList}>
      <div className="players">
        {playerList.map((player, index) => (
          <div
            className={styles.player}
            key={index}
          >
            <div className={player.text}>
              <span>{player.text}</span>
            </div>
            <div className={styles.icon}>
              <button onClick={() => handleDelete(player.id)}>
              ➖
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
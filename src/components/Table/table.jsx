import { Box } from '@mui/system'
import styles from './table.module.css'
import GameView from '../GameView/gameView'


export const Table = () => {

    return (
        <>        
        <Box className={styles.table}>
            <GameView/>
            {/* <Discription emoji='😊' discription='test'/> */}
            {/* <PlayerPage/> */}
        </Box>
        </>
    )
}


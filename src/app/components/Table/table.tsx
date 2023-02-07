import { Card } from '../Card/card'
import { Box } from '@mui/system'
import { FirstView } from '../FirstView/firstView'
import styles from './table.module.css'
import GameView from '../GameView/gameView'
import { Discription } from '../Discription/discription'
import { PlayerInput } from '../PlayerInput/playerInput'
import { PlayerPage } from '../PlayerPage/playerPage'

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


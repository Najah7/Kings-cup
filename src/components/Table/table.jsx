import { Box } from '@mui/system'
import styles from './table.module.css'
// import GameView from '../GameView/gameView'


export const Table = ({children}) => {

    return (
        <>        
        <Box className={styles.table}>
            {children}
        </Box>
        </>
    )
}


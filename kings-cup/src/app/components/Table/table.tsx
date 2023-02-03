import { Box } from '@mui/system'
import { FirstView } from '../FirstView/firstView'
import styles from './table.module.css'

export const Table = () => {

    return (
        <>        
        <Box className={styles.table}>
            <FirstView></FirstView>
        </Box>
        </>
    )
}


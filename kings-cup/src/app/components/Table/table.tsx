import { Box } from '@mui/system'
import { Card } from '../Card/card'
import { Counter } from '../Counter/Counter'
import { StartButton } from '../StartButton/startButton'
import { StatusDisplay } from '../StatusDisplay/StatusDisplay'
import styles from './table.module.css'

export const Table = () => {

    return (
        <>        
        <Box className={styles.table}>
            <StatusDisplay></StatusDisplay>
          <Card/>
          <StartButton></StartButton>
        </Box>
        </>
    )
}
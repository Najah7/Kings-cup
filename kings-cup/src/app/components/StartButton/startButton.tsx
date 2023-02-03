import { Box } from '@mui/material'
import styles from './startButton.module.css'

export const StartButton = () => {

    return (
        <>
        <Box className={styles.container}>
            <button className={styles.start}>Satrt Bottun</button>
        </Box>
        </>
    )
}
import { Box } from '@mui/material'
import styles from './button.module.css'

export const Button = (props: any) => {

    return (
        <>
        <Box className={styles.container}>
            <button className={styles.start} onClick={props.onClick}>{props.text}</button>
        </Box>
        </>
    )
}
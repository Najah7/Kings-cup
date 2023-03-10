import { Box } from '@mui/material'
import Link from 'next/link'
import styles from './button.module.css'

export const Button = (props) => {

    return (
        <>
        <Box className={styles.container}>
            <button className={styles.start} onClick={props.onClick}>
            {props.children}
            </button>
        </Box>
        </>
    )
}
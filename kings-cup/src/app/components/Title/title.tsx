import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import styles from './title.module.css'

export const Header = () => {

    return (
        <>
        <Typography variant='h1'>
          <Box className={styles.h1}>Kings Cup</Box>
        </Typography>
        </>
    )
}
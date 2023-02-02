'use client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { Box, style } from '@mui/system'
import { Typography } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Box className={styles.app}>
        <Typography variant='h1'>
          <Box className={styles.h1}>Kings Cup</Box>
        </Typography>
        <Box className={styles.table}>
            <Image
             src="/card-back-Blue.png"
             alt='トランプ裏面'
             width={150}
             height={300}
             priority
             />
        </Box>
      </Box>
      
    </main>
  )
}

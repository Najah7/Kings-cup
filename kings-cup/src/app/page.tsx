'use client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { Box } from '@mui/system'
import { Table } from './components/Table/table'
import { Title} from './components/Title/title'
import { StartButton } from './components/StartButton/startButton'
import { FirstView } from './components/FirstView/firstView'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  
  return (
    <main className={styles.app}>
      <Box>
        <Title/>
        <Table/>
      </Box>
      
    </main>
  )
}

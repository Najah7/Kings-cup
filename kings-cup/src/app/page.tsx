'use client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { Box } from '@mui/system'
import { Table } from './components/Table/table'
import { Header} from './components/Title/title'
import { StartButton } from './components/StartButton/startButton'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  
  return (
    <main className={styles.app}>
      <Box>
        <Header/>
        <Table/>
        {/* <StartButton/> */}



        

          {/* 
          <StatusDisplay>
          <NumCards/>
          <Who/>
          <NumKings/> 
          </StatusDisplay>
        
        {/* <Button/> */}
      </Box>
      
    </main>
  )
}

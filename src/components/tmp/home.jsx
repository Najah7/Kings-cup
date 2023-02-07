// 'use client'

import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { Box } from '@mui/system'
import { Table } from './components/Table/table'
import { Title} from './components/Title/title'
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

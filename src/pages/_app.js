import '@/styles/globals.css'
import { Layout } from '@/components/Layout/layout'

import { createContext, useState } from 'react'

export let GameInfo = createContext()

export default function App({ Component, pageProps }) {

  const [numCards, setNumCards] = useState(54)
  const [numKings, setNumKings] = useState(0)
  const [players, setPlayers] = useState([])
  const [playerIndex, setPlayerIndex] = useState(0)

  let gameInfo = {
    numCards: numCards,
    setNumCards: setNumCards,
    numKings: numKings,
    setNumKings: setNumKings,
    players:players,
    setPlayers: setPlayers,
    playerIndex: playerIndex,
    setPlayerIndex: setPlayerIndex,
  }

  

  return (
    <GameInfo.Provider value={gameInfo}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GameInfo.Provider>
    
  ) 
}

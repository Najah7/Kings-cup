import { Inter } from '@next/font/google'
import { FirstView } from '../components/FirstView/firstView'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import {GameInfo} from './_app'

const inter = Inter({ subsets: ['latin'] })


export default function Home({cards}) {

  const router = useRouter()

  let gameInfo = useContext(GameInfo)


  useEffect(() => {

    // 前回のプレイデータがLocalStrageにあるかをチェックするため 
    // const cardsDataInStorage = localStorage.getItem('cards')
    // const playersDataInStorage = localStorage.getItem('players')

    // if(cardsDataInStorage && playersDataInStorage)
    // {
    // ロカールストレージの値をオブジェクトへ
    //   const cardsObj = JSON.parse(cardsDataInStorage)
    // ランダムにカードを選ぶ
    //   const randomNum = getRandomNumWithIn(cardsObj.length - 1)
    //   const randomCard = cardsObj[randomNum]
    // markとnumberだけを扱いやすく変数に
    //   const mark = randomCard.mark
    //   const num = randomCard.num

    // 続きからプレイするとき用のURLを事前に生成
    //   const nextUrl = `/game/${mark}/${num}`

    // 続きからするプレイするかのお伺い
    //   if(confirm('Would you like to continue with your last game? '))
    //   {
    //     // 続きのページへ
    //     router.push(nextUrl)
    //   }
    // }
    
    // （player以外の）ゲームに使う初期値をセット
    localStorage.setItem('cards', JSON.stringify(cards))
    
    return (
      function() {
        gameInfo.setNumCards(prev => prev - 1)
      }
    )
    
  }, [])

  return (
    <>
        <FirstView/>
    </>
  )
}

export async function getStaticProps() {

  // cardのデータを読み込み
  const { cards } = await import('/data/cards.json')


  // ページ内で使えるようにreturn
  return {
      props:{
          cards: cards
      }
  }
}
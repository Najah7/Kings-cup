import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Layout } from '../../../../components/Layout/layout';
import { useContext, useEffect, useState } from 'react';
import { Card } from '../../../../components/Card/card';
import { StatusDisplay } from '../../../../components/StatusDisplay/StatusDisplay';
import { Button } from '../../../../components/Button/SimpleButton/button';
import { LinkButton } from '@/components/Button/linkButton/linkButton';
import { GameInfo } from '@/pages/_app';
import { UpdateToNextIndex } from 'helper/game';

// NOTE: Static Renderingの値（message）
const DiamondCard = ({card}) => {

    // ゲーム情報を取得（コンテキスから）
    const gameInfo = useContext(GameInfo)

    const numCards = gameInfo.numCards
    const numKings = gameInfo.numKings
    console.log(gameInfo.players)
    const player = gameInfo.players[gameInfo.playerIndex]
    console.log(gameInfo.playerIndex)
    console.log(player)
    

    // NOTE:下記の処理をgetServerSideProps関数のcontextでできること知り、そっちで実装。
    //      一応、useRouterの使い方を思い出すように残している。
    const router = useRouter()
    // console.log(router)
    const { num } = router.query


    useEffect(() => {

        return () => {
            gameInfo.setPlayerIndex(prev => UpdateToNextIndex(prev, gameInfo.players.length))
        }
    
    },[])

    return (
        <>
            <StatusDisplay numKings={numKings} numCards={numCards} player={player} />
            <Card path={card.image}/>
            <LinkButton path={`/game/diamond/${num}/description`} text='Description' />
        </>
    )

}

export default DiamondCard

// NOTE:自分解釈ではgetStaticPaths関数で、この階層にできるページ数を定義する(引数で返す)ことによってプリレンダリングを実現している。
export async function getStaticPaths() {
    const { cards } = await import('/data/cards.json')
    const diamondCards = cards.filter(card => card.mark == 'diamond')

    const allPaths = diamondCards.map(card => {
        return {
            params: {
                num: card.num.toString()
            },
        }            
    })
    // console.log(allPaths)

    return {
        paths: allPaths,
        fallback: false
    }
}


// NOTE:この関数は最後に記述してもコンポーネントの関数の前に実行される仕様になっている。
// NOTE:そして、この関数はクライアントのブラウザには送信されないので、クライアントに送信したくない、処理や情報も使うことができる。
// NOTE:サーバレンダリングの関数が記述されたコンポーネントはデプロイ時にレンダリングされる。
export async function getStaticProps(context) {
    // NOTE:外部の場合：const res = await fecth(<URL>)
    //                  const data = await res.json()

    // パラメータのnumを読み込み（オプショナルチェーン (?.)）
    const num = context?.params.num

    // cardのデータを読み込み
    const { cards } = await import('/data/cards.json')

    // クローバだけに絞り込み
    const diamondCards = cards.filter(card => card.mark == 'diamond')

    // パラメータの数字だけに絞り込み
    const card = diamondCards.find(card => card.num == num)

    // ページ内で使えるようにreturn
    return {
        props:{
            card: card
        }
    }
}
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { Card } from '@/components/Card/card';
import { StatusDisplay } from '@/components/StatusDisplay/StatusDisplay';
import { LinkButton } from '@/components/Button/linkButton/linkButton';
import { GameInfo } from '@/pages/_app';
import { UpdateToNextIndex } from 'helper/game';

// NOTE: Static Renderingの値（message）
const CrowbarCard = ({card}) => {

    // ゲーム情報を取得（コンテキスから）
    const gameInfo = useContext(GameInfo)

    const numCards = gameInfo.numCards
    const numKings = gameInfo.numKings
    console.log(gameInfo.players)
    const player = gameInfo.players[gameInfo.playerIndex]
    console.log(gameInfo.playerIndex)
    console.log(player)
    
    const router = useRouter()

    const { num } = router.query


    useEffect(() => {

        return () => {
            // 順番のプレイヤーを示すインデックスを次に順番の人のインデックスに変更
            gameInfo.setPlayerIndex(prev => UpdateToNextIndex(prev, gameInfo.players.length))
            
        }
    
    },[])

    return (
        <>
            <StatusDisplay numKings={numKings} numCards={numCards} player={player} />
            <Card path={card.image}/>
            <LinkButton path={`/game/crowbar/${num}/description`} text='Description' />
        </>
    )

}

export default CrowbarCard

// NOTE:自分解釈ではgetStaticPaths関数で、この階層にできるページ数を定義する(引数で返す)ことによってプリレンダリングを実現している。
export async function getStaticPaths() {
    const { cards } = await import('/data/cards.json')
    const crowbarCards = cards.filter(card => card.mark == 'crowbar')

    const allPaths = crowbarCards.map(card => {
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
    const crowbarCards = cards.filter(card => card.mark == 'crowbar')

    // パラメータの数字だけに絞り込み
    const card = crowbarCards.find(card => card.num == num)

    // ページ内で使えるようにreturn
    return {
        props:{
            card: card
        }
    }
}


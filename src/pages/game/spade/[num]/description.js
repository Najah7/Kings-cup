import { Description } from '@/components/Description/description';
import { GameInfo } from '@/pages/_app';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { getRandomNumWithIn } from 'helper/game';

// NOTE: Static Renderingの値（message）
const SpadeDescription = ({card}) => {

    const router = useRouter()

    const gameInfo = useContext(GameInfo)

    const num = router.query.num
    const mark = router.pathname.split('/')[2]


    const clickHandler = () => {

        // ローカルの値を取得
        const cardsJson = localStorage.getItem('cards');

        console.log(cardsJson)
        // ローカルの値をフォーマット
        let cards = JSON.parse(cardsJson)

        const maxIndex = cards.length - 1 
        const randomIndex = getRandomNumWithIn(maxIndex)

        console.log(randomIndex)
        
        const nextCardMark= cards[randomIndex].mark
        const nextCardNum = cards[randomIndex].num

        if(nextCardNum == 13 && nextCardMark !== 'joker') gameInfo.setNumKings(prev => prev + 1);
        
        var nextCardUrl = `/game/${nextCardMark}/${nextCardNum}/`

        gameInfo.setNumCards(cards.length - 1)

        router.push(nextCardUrl)
        
    }

    useEffect(() => {
        // ローカルの値を取得
        const cardsJson = localStorage.getItem('cards');
        // ローカルの値をフォーマット
        let cards = JSON.parse(cardsJson)

        // このページのトランプの情報を削除
        const card_index = cards.findIndex(card => card.mark == mark && card.num == num)
        cards.splice(card_index, 1)

        console.log(`number of cards : ${cards.length}`)


        // このページのカードだけを削除したカードデータををまたローカルに保存
        localStorage.setItem('cards', JSON.stringify(cards))

        // console.log(localStorage.getItem('cards'))
        
        return () => {
            if (gameInfo.numCards == 0) router.push('/game/over');
            if (gameInfo.numKings == 4) router.push('/game/over');
        }

    },[])

    return (
        <>
            <Description emoji={card['emoji']} description={card['description']} onClick={clickHandler} />
        </>
    )

}

export default SpadeDescription

export async function getStaticPaths() {
    const { cards } = await import('/data/cards.json')
    const spadeCards = cards.filter(card => card.mark == 'spade')

    const allPaths = spadeCards.map(card => {
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

// NOTE:この関数は最後に記述しても最初に実行される仕様になっている。
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
    const spadeCards = cards.filter(card => card.mark == 'spade')

    // パラメータの数字だけに絞り込み
    const card = spadeCards.find(card => card.num == num)

    // ページ内で使えるようにreturn
    return {
        props:{
            card: card
        }
    }
}
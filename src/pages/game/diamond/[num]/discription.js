import Image from 'next/image';
import { useRouter } from 'next/router';

// NOTE: Static Renderingの値（message）
const Game = ({cards}) => {
    const router = useRouter()

    console.log(router.query)

    const { num } = router.query

    const heartCards = cards.filter(card => card['type'] == 'heart')

    const card = heartCards[num - 1]

    console.log(heartCards[num -1])

    return (
        <>
        <h1>Discription Page</h1>
        <p>{card['discription']}</p>
        
        
        </>
    )

}

export default Game

// NOTE:この関数は最後に記述しても最初に実行される仕様になっている。
// NOTE:そして、この関数はクライアントのブラウザには送信されないので、クライアントに送信したくない、処理や情報も使うことができる。
// NOTE:サーバレンダリングの関数が記述されたコンポーネントはデプロイ時にレンダリングされる。
export async function getServerSideProps() {
    // NOTE:外部の場合：const res = await fecth(<URL>)
    //                  const data = await res.json()
    const { cards } = await import('/data/cards.json');
    console.log(cards);

    return {
        props:{
            cards: cards
        }
    }

}
import Image from 'next/image';
import { useRouter } from 'next/router';

// NOTE: Static Renderingの値（message）
const Game = ({cards}) => {
    

    const spadeCards = cards.filter(card => card['type'] == 'spade')

    console.log(spadeCards)

    return (
        <>
        <h1>Game Page</h1>
            {spadeCards.map(card => {
                return (
                    <>
                        <Image src={card['path']} width={100} height={100}></Image>
                        <p>type: {card['type']}</p>
                        <p>Number: {card['num']}</p>
                        <p>emoji: {card['emoji']}</p>
                    </>
                )
            })}
        
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
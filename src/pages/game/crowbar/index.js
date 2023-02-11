import Image from 'next/image';
import { useRouter } from 'next/router';

// NOTE: Static Renderingの値（message）
const Crowbar = ({cards}) => {
    
    return (
        <>
        <h1>Game Page</h1>
            {cards.map(card => {
                return (
                    <>
                        <Image src={card['image']} width={100} height={100}></Image>
                        <p>mark: {card['mark']}</p>
                        <p>Number: {card['num']}</p>
                        <p>emoji: {card['emoji']}</p>
                    </>
                )
            })}
        
        </>
    )

}

export default Crowbar

// NOTE:この関数は最後に記述しても最初に実行される仕様になっている。
// NOTE:そして、この関数はクライアントのブラウザには送信されないので、クライアントに送信したくない、処理や情報も使うことができる。
// NOTE:サーバレンダリングの関数が記述されたコンポーネントはデプロイ時にレンダリングされる。
export async function getStaticProps(context) {
    // NOTE:外部の場合：const res = await fecth(<URL>)
    //                  const data = await res.json()

    // cardのデータを読み込み
    const { cards } = await import('/data/cards.json')


    const crowbarCards = cards.filter(card => card['type'] == 'crowbar')


    // ページ内で使えるようにreturn
    return {
        props:{
            cards: crowbarCards
        }
    }
}

// export async function getStaticPaths() {
//     const { cards } = await import('/data/cards.json')
//     const crowbarCards = cards.filter(card => card.type == 'crowbar')

//     const allPaths = crowbarCards.map(card => {
//         return {
//             parames: {
//                 num: card.num.toString()
//             },
//         }            
//     })
//     console.log(allPaths)

//     return {
//         paths: allPaths,
//         fallback: false
//     }
// }
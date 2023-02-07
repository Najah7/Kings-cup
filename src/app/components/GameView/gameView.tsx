import { useEffect, useRef, useState } from "react";
import { NextButton } from "../Button/NextButton/nextButton";
import { Discription } from "../Discription/discription";
import { Game } from "../Game/game";
import {CARDS} from "./rules"
import styles from "./gameView.module.css"
import { Card } from "../Card/card";
import { StatusDisplay } from "../StatusDisplay/StatusDisplay";
import { TIMEOUT } from "dns";
import { Button } from "../Button/SimpleButton/button"


export default function GameView(props:any){

    const [cards, setCards] = useState(CARDS)

    const generateRandomNum = () => {
        const randomNum = Math.floor(Math.random() * cards.length)
        
        return randomNum
    }

    const players = props.players

    const [isGaming, setIsGaming] = useState(true)
    // const random = generateRandomNum()
    // HACK:どうしても最初のカードのバグが直せずに、応急処置として、初期値を2にした（２には意味はない、しかし、本来使いたい、ランダムな数字だとバグが発生する）
    const [randomNum, setRandomNum] = useState(2)
    // const [currentCard, setCurrentCard] = useState(cards[randomNum])
    const [numCards, setNumCards] = useState(54)
    const [numKings, setNumKings] = useState(0)
    const [playerNum, setPlayerNum] = useState(0)

    const RandomNumRef = useRef(randomNum)
    RandomNumRef.current = randomNum
    
    // useEffect(() => {
    //     const timerId = setTimeout(() => {
    //         setIsGaming(!isGamingRef.current)
    //     }, 2000)
    // })

    const delete_card = (num: number) => {
        setCards((prevState) => {
            prevState.splice(num, 1)
            return prevState
        })
    }
    
    const nextclickHandler = () => {
        
        if (numKings == 4){
            // 終了ページへ
        } 

        if (numCards == 0){
            // 終了ページへ
        }

        delete_card(randomNum)
        
        setRandomNum(generateRandomNum)
        setNumCards(prevState => prevState - 1)
        setIsGaming(prevState => !prevState)
    }

    const discriptionClickHandler = () =>{
        
        setIsGaming(prevState => !prevState)
        if(cards[randomNum]['num'] == 13) {
         
            setNumKings(prevState => prevState + 1);
        }
    }

    const cardClickHandler = () => {
        
    }

    
    

    // useEffect( () => {
    //     delete_card(randomNum)
    // }, [numCards])

    

    
    
    

    const getUrl = (cards:any) => {

        if (cards[RandomNumRef.current]['num'] == 0) return `/Cards/${cards[RandomNumRef.current]['type']}.png`

        return `/Cards/${cards[RandomNumRef.current]['type']}${cards[RandomNumRef.current]['num']}.png`

    }

    // {`/Cards/${cards[randomNum]['type']}${cards[randomNum]['num']}.png`}

    return (
        <>
            { isGaming?
            <>
                <StatusDisplay numKings={numKings} numCards={numCards}/>
                <p className={styles.text}>Tap to flip</p>
                <Card img_url={getUrl(cards)}/>
                <Button text='Discription' onClick={discriptionClickHandler}/>
            </>
            :
            <Discription emoji={cards[RandomNumRef.current]['img']} discription={cards[RandomNumRef.current]['rule-discription']} onClick={nextclickHandler}/>
            }
        </>
    )
}
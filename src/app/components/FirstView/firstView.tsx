import { Table } from "@mui/material"
import { StatusDisplay } from "../StatusDisplay/StatusDisplay"
import { Card } from "../Card/card"
import { StartButton } from "../StartButton/startButton"
import { King } from "../Kings/King/king"
import { CrowbarKing } from "../Kings/CrowbarKing/crowbarKing"
import { Container } from "@mui/system"
import styles from './firstView.module.css'
import { useState } from "react"
import { Discription } from "../Discription/discription"
import { PlayerInput } from "../PlayerInput/playerInput"
import { PlayerPage } from "../PlayerPage/playerPage"
import { DiamondKing } from "../Kings/DiamondKing/diamondKing"
import { HeartKing } from "../Kings/HeartKing/heartKing"
import { SpadeKing } from "../Kings/SpadeKing/spadeKing"

export const FirstView = () => {


    const [isFlyA, setIsFlyA] = useState(false)
    const [isFlyB, setIsFlyB] = useState(false)
    const [isFlyC, setIsFlyC] = useState(false)
    const [isFlyD, setIsFlyD] = useState(false)

    const flyInA = () => setIsFlyA((prevState) => !prevState)
    const flyInB = () => setIsFlyB((prevState) => !prevState)
    const flyInC = () => setIsFlyC((prevState) => !prevState)
    const flyInD = () => setIsFlyD((prevState) => !prevState)

    // window.setTimeout(flyInA, 1000)
    // window.setTimeout(flyInA, 2000)
    // window.setTimeout(flyInA, 3000)
    // window.setTimeout(flyInA, 4000)
    

    // window.clearTimeout(id);

    return (
        <>
        {/* <PlayerPage/> */}
        
        {/* <PlayerInput/> */}

        

        <div className={styles.container}>
            <div className={styles.posA}>
                <CrowbarKing isFlay={isFlyA}/>
            </div>
            <div className={styles.posB}>
                <DiamondKing isFlay={isFlyB}/>
            </div>
            <div className={styles.posC}>
                <HeartKing isFlay={isFlyC}/>
            </div>
            <div className={styles.posD}>
                <SpadeKing isFlay={isFlyD}/>
            </div> 
        </div>
        </>
    )
}
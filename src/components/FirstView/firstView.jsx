import { LinkButton, StartButton } from "../Button/linkButton/linkButton"
import { CrowbarKing } from "../Kings/CrowbarKing/crowbarKing"
import styles from './firstView.module.css'
import { useState } from "react"
import { DiamondKing } from "../Kings/DiamondKing/diamondKing"
import { HeartKing } from "../Kings/HeartKing/heartKing"
import { SpadeKing } from "../Kings/SpadeKing/spadeKing"

export const FirstView = () => {

    const [isFlyA, setIsFlyA] = useState(false)
    const [isFlyB, setIsFlyB] = useState(false)
    const [isFlyC, setIsFlyC] = useState(false)
    const [isFlyD, setIsFlyD] = useState(false)

    // const flyInA = () => setIsFlyA((prevState) => !prevState)
    // const flyInB = () => setIsFlyB((prevState) => !prevState)
    // const flyInC = () => setIsFlyC((prevState) => !prevState)
    // const flyInD = () => setIsFlyD((prevState) => !prevState)

    // window.setTimeout(flyInA, 1000)
    // window.setTimeout(flyInA, 2000)
    // window.setTimeout(flyInA, 3000)
    // window.setTimeout(flyInA, 4000)
    

    // window.clearTimeout(id);

    return (
        <div className={styles.wrapper}>
            <LinkButton text='Start' path='/players'/>
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
        </div>
    )
}
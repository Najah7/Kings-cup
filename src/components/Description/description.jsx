import { style } from '@mui/system'
import { NextButton } from '../Button/NextButton/nextButton'
import styles from './description.module.css'

export const Description = (props) => {

    return (
        <>
        <div className={styles.container}>
            <h3><span className={styles.emoji}>{props.emoji}</span><br/><span className={styles.description}>{props.description}</span></h3>
            <NextButton onClick={props.onClick}/>
        </div>
        </>
    )
}
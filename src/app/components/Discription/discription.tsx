import { style } from '@mui/system'
import styles from './discription.module.css'

export const Discription = (props: any) => {

    return (
        <>
        <div className={styles.container}>
            <h3><span className={styles.emoji}>{props.emoji}</span><br/><span className={styles.discription}>{props.discription}</span></h3>
            
        </div>
        </>
    )
}
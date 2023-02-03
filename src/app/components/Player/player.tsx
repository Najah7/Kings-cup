import styles from './player.module.css'

// エラーを消すためのany
export const Player = (props:any) => {

    return (
        <>
        <div className={styles.container}>
            <h2 className={styles.h2}>{props.name}</h2>
        </div>
        
        </>
    )
}
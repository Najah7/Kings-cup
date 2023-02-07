import styles from './Counter.module.css'

// HACK:名前

// エラーを非表示にするためのany型
export const Counter = (props:any) => {
    

    return (
        <>
        <div className={styles.container}>
        <h2 className={styles.h2}>{props.title}&nbsp;<span className={styles.num}>{props.num}</span></h2>
        </div>
        </>
    )
}
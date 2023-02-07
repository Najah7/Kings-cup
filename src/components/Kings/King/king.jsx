import Image from 'next/image'
import styles from './king.module.css'

export const King = (props) => {
    return (
        <>
            <div className={props.isFly?styles.fly:styles.card}>
                <div className={styles.inner}>
                    <Image
                    src={props.url}
                    alt='表面'
                    width={150}
                    height={300}
                    priority
                    className={styles.img}
                    />
                </div>
            </div>
        </>
    )
}
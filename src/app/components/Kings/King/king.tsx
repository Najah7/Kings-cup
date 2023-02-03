import Image from 'next/image'
import styles from './king.module.css'

export const King = (props: any) => {
    return (
        <>
            <div className={styles.card}>
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
import SelectInput from '@mui/material/Select/SelectInput'
import Image from 'next/image'
import { useState } from 'react'
import styles from './card.module.css'

export const Card = (props: any) => {

    const [isFront, setIsFront] = useState(false)

    const ClickHandler = () => setIsFront((prevState) => !prevState)



    return (
        <>
            <div className={props.isFly?styles.fly:styles.card}>
                <div className={styles.inner}>
                    {isFront?
                        <div className={styles.front}>
                        <Image
                        src="/test-card.png"
                        alt='表面'
                        width={150}
                        height={300}
                        priority
                        className={styles.img}
                        onClick={ClickHandler}
                        />
                        </div>
                    :
                        <div className={styles.back}>
                        <Image
                        src="/card-back.png"
                        alt='トランプ裏面'
                        width={150}
                        height={300}
                        priority
                        className={styles.img}
                        onClick={ClickHandler}
                        />
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
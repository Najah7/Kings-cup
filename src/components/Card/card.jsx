import SelectInput from '@mui/material/Select/SelectInput'
import Image from 'next/image'
import { useState } from 'react'
import styles from './card.module.css'

export const Card = (props) => {

    // const [isFront, setIsFront] = useState(false)

    // const ClickHandler = () => setIsFront((prevState) => !prevState)



    return (
        <>
            <div className={styles.card}>
                <div className={styles.inner}>
                    <div className={styles.front}>
                    <Image
                    src={props.img_url}
                    alt='表面'
                    width={150}
                    height={300}
                    priority
                    className={styles.img}
                    />
                    </div>
                </div>
            </div>
        </>
    )
}
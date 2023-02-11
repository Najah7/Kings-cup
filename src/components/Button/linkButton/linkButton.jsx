import Link from "next/link";
import { Button } from "../SimpleButton/button";
import styles from "./linkButton.module.css"

export function LinkButton(props){

    return (
        <>
            <Button  >
            <Link href={props.path} className={styles.link}>{props.text}</Link>
            </Button>
        </>
    )
}
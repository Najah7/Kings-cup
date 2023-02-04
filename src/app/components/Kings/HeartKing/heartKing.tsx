import { King } from "../King/king"

export const HeartKing = (props: any) => {

    return (
        <>
        <King url='/Cards/heart13.png' isFly={props.isFly}></King>
        </>
    )
}
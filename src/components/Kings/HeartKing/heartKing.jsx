import { King } from "../King/king"

export const HeartKing = (props) => {

    return (
        <>
        <King url='/Cards/heart13.png' isFly={props.isFly}></King>
        </>
    )
}
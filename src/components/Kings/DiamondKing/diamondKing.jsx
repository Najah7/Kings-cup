import { King } from "../King/king"

export const DiamondKing = (props) => {

    return (
        <>
        <King url='/Cards/diamond13.png' isFly={props.isFly}></King>
        </>
    )
}
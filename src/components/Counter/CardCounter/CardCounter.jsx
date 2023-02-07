import { Counter } from '../SimpleCounter/Counter'

export const CardCounter = (props) => {

    return (
        <>
        <Counter title='Cards' num={props.numCards}/>
        </>
    )
}
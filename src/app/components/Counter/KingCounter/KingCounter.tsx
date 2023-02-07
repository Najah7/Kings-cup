import { Counter } from '../SimpleCounter/Counter'

export const KingCounter = (props) => {

    return (
        <>
        <Counter title='Kings' num={props.numKings}/>
        </>
    )
}
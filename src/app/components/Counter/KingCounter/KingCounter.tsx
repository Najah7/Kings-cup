import { Counter } from '../SimpleCounter/Counter'

export const KingCounter = (props:any) => {

    return (
        <>
        <Counter title='Kings' num={props.numKings}/>
        </>
    )
}
import { Counter } from '../SimpleCounter/Counter'

export const CardCounter = (props: any) => {

    return (
        <>
        <Counter title='Cards' num={props.numCards}/>
        </>
    )
}
import { Button } from "../SimpleButton/button";

export function NextButton(props:any){

    return (
        <>
            <Button text='Next' onClick={props.onClick}/>
        </>
    )
}
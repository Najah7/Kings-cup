import { Button } from "../SimpleButton/button";

export function NextButton(props){

    return (
        <>
            <Button text='Next'  onClick={props.onClick}>
                start
            </Button>
        </>
    )
}
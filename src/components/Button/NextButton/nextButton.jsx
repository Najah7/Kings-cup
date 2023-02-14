import { Button } from "../SimpleButton/button";

export function NextButton(props){

    return (
        <>
            <Button  onClick={props.onClick}>
                Next
            </Button>
        </>
    )
}
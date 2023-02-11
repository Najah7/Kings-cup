import { Grid } from "@mui/material"
import { CardCounter } from "../Counter/CardCounter/CardCounter"
import { KingCounter } from "../Counter/KingCounter/KingCounter"
import { Player } from "../Player/player"


export const StatusDisplay = (props) => {

    return (
        <>
        <Grid container spacing={2}>
            <Grid xs={4}>
                <CardCounter numCards={props.numCards}/>
            </Grid>
            <Grid xs={4}>
                <Player name={props.player}/>
            </Grid>
            <Grid xs={4}>
                <KingCounter numKings={props.numKings}/>
            </Grid>
        </Grid>
        
        </>
    )
}
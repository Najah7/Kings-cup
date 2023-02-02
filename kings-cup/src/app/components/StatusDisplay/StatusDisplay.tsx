import { Grid } from "@mui/material"
import { CardCounter } from "../CardCounter/CardCounter"
import { KingCounter } from "../KingCounter/KingCounter"
import { Player } from "../Player/player"


export const StatusDisplay = () => {

    return (
        <>
        <Grid container spacing={2}>
            <Grid xs={4}>
                <CardCounter/>
            </Grid>
            <Grid xs={4}>
                <Player name='tuser'/>
            </Grid>
            <Grid xs={4}>
                <KingCounter/>
            </Grid>
        </Grid>
        
        </>
    )
}
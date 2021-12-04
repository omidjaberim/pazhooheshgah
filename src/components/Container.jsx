import { Grid } from "@mui/material"
const MyContainer = (prop)=>{
    const {children} = prop;
    return (
        <Grid style={{padding:'10px 94px 10px 24px'}} container direction="column" justifyContent="flex-start" alignItems="center" >
            {children}
        </Grid>
    )
}
export default MyContainer
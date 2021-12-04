import { Divider, Grid, Typography } from "@mui/material"
const BigCard = (prop)=>{
    const {children, title} = prop
    return(
        <Grid 
            item 
            container
            xs={12} 
            style={{
                background:'#fff',
                border:"1px solid #eaeaea",
                borderRadius : 5,
                padding : 25,
                boxShadow : "1px 1px #eaeaea",
                marginBottom: 24
            }} 
        >
       <Grid item xs={12}  >
           <Typography variant="h6"  >
               {title}
            </Typography>
            <Divider />
       </Grid>
       <Grid item xs={12}  >
            {children}
       </Grid>
    </Grid>   
    )
}
export default BigCard;
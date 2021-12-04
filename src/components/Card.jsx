import { Grid,Card, CardContent, Divider, Typography  } from "@mui/material";

const MyCard = (props)=>{
    const {icon,title,count} = props
    return (
        <Card>
            <CardContent 
            style={{
                padding:"10px 15px",
                display:"flex",
                alignItems:'center',
                flexDirection:'column',
                height:150,
                justifyContent:'space-around',
                width:200
                }} >
                <Typography variant="h5" component="div">
                    {title}
                    <Divider />
                </Typography>
                
                <Grid  container justifyContent="space-around" alignItems="center" >                    
                    {count}
                    {icon}
                </Grid>    
            </CardContent>
        </Card>
    )
}
export default MyCard
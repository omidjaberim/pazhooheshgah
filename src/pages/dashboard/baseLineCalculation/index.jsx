import LayOut from "pages/layOut/layout"
import MyContainer from "components/Container"
import BigCard from "components/BigCard"
import {Stack, Chip, Typography, Divider} from "@mui/material"
import PersianNumber from "components/PersianNumber"
import Tab from "components/Tabs"
const BaseLineCalculation = ()=>{
    return(
        <LayOut pageTitle="محاسبه‌ خط‌ مبنا" >
           <MyContainer>
                <BigCard title={"شاخص های محاسبه خط مبنا"} >
                <Stack style={{minHeight:120}} direction="row" spacing={1} justifyContent="space-around" alignItems="center" >
                    <Stack direction="row" spacing={1} alignItems="center" >
                        <Typography  >
                            دمای هوای امروز                         
                        </Typography>
                        <Chip label={<PersianNumber number={32+" سانتی‌گراد"} />} variant="filled" />
                    </Stack>    
                    <Stack direction="row" spacing={1} alignItems="center" >
                        <Typography>
                        رطوبت هوای امروز                        
                        </Typography>
                        <Chip label={<PersianNumber number={50+"%"} />} variant="filled" />
                    </Stack>    
                    <Stack direction="row" spacing={1} alignItems="center" >
                        <Typography>
                        وضعیت کلی هوا                       
                         </Typography>
                        <Chip label="آفتابی" variant="filled" />
                    </Stack>    
                    <Stack direction="row" spacing={1} alignItems="center" >
                        <Typography>
                        میزان تولید امروز                         
                        </Typography>
                        <Chip label={<PersianNumber number={675000 +" (kwh)"} /> } variant="filled" />
                    </Stack>    
                </Stack>  
                <Stack  >
                    <Typography variant="h6"  >
                       وزن شاخص‌ها (امروز)
                    </Typography>
                    <Divider />
                    <Stack style={{minHeight:120}} direction="row" spacing={1} justifyContent="space-around" alignItems="center" >
                        <Stack direction="row" spacing={1} alignItems="center" >
                            <Typography>
                            شاخص اول                      
                            </Typography>
                            <Chip label={<PersianNumber number={25} /> } variant="filled" />
                        </Stack>    
                        <Stack direction="row" spacing={1} alignItems="center" >
                            <Typography>
                            شاخص دوم                      
                            </Typography>
                            <Chip label={<PersianNumber number={225} /> } variant="filled" />
                        </Stack>    
                        <Stack direction="row" spacing={1} alignItems="center" >
                            <Typography>
                            شاخص سوم                      
                            </Typography>
                            <Chip label={<PersianNumber number={325} /> } variant="filled" />
                        </Stack>    
                        <Stack direction="row" spacing={1} alignItems="center" >
                            <Typography>
                            شاخص چهارم                      
                            </Typography>
                            <Chip label={<PersianNumber number={125} /> } variant="filled" />
                        </Stack>    
                        <Stack direction="row" spacing={1} alignItems="center" >
                            <Typography>
                            شاخص پنجم                      
                            </Typography>
                            <Chip label={<PersianNumber number={98} /> } variant="filled" />
                        </Stack>    
                    </Stack>    
                </Stack>  
                <Stack direction="row"  justifyContent="center" >               
                    <Typography variant="h6" color="error"   >                    
                    توجه شود که خط مبنای نشان داده شده تقریبی از خط مبناست.
                    <Divider />
                    </Typography>
                    
                </Stack>                    
                </BigCard>  
                <BigCard title="محاسبه خط مبنا" >
                    <Tab  />
                </BigCard> 
           </MyContainer>
        </LayOut>
    )
}
export default BaseLineCalculation
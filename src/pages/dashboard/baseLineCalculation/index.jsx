import React from "react"
import LayOut from "pages/layOut/layout"
import MyContainer from "components/Container"
import BigCard from "components/BigCard"
import {Stack, Chip, Typography, Divider} from "@mui/material"
import PersianNumber from "components/PersianNumber"
import Tab,{TabPanel} from "components/Tabs"
import Chart from 'chart.js/auto';
import { useEffect } from "react";
import Table from "components/Table"
const BaseLineCalculation = ()=>{
    const [value, setValue] = React.useState(0); 
    const tableCols = [
            {txt:'شماره',field :'no'},
            {txt:'منطقه',field :'district'},
            {txt:'نوع حادثه	',field :'type'},
            {txt:'از تاریخ',field :'fromDate'},
            {txt:'تا تاریخ',field :'toDate'},
     ]
    const tableRows = [
        {
            no : 1,
            district : 'منطقه سه',
            type:'خرابی شبکه توزیع محلی',
            fromDate : 'یکشنبه 12 بهمن 1399 9:32',
            toDate : 'یکشنبه 12 بهمن 1399 10:22'
        },
        {
            no : 2,
            district : 'منطقه دو',
            type:'خرابی شبکه توزیع محلی',
            fromDate : 'یکشنبه 26 بهمن 1399 9:32',
            toDate : 'یکشنبه 26 بهمن 1399 10:22'
        },
        {
            no : 3,
            district : 'منطقه چهار',
            type:'خرابی سیم ها',
            fromDate : 'چهارشنبه 26 بهمن 1399 9:32',
            toDate : 'چهارشنبه 26 بهمن 1399 10:22'
        },
      ];
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };   
      useEffect(()=>{        
        const ctxd = document.getElementById('daily');
        const ctxm = document.getElementById('monthly');
        const ctxy = document.getElementById('yearly');
        if(value === 0){
        const dailyChart = new Chart(ctxd, {
            type: 'line',
            data : {
                labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14',
                '15','16','17','18','19','20','21','22','23','24'],
                datasets: [{
                label: 'خط مبنا',
                data: [465, 559, 680, 581, 426, 655, 540,465, 559, 680, 581, 426, 655, 540,
                    465, 559, 680, 581, 426, 655, 540,465, 559, 680, 581, 426, 655, 540
                    
                    ],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                },
                {
                    label: 'امروز',
                    data: [425, 459, 580, 481, 526, 555, 640,665, 459, 680, 681, 526, 655, 640,
                    565, 459, 480, 681, 526, 555, 640,565, 659, 580, 681, 456, 635, 340                  
                    ],
                    fill: true,
                    borderColor: 'gray',
                }]
            },
            options: {
                aspectRatio:4,
                scales: {
                    y: { // defining min and max so hiding the dataset does not change scale range
                    min: 400,
                    max: 700
                    }
                },
                animations: {
                    tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: false
                    }
                },
            }
        });
        return ()=>dailyChart.destroy();  
    }
       else if(value === 1){
           const monthlyChart = new Chart(ctxm, {
            type: 'line',
            data : {
                labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14',
                '15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
                datasets: [{
                label: 'خط مبنا',
                data: [465, 559, 680, 581, 426, 655, 540,465, 559, 680, 581, 426, 655, 540,
                    465, 559, 680, 581, 426, 655, 540,465, 559, 680, 581, 426, 655, 540,
                    655, 540,465, 559, 680, 581, 426
                    ],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                },
                {
                    label: 'این ماه',
                    data: [425, 459, 580, 481, 526, 555, 640,665, 459, 680, 681, 526, 655, 640,
                    565, 459, 480, 681, 526, 555, 640,565, 659, 580, 681, 456, 635, 340
                    , 555, 640,565, 659, 580, 681, 526                 
                    ],
                    fill: true,
                    borderColor: '#eaeaea',
                }]
            },
            options: {
                aspectRatio:4,
                scales: {
                    y: { // defining min and max so hiding the dataset does not change scale range
                    min: 400,
                    max: 700
                    }
                },
                animations: {
                    tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: false
                    }
                },
            }
        });
        return ()=>{monthlyChart.destroy()  }
    }
    else if(value === 2){
        const yearlyChart = new Chart(ctxy, {
            type: 'line',
            data : {
                labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12'],
                datasets: [{
                label: 'خط مبنا',
                data: [465, 559, 680, 581, 426, 655, 540,465, 559, 680, 581, 426 ],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                },
                {
                    label: 'امسال',
                    data: [ 580, 481, 526, 555, 640,665, 459, 680, 681, 526, 655, 640],
                    fill: true,
                    borderColor: 'silver',
                }]
            },
            options: {
                aspectRatio:4,
                scales: {
                    y: { // defining min and max so hiding the dataset does not change scale range
                    min: 400,
                    max: 700
                    }
                },
                animations: {
                    tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: false
                    }
                },
            }
        });
        return ()=>{yearlyChart.destroy()  }
    }
       
    },[value]) 

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
                    <Tab value={value}  handleChange={handleChange}>
                        <TabPanel value={value} index={0}>
                            <canvas style={{marginTop:50}} id="daily" width="500" height="400"></canvas>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <canvas style={{marginTop:50}} id="monthly" width="500" height="400"></canvas>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <canvas style={{marginTop:50}} id="yearly" width="500" height="400"></canvas>
                        </TabPanel>
                    </Tab>
                </BigCard> 
                <BigCard title="حوادث" >                    
                    <Table  rows={tableRows} cols={tableCols} />
                </BigCard>
           </MyContainer>
        </LayOut>
    )
}
export default BaseLineCalculation
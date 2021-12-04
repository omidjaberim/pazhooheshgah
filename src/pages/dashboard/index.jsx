import LayOut from "pages/layOut/layout"
import Chart from 'chart.js/auto';
import { useEffect } from "react";
import { Grid, Typography} from "@mui/material";
import Card from "components/Card"
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Battery from '@mui/icons-material/BatteryCharging90';
import PersianNumber from "components/PersianNumber";
const Dashboard = ()=>{
    useEffect(()=>{        
        const ctx = document.getElementById('myChart');
        const myChart = new Chart(ctx, {
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
        return ()=>myChart.destroy()  
    },[]) 
    return(
        <LayOut pageTitle="گزارش تجمیعی">
            <Grid container justifyContent="space-around" alignItems="center" >
                <Card 
                    title="حوادث شبکه" 
                    count={<Typography variant="h6" component="span" color="error" >
                        <PersianNumber number={912}  /> 
                        </Typography>}
                    icon={<AccessAlarmsIcon color="error"  />} 
                />
                <Card 
                    title="خط مبنا" 
                    count={<Typography variant="h6" component="span" color="#0288D1" ><PersianNumber number={869}  /> </Typography>}
                    icon={<ShowChartIcon color="info"  />} />
                <Card 
                    title="مصرف" 
                    count={<Typography variant="h6" component="span" color="green" >
                        <PersianNumber number={659}  /> 
                    </Typography>}
                    icon={<Battery color="success"  />} 
                    />
            </Grid>
            <canvas style={{marginTop:50}} id="myChart" width="500" height="400"></canvas>
        </LayOut>
    )
}
export default Dashboard
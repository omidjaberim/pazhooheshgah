import LayOut from "pages/layOut/layout"
import { useEffect } from "react";
import Chart from 'chart.js/auto';
import MyContainer from "components/Container" 
import BigCard from "components/BigCard" 
import Table from "components/Table"
const ExpenseRate = ()=>{
    useEffect(()=>{        
        const ctx = document.getElementById('myChart');
        const myChart = new Chart(ctx, {
            type: 'line',
            data : {
                labels: ['1', '2', '3', '4', '5', '6', '7'],
                datasets: [{
                label: 'میزان مصرف ',
                data: [465, 559, 680, 1181, 826, 955,1136],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                },
                ]
            },
            options: {
                aspectRatio:4,
                scales: {
                    y: { // defining min and max so hiding the dataset does not change scale range
                    min: 200,
                    max: 1200
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
    const tableCols = [
        {txt:'شماره',field :'no'},
        {txt:'میزان مصرف(به kwh )',field :'expense'},
        {txt:'از تاریخ',field :'fromDate'},
        {txt:'تا تاریخ',field :'toDate'},
    ]
    const tableRows = [
        {
            no : 1,
            expense : '5500',
            fromDate : 'یکشنبه 12 بهمن 1399 9:32',
            toDate : 'یکشنبه 12 بهمن 1399 10:22'
        },
        {
            no : 2,
            expense : '8000',
            fromDate : 'چهارشنبه 12 بهمن 1399 9:32',
            toDate : 'چهارشنبه 12 بهمن 1399 10:22'
        },
    ]
    return (
        <LayOut pageTitle="میزان مصرف">
            <MyContainer>
                <BigCard title={"نمودار میزان مصرف"} >
                    <canvas style={{marginTop:50}} id="myChart" width="500" height="400"></canvas>
                </BigCard>
                <BigCard title={"میزان مصرف"} >
                    <Table  rows={tableRows} cols={tableCols} />
                </BigCard>
            </MyContainer>
        </LayOut>
    )
}
export default ExpenseRate
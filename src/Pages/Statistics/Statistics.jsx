import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {  useEffect, useState } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);
const Statistics = () => {
   
   
const DonatedPrice = JSON.parse(localStorage.getItem('card'))
   
            const item = DonatedPrice.length
        const totaldonations = 12
        console.log(item)
        const percentage = ((item / totaldonations) * 100).toFixed(2);
    
    const data = {
        labels: ['Red', 'green'],
        datasets: [
          {
            label: '% of Donation',
            data: [percentage, 100 - percentage],
            backgroundColor: [
                '#00C49F',   '#FF444A' 
            ],
              borderWidth: 1,
             
            },
          ],
          };
         
 
   
     
    
 
    return (
        <div className='max-w-screen-lg m-auto'>
         
            <div className='w-[500px] m-auto mt-10'>
           <Pie data={data}></Pie> 
             </div> 
        
        
        
         </div>
    );
};

export default Statistics;
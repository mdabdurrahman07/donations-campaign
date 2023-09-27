import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useState  , useEffect} from 'react';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const Statistics = () => {
 
   const [values , setvalues ] = useState([{}])
   const [NOData , SetNOData] = useState(false)
     useEffect(()=>{
      const DonatedPrice = JSON.parse(localStorage.getItem('card'))
      if(DonatedPrice){
        const item = DonatedPrice.length
        setvalues(item)
      }else{
        SetNOData("No Data Currently Available Please Donate to See The Statistics")
      }
     },[])
        const totaldonations = 12
      
        const percentage = ((values / totaldonations) * 100).toFixed(2) ;
    
    const data = {
        labels: ['Red', 'green'],
        datasets: [
          {
            label: 'you have  Donated %',
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
       
         
       {
          NOData ? <p className="font-semibold text-2xl text-center mt-10">{NOData}</p> : 
        
          <div className='w-[500px] m-auto mt-10'> <Pie data={data}></Pie> </div>
       }
         </div>
    );
};

export default Statistics;
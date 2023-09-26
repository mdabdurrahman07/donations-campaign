import { useEffect, useState } from "react";
import DonationsCards from "../DonationsCards/DonationsCards";


const Donations = () => {
  const [doante , setdonate] = useState([])
  const [nodata , setnodata] = useState(false)
  const [datalength , setdatalength] = useState(4)
  
  useEffect(()=>{
    const DonatedPrice = JSON.parse(localStorage.getItem('card'))
   
      if(DonatedPrice){
        setdonate(DonatedPrice)
      }
      else{
        setnodata("You Haven’t Made Any  Donations Yet")
      }
   
    
  },[])
    return (
        <div className="max-w-screen-xl m-auto mt-8">
         {
          nodata ? <p className="font-semibold text-2xl text-center mt-10">{nodata}</p> : <div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6">
                {
                doante.slice(0 , datalength).map(items => <DonationsCards key={items.id} items={items} ></DonationsCards>)
                }
              </div>

            <div className={datalength === doante.length && 'hidden'}>
            <div className="flex justify-center items-center mt-5">
                <button onClick={()=> setdatalength(doante.length)} className="px-7 py-4 bg-[#009444] font-semibold text-lg text-white rounded-xl mb-5">See All</button>
                </div>
            </div>
          </div>
         
         }
        </div>
    );
};

export default Donations;
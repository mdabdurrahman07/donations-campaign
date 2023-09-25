import { useEffect, useState } from "react";
import DonationsCards from "../DonationsCards/DonationsCards";


const Donations = () => {
  const [doante , setdonate] = useState([])
  const [nodata , setnodata] = useState(false)
  
  useEffect(()=>{
    const DonatedPrice = JSON.parse(localStorage.getItem('card'))
   
      if(DonatedPrice){
        setdonate(DonatedPrice)
      }
      else{
        setnodata("You Have Nothing Donate Yet")
      }
   
    
  },[])
    return (
        <div className="max-w-screen-xl m-auto mt-8">
         {
          nodata ? <p className="font-semibold text-2xl text-center mt-10">{nodata}</p> : <div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6">
                {
                doante.map(items => <DonationsCards key={items.id} items={items} ></DonationsCards>)
                }
              </div>
          </div>
         }
        </div>
    );
};

export default Donations;
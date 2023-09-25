import { useEffect, useState } from "react";
import DonationsCards from "../DonationsCards/DonationsCards";


const Donations = () => {
  const [doante , setdonate] = useState([])
  
  useEffect(()=>{
    const DonatedPrice = JSON.parse(localStorage.getItem('card'))
   
      setdonate(DonatedPrice)
   
    
  },[])
    return (
        <div className="max-w-screen-xl m-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
                {
                doante.map(items => <DonationsCards key={items.id} items={items} ></DonationsCards>)
                }
              </div>
        </div>
    );
};

export default Donations;
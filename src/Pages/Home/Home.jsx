import { useEffect, useState } from "react";
import AllDonationsCategories from "../../Components/AllDonationsCategories/AllDonationsCategories";
import Banner from "../../Components/Banner/Banner"

const Home = () => {
    const [donationdata, setdonationdata] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setdonationdata(data))

    },[])
    return (
        <div className="max-w-screen-xl m-auto">
                <div>
                    <Banner></Banner>
                </div>
            
           <div className="grid grid-cols-4 justify-center items-center gap-5 mt-96">
            {
                donationdata.map(Elements => <AllDonationsCategories key={Elements.id} Elements={Elements} ></AllDonationsCategories>)
            }
           </div>
        </div>
    );
};

export default Home;
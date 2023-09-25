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
            
           <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10 mt-96 ml-14 md:ml-10 lg:ml-0">
            {
                donationdata.map(Elements => <AllDonationsCategories key={Elements.id} Elements={Elements} ></AllDonationsCategories>)
            }
           </div>
        </div>
    );
};

export default Home;
/* eslint-disable react/prop-types */
import swal from 'sweetalert';
const CardDetails = ({allCards}) => {
  const handleDonatedePrice= () =>{
        const storeDonatedPrice = []
        const DonatedPrice = JSON.parse(localStorage.getItem('card'))
        if(!DonatedPrice){
          storeDonatedPrice.push(allCards)
          localStorage.setItem('card', JSON.stringify(storeDonatedPrice))
          swal("Donation Added", "Thank you, for your donation", "success");
        }
        else{
         
          
            storeDonatedPrice.push(...DonatedPrice, allCards)
          localStorage.setItem('card', JSON.stringify(storeDonatedPrice))
          swal("Donation Added", "Thank you, for your donation", "success");
          
        }
  }

  
  
    return (
        <div className="max-w-screen-xl m-auto mt-10">
        <div>
          <img className="w-[1000px] m-auto block"  src={allCards?.Picture?.normal_pic} alt="pictures" />
        <div className="btn-container ml-0 lg:ml-[140px] -mt-20">
        <button className="px-6 py-4 rounded-md" onClick={handleDonatedePrice} style={{backgroundColor:allCards?.Text_and_button_bg?.bg_color, color:allCards?.Text_and_button_bg?.text_color }}>Donate {allCards.Price}</button>
        </div>
          <h1 className="font-bold text-4xl ml-0 lg:ml-36 mt-10 p-2">{allCards.Category}</h1>
          <p className="text-justify text-xl ml-0 lg:ml-36 my-5 p-2">{allCards.Description}</p>
          </div>  
        </div>
    );
};

export default CardDetails;
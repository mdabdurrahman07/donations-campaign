/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DonationsCards = ({items}) => {
    const {id, Picture , Category , Title , Price , Category_bg, Text_and_button_bg, Card_bg} = items
    return (
        <div className="mb-5">
           <div className="card card-side  drop-shadow-lg" style={{backgroundColor: Card_bg }}>
  <figure><img className="pl-5" src={Picture.rectangle_pic} alt="pic"/></figure>
  <div className="card-body space-y-4">
  <h2 className="w-24 text-center p-2 font-medium text-base"style={{backgroundColor: Category_bg, color:Text_and_button_bg.bg_color}} >{Category}</h2>
    <p className="font-semibold text-2xl">{Title}</p>
    <p className="font-semibold text-lg" style={{color:Text_and_button_bg.bg_color}}>{Price}</p>
    <div className="card-actions justify-start">
     <Link to={`/cards/${id}`}><button className="px-4 py-2 font-semibold text-lg rounded-md" style={{backgroundColor: Text_and_button_bg.bg_color , color:Text_and_button_bg.text_color}}>View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default DonationsCards;
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AllDonationsCategories = ({Elements}) => {
    const {id, Picture, Title, Category, Card_bg,Category_bg, Text_and_button_bg} = Elements 
   
    return (
        <div>
            <Link to={`/cards/${id}`}>
                        <div className="card card-compact w-80 h-72  shadow-xl" style={{backgroundColor: Card_bg}}>
            <figure><img className="h-[194px]" src={Picture.normal_pic} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="w-24 text-center p-2 font-medium text-base"style={{backgroundColor: Category_bg, color:Text_and_button_bg.bg_color}} >{Category}</h2>
                <p className="font-bold text-xl" style={{color:Text_and_button_bg.bg_color}} >{Title}</p>
               
            </div>
            </div>
            </Link>
        </div>
    );
};

export default AllDonationsCategories;
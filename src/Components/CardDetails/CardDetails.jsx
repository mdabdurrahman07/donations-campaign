/* eslint-disable react/prop-types */
const CardDetails = ({allCards}) => {
  console.log(allCards)
  
    return (
        <div className="max-w-screen-xl m-auto mt-10">
        <div>
          <img className="w-[800px] m-auto"  src={allCards?.Picture?.normal_pic} alt="pictures" />
          <h1>{allCards.Category}</h1>
          </div>  
        </div>
    );
};

export default CardDetails;
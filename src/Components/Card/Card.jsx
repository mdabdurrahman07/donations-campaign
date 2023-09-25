import  { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardDetails from '../CardDetails/CardDetails';


const Card = () => {
    const [allCards , setallCards] = useState({})
    const CardData = useLoaderData()
    const  {id} =  useParams()
    
     useEffect(()=>{
        const AllDataOfCard = CardData.find(result => result.id === id)
        setallCards(AllDataOfCard)
     },[CardData, id])

    
    return (
        <div>
         <CardDetails allCards={allCards} ></CardDetails>
        </div>
    );
};

export default Card;
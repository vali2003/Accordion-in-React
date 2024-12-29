import { useEffect, useState } from "react";
import faq from "../API/faq.json";
import { FAQ } from "./UI/FAQ";

export const Accordion = () => {
    const [data, setData] = useState([]);
    const [ActiveId, setActiveId] = useState(null);
    useEffect(() => {
     setData(faq);
    },[])
    const handleButton = (id) => {

        setActiveId((prevId)=> (prevId === id ? null : id));
    };
    return(

        <>
        
        <h1>The Accordion</h1>
         <ul className="section-accordion">
                  {
                    data.map((curData)=> {
                       return( 
                    <FAQ key={curData.id} 
                    curData={curData} 
                    isActive = {ActiveId === curData.id} 
                    onToggle={() => handleButton(curData.id)}/>

                       )
                    })
                  }
         </ul>
        </>

    )
}
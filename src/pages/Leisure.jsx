import axios from "axios";
import { useEffect, useState } from "react"

import SportEventCard from '../components/EventShow/EventCard'
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
const Leisures =  ()=>{
const [data,setData] = useState();
    useEffect(()=>{

        const getLeisures = async () => {
            try {
              const response = await axios.get('http://localhost:5000/api/loisirevent/all',
             );
        
              // Handle the response from the backend here...
            setData(response.data)
              console.log(response.data);
            } catch (error) {
              console.error(error);
            }
          };
            getLeisures();
    },[])
     
    
    return <section className="space-y-5">
        <div className="flex justify-between">
            <h1 className="text-4xl" >Leisures</h1>
            <Link to="/leisure/add"><Button>Ajouter un Eévénement sport</Button></Link>
        </div>
    {
        
        data?.map((event,idx)=>{
            return <SportEventCard event={event} key={idx}/>
        })
    }
    </section>
}

export default Leisures
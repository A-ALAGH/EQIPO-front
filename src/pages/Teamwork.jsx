import axios from "axios";
import { useEffect, useState } from "react"

import SportEventCard from '../components/EventShow/EventCard'
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
const Teamworks =  ()=>{
const [data,setData] = useState();
    useEffect(()=>{

        const getTeamworks = async () => {
            try {
              const response = await axios.get('http://localhost:5000/api/teamwork/all',
             );
        
              // Handle the response from the backend here...
            setData(response.data)
              console.log(response.data);
            } catch (error) {
              console.error(error);
            }
          };
            getTeamworks();
    },[])
     
    
    return <section className="space-y-5">
        <div className="flex justify-between">
            <h1 className="text-4xl" >Teamworks</h1>
            <Link to="/teamwork/add"><Button>Ajouter un Eévénement teamwork</Button></Link>
        </div>
    {
        
        data?.map((event,idx)=>{
            return <SportEventCard event={event} key={idx}/>
        })
    }
    </section>
}

export default Teamworks
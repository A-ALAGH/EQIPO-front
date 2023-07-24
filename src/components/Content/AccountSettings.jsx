import { useEffect, useState } from 'react';
import { Button, FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react';
import axios from 'axios';
import cities from '../../assets/Wilayas.json';
import useUserId from '../hooks/useUserId';

function AccountSettings() {
  const [userData, setUserData] = useState({
    pseudo: '',
    email: '',
    phoneNumber: '',
    city: '',
    bio:""
  });

  const [refetch, setRefetch] = useState(false);
  const {user} = useUserId()
  useEffect(() => {
    // const userId = localStorage.getItem('user');
   
      axios.get(`http://localhost:5000/api/user/${user}`)
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données utilisateur:', error);
        });
 
  }, [refetch]);

  const handlesubmit= async()=>{
    try {
      const response = await axios.put(`http://localhost:5000/api/user/${user}`, userData);

      // Traitez la réponse du backend ici...

      console.log(response.data);
      setRefetch(!refetch)

    } catch (error) {
      console.error(error);
    }

  }
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
    
      <FormControl id="firstName">
        <FormLabel>Pseudo</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder="AbbasALAGH"
          value={userData.pseudo}
          onChange={(e)=>  setUserData((prev)=>({...prev, pseudo: e.target.value}))  }
          
        />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="(+213)551-33-10-92"
          value={userData.phoneNumber}
          onChange={(e)=>  setUserData((prev)=>({...prev, phoneNumber: e.target.value}))  }

          
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="abbas@abbas.com"
          value={userData.email}
          onChange={(e)=>  setUserData((prev)=>({...prev, email: e.target.value}))  }

          
        />
      </FormControl>
      <FormControl id="city">
        <FormLabel>City</FormLabel>
        <Select
          focusBorderColor="brand.blue"
          placeholder="Select city"
          value={userData.city ? userData.city : ''}
          onChange={(e)=>  setUserData((prev)=>({...prev, city: e.target.value}))  }
          
        >
          {cities.map(city => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </Select>
      </FormControl>
      
      <FormControl id="bio">
        <FormLabel>Bio</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder="deffender, ..."
          value={userData.bio}
          onChange={(e)=>  setUserData((prev)=>({...prev, bio: e.target.value}))  }

          
        />
      </FormControl>
      <Button onClick={handlesubmit}>update</Button>
     
    </Grid>
  );
}

export default AccountSettings;

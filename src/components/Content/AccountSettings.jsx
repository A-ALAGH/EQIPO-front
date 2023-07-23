import { useEffect, useState } from 'react';
import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react';
import axios from 'axios';
import cities from '../../assets/Wilayas.json';

function AccountSettings() {
  const [userData, setUserData] = useState({
    pseudo: '',
    email: '',
    phoneNumber: '',
    city: ''
  });

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      axios.get(`http://localhost:5000/api/user/${userId}`)
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données utilisateur:', error);
        });
    }
  }, []);

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
          readOnly
        />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="(+213)551-33-10-92"
          value={userData.phoneNumber}
          readOnly
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="abbas@abbas.com"
          value={userData.email}
          readOnly
        />
      </FormControl>
      <FormControl id="city">
        <FormLabel>City</FormLabel>
        <Select
          focusBorderColor="brand.blue"
          placeholder="Select city"
          value={userData.city ? userData.city : ''}
          readOnly
        >
          {cities.map(city => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}

export default AccountSettings;

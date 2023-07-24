import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';
import useUserId from '../hooks/useUserId';
import { useNavigate } from 'react-router-dom';


export default function CreateSportEvent() {


    const {user,token} = useUserId()
    const navigate= useNavigate()
    const [date, setDate] = useState('');
    const [heure, setHeure] = useState('');
    const [lieu, setLieu] = useState('');
    const [activité, setActivité] = useState('');
    const [nombre_places_disponibles, setNombrePlacesDisponibles] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:5000/api/sportevent/create', {
          date,
          heure,
          lieu,
          nombre_places_disponibles,
          activité
        },
        {
            headers:{
                Authorization : `Bearer ${token}`
            }
        });
  
        // Handle the response from the backend here...
  navigate('/')
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
  return (
    <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align="center" justify="center">

      <form onSubmit={handleSubmit}>
        <Stack spacing={4} w="full" maxW="md">
          <Heading fontSize="2xl">Create a Sport Event</Heading>
          <FormControl id="activité">
            <FormLabel>Activité</FormLabel>
            <Input type="text" value={activité} onChange={(e) => setActivité(e.target.value)} />
          </FormControl>
          <FormControl id="date">
            <FormLabel>Date</FormLabel>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </FormControl>
          <FormControl id="heure">
            <FormLabel>Heure</FormLabel>
            <Input type="time" value={heure} onChange={(e) => setHeure(e.target.value)} />
          </FormControl>
          <FormControl id="lieu">
            <FormLabel>Lieu</FormLabel>
            <Input type="text" value={lieu} onChange={(e) => setLieu(e.target.value)} />
          </FormControl>
          <FormControl id="nombre_places_disponibles">
            <FormLabel>Nombre de places disponibles</FormLabel>
            <Input type="number" value={nombre_places_disponibles} onChange={(e) => setNombrePlacesDisponibles(e.target.value)} />
          </FormControl>
          <Button colorScheme="blue" variant="solid" type="submit">
            Create Event
          </Button>
        </Stack>
      </form>      </Flex>
      <Flex flex={1}>
        <Image
          alt="Login Image"
        //   objectFit="cover"
          src="../../img/sportbg.png"
        />
      </Flex>
    </Stack>
  );
}

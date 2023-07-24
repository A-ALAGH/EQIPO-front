import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Flex,
} from '@chakra-ui/react';
import useUserId from '../hooks/useUserId';
import axios from 'axios';

const EventShow = ({ event }) => {
  const userId = localStorage.user;

  const participer = async()=>{
    const {user} = useUserId()
    try{
     const response =  await axios.post('http://localhost:5000/api/demandes/create', {
  user, event:event._id})
  console.log(response.data)
}catch(error){
console.log("error",error)
}
    }

  
  const suppimer = async () => {
    
    try{
     const response =  await axios.delete(`http://localhost:5000/api/demandes/${event._id}`)
  console.log(response.data)
}catch(error){
console.log("error",error)
}

  }
  return (
    <Card 
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      width='100%'
    >
      <Image
        // objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src='/public/img/logo.png'
        alt='logo'
        m={6} // Add a margin of 6px to the Image
      />

      <Flex
        width='100%'
        flexDirection={{ base: 'column', sm: 'row-reverse' }}
      >
        <CardBody m={6}> {/* Add a margin of 6px to the CardBody */}
          <Heading size='md'>{event.activité}</Heading>

          <Text py='2'>{event.date.slice(0, 10)} {event.heure}</Text>
          <Text py='2'>{event.lieu}</Text>
          <Text py='2'>{event?.organisateur?.phoneNumber}</Text>
        </CardBody>

        <CardFooter flexDirection='column' m={6} className='gap-5'> {/* Add a margin of 6px to the CardFooter */}
          <Button variant='solid' colorScheme='blue' onClick={participer}>
            Participer
          </Button>

          {event?.organisateur?._id === userId ? (
            <Button variant='solid' colorScheme='red' onClick={suppimer}>
              Delete
            </Button>
          ) : (
            <></>
          )}
        </CardFooter>
      </Flex>
    </Card>
  );
};

export default EventShow;

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


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {
        email,
        password,
      });

      // Traitez la réponse du backend ici...

      console.log(response.data);
      localStorage.token = response.data.token
      localStorage.user = response.data.user._id
      window.location.href = "http://localhost:5173/";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align="center" justify="center">
        <form onSubmit={handleSubmit}>
          <Stack spacing={4} w="full" maxW="md">
            <Heading fontSize="2xl">Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={6}>
              <Stack direction={{ base: 'column', sm: 'row' }} align="start" justify="space-between">
             
                <Link href='/register' color="blue.500">Not member?</Link>
              </Stack>
              <Button colorScheme="blue" variant="solid" type="submit">
                Sign in
              </Button>
            </Stack>
          </Stack>
        </form>
      </Flex>
      <Flex flex={1}>
        <Image
          alt="Login Image"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
        />
      </Flex>
    </Stack>
  );
}

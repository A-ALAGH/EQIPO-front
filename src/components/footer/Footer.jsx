import React from 'react';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Logo from '../logo/Logo'
import ToggleColorMode from '../toggleColorMode/toggleColorMode';
import {Link} from "react-router-dom"


// const Logo = (props) => {
//   return (
//     <svg height="32" viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" {...props}>
//       {/* Logo content */}
//     </svg>
//   );
// };

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
        
      <Container as={Stack} maxW="6xl" py={4} spacing={4} justify="center" align="center">
      <ToggleColorMode />
        <Logo/>
        <Stack direction="row" spacing={6}>
        <Link to="/">Home</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/leisure">Loisirs</Link>
        <Link to="/teamwork">Travail De Groupe</Link>
        </Stack>
      </Container>
      <Box borderTopWidth={1} borderStyle="solid" borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW="6xl"
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>&copy; 2023 Fabrikademy. All rights reserved</Text>
          <Stack direction="row" spacing={6}>
            <SocialButton label="Twitter" href="#">
              <FaTwitter />
            </SocialButton>
            <SocialButton label="YouTube" href="#">
              <FaYoutube />
            </SocialButton>
            <SocialButton label="Instagram" href="#">
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

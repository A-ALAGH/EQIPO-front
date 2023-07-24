import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../helpers/ProfileTheme';
import Main from '../components/profile parts/Main';
import { useEffect } from 'react';
import useUserId from '../components/hooks/useUserId';

export default function Profile() {

  return (
    <ChakraProvider theme={theme}>
      <Main/>
    </ChakraProvider>
  );
}

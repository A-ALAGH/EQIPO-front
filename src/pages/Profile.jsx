import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../helpers/ProfileTheme';
import Main from '../components/profile parts/Main';

export default function Profile() {
  return (
    <ChakraProvider theme={theme}>
      <Main/>
    </ChakraProvider>
  );
}

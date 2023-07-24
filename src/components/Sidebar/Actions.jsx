import { useEffect, useRef } from 'react'
import {
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  useClipboard,
  VStack,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

export default function Actions() {


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "http://localhost:5173/login";


  };

  return (
    <VStack py={8} px={5} spacing={3}>
      <Button w="full" variant="outline" onClick={handleLogout}>
        Logout
      </Button>
  
    </VStack>
  )
}

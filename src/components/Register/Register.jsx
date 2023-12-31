import React, { useState } from 'react';
import axios from 'axios';
import { useAuthUser } from 'react-auth-kit';
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  Icon,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import cities from '../../assets/Wilayas.json';
import { useNavigate } from 'react-router-dom';


const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://bit.ly/ryan-florence',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Kent Dodds',
    url: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://bit.ly/code-beast',
  },
];

export default function JoinOurTeam() {
  const navigate = useNavigate();
  const authUser = useAuthUser();
  const [formData, setFormData] = useState({
    pseudo: '',
    email: '',
    password: '',
    phoneNumber: ''
  });
  const [pseudoError, setPseudoError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setPseudoError('');
    setEmailError('');
    setPasswordError('');
    setError('');
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.pseudo.length < 4) {
      setPseudoError('Le pseudo doit contenir au moins 4 caractères.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setEmailError('Adresse e-mail invalide.');
      return;
    }

    if (formData.password.length < 6) {
      setPasswordError('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }

    try {
      const checkDuplicateResponse = await axios.post('http://localhost:5000/api/user/check-duplicate', {
        pseudo: formData.pseudo,
        email: formData.email,
      });

      if (checkDuplicateResponse.data.pseudoExists) {
        setPseudoError('Ce pseudo est déjà utilisé. Veuillez en choisir un autre.');
        return;
      }

      if (checkDuplicateResponse.data.emailExists) {
        setEmailError('Cet e-mail est déjà utilisé. Veuillez en choisir un autre.');
        return;
      }

      const response = await axios.post('http://localhost:5000/api/user/register', {
        pseudo: formData.pseudo,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phoneNumber,
        city: formData.city
      });

      localStorage.token = response.data.token
      localStorage.user = response.data.user
      setSuccess(true);
      console.log(res.data);
      navigate('/')


    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        console.error(error);
        setError("Une erreur s'est produite. Veuillez réessayer plus tard.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <Box position="relative">
      <Container as={SimpleGrid} maxW="7xl" columns={{ base: 1, md: 2 }} spacing={{ base: 10, lg: 32 }} py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading lineHeight={1.1} fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            Loisirs, sport et travail de groupe, formez et rejoignez des equipes près de chez vous.{' '}
          </Heading>
          <Stack direction="row" spacing={4} align="center">
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={useBreakpointValue({ base: 'md', md: 'lg' })}
                  position="relative"
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, red.400,pink.400)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily="heading" fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align="center"
              justify="center"
              fontFamily="heading"
              fontSize={{ base: 'sm', md: 'lg' }}
              bg="gray.800"
              color="white"
              rounded="full"
              minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
              minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
              position="relative"
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack bg="gray.50" rounded="xl" p={{ base: 4, sm: 6, md: 8 }} spacing={{ base: 8 }} maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading color="gray.800" lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Join our team
              <Text as="span" bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
                !
              </Text>
            </Heading>
            <Text color="gray.500" fontSize={{ base: 'sm', sm: 'md' }}>
              Loisirs, sport et travail de groupe, formez et rejoignez des equipes près de chez vous.
            </Text>
          </Stack>
          <Box as="form" mt={10}>
            <Stack spacing={4}>
              <Input
                name="pseudo"
                placeholder="Pseudo"
                bg="gray.100"
                border={0}
                color="gray.500"
                _placeholder={{
                  color: 'gray.500',
                }}
                value={formData.pseudo}
                onChange={handleChange}
              />
              {pseudoError && <Text color="red.500">{pseudoError}</Text>}
              <Input
                name="email"
                placeholder="Email"
                bg="gray.100"
                border={0}
                color="gray.500"
                _placeholder={{
                  color: 'gray.500',
                }}
                value={formData.email}
                onChange={handleChange}
              />
              {emailError && <Text color="red.500">{emailError}</Text>}
              <Input
                name="phoneNumber"
                placeholder="Numéro de téléphone"
                bg="gray.100"
                border={0}
                color="gray.500"
                _placeholder={{
                  color: 'gray.500',
                }}
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <div style={{ position: "relative" }}>
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  bg="gray.100"
                  border={0}
                  color="gray.500"
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  value={formData.password}
                  onChange={handleChange}
                />
                <Button
                  style={{
                    position: "absolute",
                    right: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    color: "black"
                  }}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </div>
              {passwordError && <Text color="red.500">{passwordError}</Text>}
            </Stack>
            <FormControl id="city">
                  <FormLabel>City</FormLabel>
                  <Select
                    focusBorderColor="brand.blue"
                    placeholder="Select city"
                    bg="gray.100"
                    border={0}
                    color="gray.500"
                    _placeholder={{
                      color: 'gray.500',
                    }}
                    value={formData.city ? formData.city : ''}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  >
                    {cities.map(city => (
                      <option key={city.id} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
            <Button
              fontFamily="heading"
              mt={8}
              w="full"
              bgGradient="linear(to-r, red.400,pink.400)"
              color="white"
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            {success && (
              <Text color="green.500" fontWeight="bold">Enregistrement réussi !</Text>
            )}
          </Box>
        </Stack>
      </Container>
      <Blur position="absolute" top={-10} left={-10} style={{ filter: 'blur(70px)' }} />
    </Box>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

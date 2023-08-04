import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/action';
import { Link } from 'react-router-dom';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { useNavigate } from "react-router-dom";

export const SignUp = () => {

  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);


  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signUp(email, password));
  };

  return (
    <div>
      <Flex
        mt={50}
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>


          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <FormControl onSubmit={handleSignUp} spacing={4}>
              <HStack>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onSubmit={handleSignUp}
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to='/login' color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </FormControl>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

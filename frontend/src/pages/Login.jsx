import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/action';
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

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <Stack style={{ backgroundColor: '#f3f4f6', marginTop: '60px' }} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <FormControl onSubmit={handleLogin} spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Login to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Button
                colorScheme={'blue'} variant={'solid'}>
                Login
              </Button>
            </Stack>
          </FormControl>
        </Flex>
        </Stack>
    </div>
  );
};

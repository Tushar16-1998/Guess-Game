import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Input,
  Button,
  VStack,
  Heading,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';


/*------------begins------------*/


const GuessNumberGame = () => {
  const [upper, setUpper] = useState('');
  const [lower, setLower] = useState('');
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);
  const [player, setPlayer] = useState('');
  const [x, setX] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * (parseInt(lower) - parseInt(upper) + 1)) + parseInt(upper);
  }

  function handleStartGame() {
    setX(generateRandomNumber());
    setCount(0);
    setMessage(`\n\tGuess the number between ${upper} and ${lower}\n`);
  }

  function handleGuess() {
    setCount(count + 1);

    if (parseInt(player) === x) {
      setMessage(`You guessed the right number, but it took: ${count} chances`);
    } else if (x < parseInt(player)) {
      setMessage('Number too high');
    } else if (x > parseInt(player)) {
      setMessage('Number too small');
    }
  }

  return (
    <ChakraProvider>
      <VStack align="center" spacing={4} mt={8}>
        <Heading as="h1">Guess the Number Game</Heading>
        <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
          <FormControl>
            <FormLabel>First Number:</FormLabel>
            <Input
              type="number"
              value={upper}
              onChange={(e) => setUpper(e.target.value)}
              mb={2}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Second Number:</FormLabel>
            <Input
              type="number"
              value={lower}
              onChange={(e) => setLower(e.target.value)}
              mb={2}
            />
          </FormControl>
          <Button colorScheme="teal" onClick={handleStartGame} mb={4}>
            Start Game
          </Button>
          {message && <Box p={4} mb={4} borderWidth="1px" borderRadius="md">{message}</Box>}
          <FormControl>
            <FormLabel>Guess the Number:</FormLabel>
            <Input
              type="number"
              value={player}
              onChange={(e) => setPlayer(e.target.value)}
              mb={2}
            />
          </FormControl>
          <Button colorScheme="teal" onClick={handleGuess}>
            Submit Guess
          </Button>
          <Button colorScheme='teal' display={'flex'} margin={"10px"} ml={'75px'} mt={'20px'} >
          <Link to='/'>
            Back
          </Link>
          </Button>
        </Box>
      </VStack>
    </ChakraProvider>
  );
};

export default GuessNumberGame;

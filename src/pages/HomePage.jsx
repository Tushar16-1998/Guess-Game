import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

function HomePage() {
  return (
    <div>
        <h1> Guess Number Game </h1>
        <Button 
        colorScheme='teal' 
        display={'flex'}
        margin={'50px'}
        ml={'200px'}
        >
        <Link to='/game'>
          Start
        </Link>
        </Button>
    </div>
  )
}

export default HomePage
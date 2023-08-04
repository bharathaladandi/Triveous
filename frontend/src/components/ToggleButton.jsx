import React from 'react';

import { Button } from '@chakra-ui/react';


const ToggleButton = ({onClick, gridView}) => {
  
  return (
    <div>
      <Button size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={onClick}>
        {gridView ? 'Switch to List View' : 'Switch to Grid View'}
      </Button>
    </div>
  );
};

export default ToggleButton;

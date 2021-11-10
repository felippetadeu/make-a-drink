import * as React from 'react';
import {
  Circle
} from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons'

const ScrollToTop = () => {

  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Circle size="50px" bg="gray.700" position="fixed" bottom="20px" right="20px" cursor="pointer" onClick={handleOnClick}>
      <ArrowUpIcon />
    </Circle>
  )
};

export default ScrollToTop;
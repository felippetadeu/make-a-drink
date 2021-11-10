import * as React from 'react';
import {
  Circle,
  Text,
  Stack
} from '@chakra-ui/react';

interface BadgeCategoryMenuProps {
  name: string
}

const BadgeCategoryMenu = ({ name }: BadgeCategoryMenuProps) => {
  return (
    <Circle position="absolute" bg="yellow.500" size="350px" left="200px" top="-50px" >
      <Stack spacing={3} alignItems="center">
        <Text fontFamily="heading" fontSize="3xl" fontWeight="bold">{name}</Text>
        <Text fontFamily="fantasy" fontSize="xl"> - MENU -</Text>
      </Stack>
    </Circle>
  )
}

export default BadgeCategoryMenu;
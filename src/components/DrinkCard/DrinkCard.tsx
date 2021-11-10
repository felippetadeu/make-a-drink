import * as React from 'react';
import {
  Flex,
  Box,
  useColorModeValue,
  chakra
} from '@chakra-ui/react';

interface DrinkCardProps {
  name: string;
  urlThumb: string;
  idDrink: string;
}

const DrinkCard = ({ name, urlThumb, idDrink }: DrinkCardProps) => {
  return (
    <Flex cursor="pointer">
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="sm"
        mx="auto"
      >
        <Box
          bg="gray.300"
          h={64}
          w="full"
          rounded="lg"
          shadow="md"
          bgSize="cover"
          bgPos="center"
          style={{
            backgroundImage:
              `url(${urlThumb})`,
          }}
        ></Box>

        <Box
          w={{ base: 64, md: 72 }}
          bg={useColorModeValue("white", "gray.800")}
          mt={-5}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <chakra.h3
            py={2}
            textAlign="center"
            fontWeight="bold"
            textTransform="uppercase"
            color={useColorModeValue("gray.800", "white")}
            letterSpacing={1}
          >
            {name}
          </chakra.h3>
        </Box>
      </Flex>
    </Flex>
  )
}

export default DrinkCard;
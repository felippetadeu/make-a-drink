import * as React from 'react';
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Text,
  Flex,
  Box
} from '@chakra-ui/react';
import { 
  SearchIcon
} from '@chakra-ui/icons';
import {
  useNavigate
} from 'react-router-dom'
import service from '../../services/cocktail.service';

const FindDrink = () => {

  const navigate = useNavigate();

  const [drinkName, setDrinkName] = React.useState('')

  const findDrink = React.useCallback((name: string) => {
    navigate(`/drinks?drinkName=${name}`)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (drinkName){
      findDrink(drinkName)
    }
  }, [drinkName, findDrink])

  const handleOnKeyUp = (e) => {
    if (e.key === 'Enter') {
      setDrinkName(e.target.value);
    }
  }

  const handleClick = () => {
    findDrink(drinkName);
  }

  const handleClickGetRandom = async () => {
    const response = await service.getRandomDrink();
    const drink = response.data.drinks[0]
    navigate(`/drink?id=${drink.idDrink}&name=${drink.strCategory}`)
  }

  return (
    <Flex justifyContent="center" pt="50px">
      <Box>
        <InputGroup size="md" w="500px">
          <Input
            pr="4.5rem"
            placeholder="Find a Drink"
            borderColor="gray.400"
            _placeholder={{color: 'gray.500'}}
            color='gray.500'
            boxShadow="lg"
            onKeyUp={handleOnKeyUp}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick} color="gray.500">
              <Text>Find</Text>
              <SearchIcon ml="5px"/>
            </Button>
          </InputRightElement>
        </InputGroup>
        <Flex w="500px" justifyContent="center" mt="5px">
          <Text color="gray.800" textTransform="capitalize" fontSize="sm" cursor="pointer" onClick={handleClickGetRandom}>or get a random</Text>
        </Flex>
      </Box>
    </Flex>
  )
}

export default FindDrink;
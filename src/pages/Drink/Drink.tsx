import * as React from 'react';
import {
  Box,
  Flex,
  Image,
  Text
} from '@chakra-ui/react';
import PageLayout from '../../components/PageLayout/PageLayout';
import useQuery from '../../hooks/useQuery';
import service from '../../services/cocktail.service';

const Drink = () => {

  const id = useQuery('id');
  const [drink, setDrink] = React.useState({});

  React.useEffect(() => {
    const getDrink = async (drinkId: string) => {
      const response = await service.findDrinkById(+drinkId);
      setDrink(response.data.drinks[0])
      console.log(response.data.drinks[0])
    }

    if (id)
      getDrink(id);
  }, [id])

  const renderDrink = React.useMemo(() => {
    if (!drink) return null;

    const renderIngredients = () => {
      let ingredients: any[] = [];
      for (let i = 1; i <= 8; i++){
        const name = drink[`strIngredient${i.toString()}`];
        const measure = drink[`strMeasure${i.toString()}`]
        if (name && measure){
          ingredients.push({ name, measure });
        }
      }

      return ingredients.map((v, i) => {
        return (
          <Flex mt="5px" key={i}>
            <Text color="gray.500">{v['name']} - {v['measure']}</Text>
          </Flex>
        );
      });
    }

    return (
      <Flex mt="100px">
        <Flex w="100%">
          <Box w="40%">
            <Image borderRadius="9999px" src={drink['strDrinkThumb']} />
          </Box>
          <Box w="60%" pl="100px">
            <Text color="gray.800" fontSize="5xl" fontWeight="bold">{drink['strDrink']}</Text>
            <Flex pt="30px">
              <Box width="50%">
                <Text color="gray.500" fontSize="2xl" fontWeight="bold">Ingredients</Text>
                {renderIngredients()}
              </Box>
              <Box width="50%">
                <Text color="gray.500" fontSize="2xl" fontWeight="bold">Instructions</Text>
                <Text color="gray.500">{drink['strInstructions']}</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    )
  }, [drink])

  return (
    <PageLayout>
      <Box width="100%" pt="50px">
        {renderDrink}
      </Box>
    </PageLayout>
  )
}

export default Drink;
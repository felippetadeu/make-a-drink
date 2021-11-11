import * as React from 'react';
import useQuery from '../../hooks/useQuery';
import PageLayout from '../../components/PageLayout/PageLayout';
import DrinkCard from '../../components/DrinkCard/DrinkCard';
import {
  Box,
  Flex,
  Grid
} from '@chakra-ui/react';
import service from '../../services/cocktail.service';

const Drinks = () => {
  const name = useQuery('drinkName')

  const [drinks, setDrinks] = React.useState([])

  React.useEffect(() => {
    console.log(name)
    const getDrinksByCategory = async () => {
      const response = await service.searchByName(name!);
      if (response.data && response.data.drinks && response.data.drinks.length > 0)
        setDrinks(response.data.drinks)
    }

    if (name)
      getDrinksByCategory();
  }, [name])

  const renderDrinks = React.useMemo(() => {
    return drinks.map((v, i) => {
      return (
        <DrinkCard key={i} name={v['strDrink']} urlThumb={v['strDrinkThumb']} idDrink={v['idDrink']} category={v['strCategory']}></DrinkCard>
      )
    })
  }, [drinks])

  return (
    <PageLayout>
      <Box>
        <Flex width="100%" pt="50px" pb="150px">
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {renderDrinks}
          </Grid>
        </Flex>
      </Box>
    </PageLayout>
  )
}

export default Drinks;
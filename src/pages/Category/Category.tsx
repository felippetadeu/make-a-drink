import * as React from 'react';
import {
  Grid,
  Flex,
  Box
} from '@chakra-ui/react';
import PageLayout from '../../components/PageLayout/PageLayout';
import useQuery from '../../hooks/useQuery';
import service from '../../services/cocktail.service';
import DrinkCard from '../../components/DrinkCard/DrinkCard';


const CategoryPage = () => {
  const name = useQuery('name')

  const [drinks, setDrinks] = React.useState([])

  React.useEffect(() => {
    const getDrinksByCategory = async () => {
      const response = await service.listByCategory(name!);
      setDrinks(response.data.drinks)
    }

    if (name)
      getDrinksByCategory();
  }, [name])

  const renderDrinks = React.useMemo(() => {
    return drinks.map((v, i) => {
      return (
        <DrinkCard name={v['strDrink']} urlThumb={v['strDrinkThumb']} idDrink={v['idDrink']}></DrinkCard>
      )
    })
  }, [drinks])

  return (
    <PageLayout>
      <Box>
        <Flex width="100%" pt="250px" >
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {renderDrinks}
          </Grid>
        </Flex>
      </Box>
    </PageLayout>
  )
}

export default CategoryPage;
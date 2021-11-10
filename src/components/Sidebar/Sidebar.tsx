import * as React from 'react';
import { 
  Box
} from '@chakra-ui/react';
import service from '../../services/cocktail.service';
import Category from '../Category/Category';
import BadgeCategoryMenu from '../BadgeCategoryMenu/BadgeCategoryMenu';
import useQuery from '../../hooks/useQuery';

const Sidebar = () => {
  const [categories, setCategories] = React.useState([])
  const name = useQuery('name');

  React.useEffect(() => {
    const getCategories = async () => {
      const response = await service.listCategories();
      setCategories(response.data.drinks)
    }

    getCategories();
  }, []);

  const renderCategories = React.useMemo(() => {
    return categories.map((v, i) => {
      return <Category key={v['strCategory']} name={v['strCategory']} />
    })
  }, [categories])
  
  return (
    
    <Box bgColor="gray.800" pl="50px" pt="230px" w="20rem" position="sticky" top="0" alignSelf="flex-start" h="100vh">
      <BadgeCategoryMenu name={name!} />
      {renderCategories}
    </Box>
  );
}

export default Sidebar;
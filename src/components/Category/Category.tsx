import * as React from 'react';
import {
  Box
} from '@chakra-ui/react';
import {
  Link
} from 'react-router-dom';
import useQuery from '../../hooks/useQuery';

interface CategoryProps {
  name: string;
}

const ACTIVE_HOVER_STYLE = {
  cursor: 'pointer',
  backgroundColor: 'gray.100',
  borderRadius: '15px 0px 0px 15px',
  color: 'black !important'
}

const Category = ({ name }: CategoryProps) => {

  const activeCategory = useQuery('name')

  return (
    <Link to={{pathname: '/category', search: `?name=${name}`}}>
      <Box 
        p={"15px"}
        __css={activeCategory === name ? ACTIVE_HOVER_STYLE : { color: 'gray.100'}}
        _hover={ACTIVE_HOVER_STYLE}>
        {name}
      </Box>
    </Link>
  )
}

export default Category;
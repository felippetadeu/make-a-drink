import * as React from 'react';
import {
  Flex,
  Box
} from '@chakra-ui/react';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import FindDrink from '../FindDrink/FindDrink';

interface PageLayoutProps {
  children?: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const [showScrollToTop, setShowScrollToTop] = React.useState(false);

  const handleOnScroll = () => {
    setShowScrollToTop(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40);
  }
  
  React.useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
    return () => {
        window.removeEventListener("scroll", handleOnScroll);
    }
  }, []);

  return (
    <Flex width="100%">
      <Box width="100%" pl="200px" pr="100px">
        <FindDrink />
        <Flex>
          {children}
        </Flex>
      </Box>
      { showScrollToTop ? <ScrollToTop/> : null }
    </Flex>
  )
}

export default PageLayout;
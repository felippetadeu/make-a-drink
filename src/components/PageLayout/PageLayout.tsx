import * as React from 'react';
import useQuery from '../../hooks/useQuery';
import {
  Flex
} from '@chakra-ui/react';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

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
      <Flex width="100%" pl="250px" pr="100px">
        {children}
      </Flex>
      { showScrollToTop ? <ScrollToTop/> : null }
    </Flex>
  )
}

export default PageLayout;
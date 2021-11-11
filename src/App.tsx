import * as React from "react"
import {
  ChakraProvider,
  Flex,
  theme
} from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import CategoryDrinks from "./pages/CategoryDrinks/CategoryDrinks";
import Drink from "./pages/Drink/Drink";
import Drinks from "./pages/Drinks/Drinks";
import Home from "./pages/Home/Home";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex bgColor="gray.100">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<CategoryDrinks />} />
            <Route path="/drink" element={<Drink />} />
            <Route path="/drinks" element={<Drinks />} />
          </Routes>
        </Flex>
      </Router>
    </ChakraProvider>
  )
}
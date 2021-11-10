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
import CategoryPage from "./pages/Category/Category";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex bgColor="gray.100">
          <Sidebar />
          <Routes>
            <Route path="/" />
            <Route path="/category" element={<CategoryPage />} />
          </Routes>
        </Flex>
      </Router>
    </ChakraProvider>
  )
}
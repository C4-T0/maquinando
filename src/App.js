import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

import Board from "./Components/Board";
import Menu from "./Components/Menu";

function App() {
  return (
    <ChakraProvider>
      <div className="App">     
        <Menu />
        <Board />
      </div>
    </ChakraProvider>
  );
}

export default App;

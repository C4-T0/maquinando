import React, { useState } from "react";
import { Text, Select, HStack } from "@chakra-ui/react";
import "./styles.css";

const Menu = () => {
  const [parejas, setParejas] = useState(0);

  return (
    <HStack paddingY={2} className="root" spacing="30px">
      <Select
        variant="flushed"
        marginLeft={10}
        maxWidth="200px"
        placeholder="Selecionar parejas"
      >
        <option value="option1">6</option>
        <option value="option2">8</option>
      </Select>
      <Text
        marginRight={10}
        onClick={() => {
          setParejas(parejas + 1);
        }}
      >
        Parejas encontradas: {parejas}
      </Text>
    </HStack>
  );
};

export default Menu;

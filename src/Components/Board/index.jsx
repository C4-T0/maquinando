import React, { useState } from "react";
import { SimpleGrid, Box, Image } from "@chakra-ui/react";
import Card from "../Card";
import "./styles.css";

const Board = () => {
  const [parejas, setParejas] = useState(6);
  const Cards = [];

  for (let index = 1; index <= parejas; index++) {
    Cards.push(
      <Card imageUrl={`https://picsum.photos/id/${index}${index}/600/800`} id={index}/>
    );
    Cards.push(
      <Card imageUrl={`https://picsum.photos/id/${index}${index}/600/800`} id={-index}/>
    );
  }

  Cards.sort(() => Math.random() - 0.5);

  return (
    <SimpleGrid minChildWidth="150px" spacing={10} m={10}>
      {Cards.map((x) => {
        return x;
      })}
    </SimpleGrid>
  );
};

export default Board;

import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Card from "../Card";
import { Nivel } from "../../State/Nivel.js";
import { addToggle } from "../../State/Toggles.js";
import { useStore } from "effector-react";
import "./styles.css";

const Board = () => {
  const parejas = useStore(Nivel);
  const Cards = [];
  for (let index = 1; index <= parejas; index++) {
    Cards.push(
      <Card
        imageUrl={`https://picsum.photos/id/${index}${index}/600/800`}
        id={index}
        key={index}
      />
    );
    addToggle({ id: index, value: false, check: false });
    Cards.push(
      <Card
        imageUrl={`https://picsum.photos/id/${index}${index}/600/800`}
        id={-index}
        key={-index}
      />
    );
    addToggle({ id: -index, value: false, check: false });
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

import React from "react";
import { Text, Select, HStack } from "@chakra-ui/react";
import { useStore } from "effector-react";
import ModalInfo from "../Modal";
import { Parejas, resetPareja } from "../../State/Parejas.js";
import { changeNivel, Nivel } from "../../State/Nivel.js";
import { resetToggle } from "../../State/Toggles.js";
import { openModal } from "../../State/Modal.js";
import "./styles.css";

const Menu = () => {
  const parejas = useStore(Parejas);
  const nivel = useStore(Nivel);
  const handleSelect = (e) => {
    resetPareja();
    resetToggle();
    changeNivel(e.target.value);
  };
  if (parejas == nivel) {
    openModal();
  }
  return (
    <HStack paddingY={2} className="root" spacing="30px">
      <ModalInfo open={true} />
      <Text marginLeft={10}>Nivel :</Text>
      <Select variant="flushed" maxWidth="50px" onChange={handleSelect}>
        <option value={6}>1</option>
        <option value={8}>2</option>
      </Select>
      <Text marginRight={10} onClick={() => {}}>
        Parejas encontradas: {parejas}/{nivel}
      </Text>
    </HStack>
  );
};

export default Menu;

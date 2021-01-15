import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useStore } from "effector-react";
import { modalState, closeModal } from "../../State/Modal.js";
import { resetPareja } from "../../State/Parejas.js";
import { resetToggle } from "../../State/Toggles.js";
import { changeNivel, Nivel } from "../../State/Nivel.js";

const ModalInfo = () => {
  const open = useStore(modalState);
  const nivel = useStore(Nivel);
  const handleClose = () => {
    closeModal();
  };
  const handleReset = () => {
    let currentNivel = nivel;
    resetPareja();
    resetToggle();
    closeModal();
    changeNivel(0);
    changeNivel(currentNivel);
  };

  return (
    <>
      <Modal onClose={handleClose} isOpen={open} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nivel superado</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Felicitaciones</ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              variant="outline"
              mr={3}
              onClick={handleClose}
            >
              Cerrar
            </Button>
            <Button colorScheme="teal" variant="outline" onClick={handleReset}>
              Reiniciar nivel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalInfo;

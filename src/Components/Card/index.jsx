import React, { useState } from "react";
import { Image, Fade, useDisclosure, Box } from "@chakra-ui/react";
import "./styles.css";

const Card = (props) => {
  const { isOpen, onToggle } = useDisclosure(true);
  const { imageUrl, id } = props;
  return (
    <div className="fade">
      <Fade  onClick={onToggle} in={isOpen}>
        <Image src={imageUrl} />
      </Fade>
    </div>
  );
};

export default Card;

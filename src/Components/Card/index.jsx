import React from "react";
import { Image, Fade } from "@chakra-ui/react";
import { useStore } from "effector-react";
import {
  setCurrentFlip,
  CurrentFlip,
  resetCurrentFlip,
} from "../../State/Flips.js";
import { Toggles, editToggle } from "../../State/Toggles.js";
import { addPareja } from "../../State/Parejas.js";
import "./styles.css";

const Card = (props) => {
  const { imageUrl, id } = props;
  const currentFlip = useStore(CurrentFlip);
  const toggles = useStore(Toggles);
  const newOPen = toggles.find((x) => x.id == id).value;
  const checkFade = toggles.find(
    (x) => Math.abs(x.id) == Math.abs(id) && x.check == true
  );

  const flipCard = (id, value, check = false) => {
    const filterState = toggles.filter((x) => {
      if (x.id != id) {
        return x;
      }
    });
    const newState = [...filterState, { id, value, check }];
    editToggle(newState);
  };

  const handleClick = async () => {
    if (!newOPen && currentFlip == 0) {
      setCurrentFlip(id);
      flipCard(id, true);
    } else if (!newOPen && currentFlip + id == 0) {
      flipCard(id, true);
      await new Promise((r) => setTimeout(r, 1000));
      flipCard(currentFlip, true, true);
      flipCard(id, true, true);
      resetCurrentFlip();
      addPareja();
    } else if (!newOPen) {
      flipCard(id, true);
      await new Promise((r) => setTimeout(r, 1000));
      flipCard(id, false);
      flipCard(currentFlip, false);
      resetCurrentFlip();
    }
  };

  return (
    <Fade in={!checkFade}>
      <div className="fade">
        <Fade onClick={handleClick} in={newOPen}>
          <Image src={imageUrl} />
        </Fade>
      </div>
    </Fade>
  );
};

export default Card;

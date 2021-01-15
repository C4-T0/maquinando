import { createStore, createEvent } from "effector";

const setCurrentFlip = createEvent();
const resetCurrentFlip = createEvent();

const CurrentFlip = createStore(0)
  .on(setCurrentFlip, (state, id) => id)
  .reset(resetCurrentFlip);

export { setCurrentFlip, resetCurrentFlip, CurrentFlip };

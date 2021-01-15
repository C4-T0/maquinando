import { createStore, createEvent } from "effector";

const addToggle = createEvent();
const editToggle = createEvent();
const resetToggle = createEvent();

const Toggles = createStore([])
  .on(addToggle, (state, toggle) => [...state, toggle])
  .on(editToggle, (state, newState) => newState)
  .reset(resetToggle);

export { addToggle, editToggle, Toggles, resetToggle };

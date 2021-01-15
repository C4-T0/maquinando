import { createStore, createEvent } from "effector";

const openModal = createEvent();
const closeModal = createEvent();

const modalState = createStore(false)
  .on(openModal, (state, _) => true)
  .reset(closeModal);

export { openModal, closeModal, modalState };

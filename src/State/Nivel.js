import { createStore, createEvent } from "effector";

const changeNivel = createEvent();
const resetNivel = createEvent();

const Nivel = createStore(6)
  .on(changeNivel, (state, newNivel) => newNivel)
  .reset(resetNivel);

export { changeNivel, resetNivel, Nivel };

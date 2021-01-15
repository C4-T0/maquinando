import { createStore, createEvent } from "effector";

const addPareja = createEvent();
const resetPareja = createEvent();

const Parejas = createStore(0).on(addPareja, (state, _) => (state += 1)).reset(resetPareja);

export {addPareja, resetPareja, Parejas}
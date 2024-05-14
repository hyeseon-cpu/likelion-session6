import { atom, createStore } from "jotai";

/* { id: number, title: string, content: string } */
export const postsAtom = atom([]);
export const store = createStore();

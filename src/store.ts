import { Writable, writable } from "svelte/store";
import Counter1 from "./counter";
export const counterItems:Writable<Counter1[]>=writable([]);
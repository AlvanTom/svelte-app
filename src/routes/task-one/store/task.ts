import { writable } from 'svelte/store';
type stepsOptions = 1 | 2 | 3;
export const task = writable({ name: '', duration: 0 });
export const steps = writable<stepsOptions>(1);

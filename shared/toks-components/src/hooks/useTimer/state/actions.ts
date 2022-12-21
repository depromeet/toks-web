import { createActionType } from './helpers';

const PAUSE = () => createActionType('pause');

const RESET = (initialTime: number) => createActionType('reset', initialTime);

const SET = (newTime: number) => createActionType('set', newTime);

const START = (initialTime: number) => createActionType('start', initialTime);

const STOP = () => createActionType('stop');

export type TimerActionsType = ReturnType<typeof PAUSE | typeof RESET | typeof SET | typeof START | typeof STOP>;

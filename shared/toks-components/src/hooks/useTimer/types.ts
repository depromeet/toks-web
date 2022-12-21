export type Status = 'RUNNING' | 'PAUSED' | 'STOPPED';

export type Config = {
  initialStatus: Status;
  initialTime: number;
  onTimeOver?: () => void;
  onTimeUpdate?: (time: number) => void;
};

export type ReturnValue = {
  timerPause: () => void;
  timerStart: () => void;
  status: Status;
  time: number;
};

export interface State {
  status: Status;
  time: number;
}

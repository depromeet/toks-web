export type Status = 'RUNNING' | 'PAUSED' | 'STOPPED';

export type Config = {
  initialStatus: Status;
  initialTime: number;
  onTimeOver?: () => void;
  onTimeUpdate?: (time: number) => void;
};

export type ReturnValue = {
  pause: () => void;
  start: () => void;
  status: Status;
  time: number;
};

export interface State {
  status: Status;
  time: number;
}
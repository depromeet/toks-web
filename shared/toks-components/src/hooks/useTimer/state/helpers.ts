export function createActionType<T extends string>(type: T): { type: T };

export function createActionType<T extends string, P extends number>(type: T, payload: P): { type: T; payload: P };

export function createActionType(type: string, payload?: number) {
  return { type, payload };
}

export type EventPath<
  T,
  TPath extends string[] = []
> = TPath['length'] extends 4
  ? TPath
  : keyof T extends infer Key extends string
  ? Key extends keyof T
    ? EventPath<T[Key], [...TPath, Key]>
    : never
  : never;

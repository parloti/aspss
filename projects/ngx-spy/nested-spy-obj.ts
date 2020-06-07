import { Primitives } from './primitives';
export type NestedSpyObj<T> = jasmine.SpyObj<T> &
  {
    [K in keyof T]: T[K] extends (...args: any[]) => any
    ? T[K]
    : T[K] extends Primitives
    ? jasmine.Spy<() => T[K]>
    : jasmine.Spy<() => T[K]> & NestedSpyObj<T[K]>;
  };


  /// jasmine.Spy<() => jasmine.SpyObj<T>[P]>;

export function spyOnSpyObjProp<T, P extends keyof T>(
  spy: jasmine.SpyObj<T>,
  propertyName: P,
  accessType: 'get' | 'set' = 'get'
) {
  if (!spy) {
    throw new Error('No spy supplied');
  }

  if (!propertyName) {
    throw new Error('No property name supplied');
  }

  const accessor = Object.getOwnPropertyDescriptor(spy, propertyName)[
    accessType
  ];

  if (!accessor) {
    throw new Error(propertyName + '.' + accessType + ' does not exist');
  }

  return accessor as jasmine.Spy<() => jasmine.SpyObj<T>[P]>;
}

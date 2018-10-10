import { ButtonTypes } from '../../models';
export function IconEnumAware(constructor: Function) {
  constructor.prototype.ButtonType = ButtonTypes;
}

export function IconEnum(type: ButtonTypes) {
  return function (target: any, key: ButtonTypes) {
    Object.defineProperty(target, key, {
      configurable: false,
      get: () => type
    });
  };
}


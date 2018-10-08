import { EButtonTypes } from './buttonTypes';
export function IconEnumAware(constructor: Function) {
  constructor.prototype.ButtonType = EButtonTypes;
}

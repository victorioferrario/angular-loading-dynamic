import { ButtonTypes } from '../../models';
export function IconEnumAware(constructor: Function) {
  constructor.prototype.ButtonType = ButtonTypes;
}

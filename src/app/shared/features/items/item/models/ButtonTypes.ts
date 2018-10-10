export enum ButtonTypes {
  DEALS = 'DEALS',
  CONDITION = 'CONDITION',
  ETA = 'ETA',
  GREEN = 'GREEN',
  PACKAGING = 'PACKAGING',
  RESTRICTIONS = 'RESTRICTIONS',
  ROCKET = 'ROCKET',
  JUST_LAUNCHED = 'JUSTLAUNCHED',
  WARRANTY = 'WARRANTY'
}
export enum ButtonTypeCodes {
  CONDITION = 'BAAF298B47',
  PACKAGING = 'AE860AA6E2',
  RESTRICTIONS = '1E3C4F305A',
  WARRANTY = '2EC7A07AEB'
}
export interface IDataItem {
  type: ButtonTypes;
  text?: string;
}

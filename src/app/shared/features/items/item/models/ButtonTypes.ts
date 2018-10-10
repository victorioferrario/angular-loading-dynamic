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
export enum ButtonIconTypes {
  CONDITION = 'assets/images/icons/Condition.svg',
  ETA = 'assets/images/icons/eta.svg',
  GREEN = 'assets/images/price-drop-item-green.svg',
  DEALS = 'assets/images/todays-specials-purple.svg',
  PACKAGING = 'assets/images/icons/Packaging.svg',
  RESTRICTIONS = 'assets/images/icons/Restrictions.svg',
  ROCKET = 'assets/images/rocket-item-red.svg',
  WARRANTY = 'assets/images/icons/Warranty.svg'
}
export interface IDataItem {
  text?: string | null;
  type: ButtonTypes;
  icon?: ButtonIconTypes;
  tooltipText?: TooltipText | null | string;
  tooltipColor?: TooltipColor | null;
}

export enum TooltipColor {
  GEEN = '',
  PURPLE = 'purple',
  RED = 'red',
  WHITE = 'white',
}
export enum TooltipText {
  CONDITION = '',
  ETA = 'Lead Time',
  GREEN = 'Price Drop',
  DEALS = 'Today\'s Deals',
  JUST_LAUNCHED = 'Just Launched',
  PACKAGING = '',
  RESTRICTIONS = '',
  ROCKET = 'Just Launched',
  WARRANTY = ''
}

export type UnitTypeWidget = 'px' | 'rem' | 'em' | '%' | 'vw';
export type UnitTypeHeight = 'px' | 'rem' | 'em' | '%' | 'vh';

export interface IUnits {
  size: number;
  unit: UnitTypeWidget | UnitTypeHeight;
}

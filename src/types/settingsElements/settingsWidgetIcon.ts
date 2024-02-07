import type { CSSProperties } from 'react';
import type { IWrapperCSS } from '../elementCSS/wrapperCSS';
import type { IContainerCSS } from '../elementCSS/containerCSS.type';
import type { IElementCSS } from '../elementCSS/elementCSS.type';

export interface ISettingsWidgetIcon {
  wrapperCSS: IWrapperCSS;
  containerCSS: IContainerCSS;
  elementCSS: IElementCSS;
  svg: CSSProperties;
  wrapperElement: CSSProperties;
  text: string;
  iconName: string;
  iconVariant: 'solid' | 'outline' | 'text';
  iconRounded: 'sm' | 'md' | 'lg';
  idColumn: string;
  idSection: string;
}

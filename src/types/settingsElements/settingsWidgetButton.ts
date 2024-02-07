import type { CSSProperties } from 'react';
import type { IWrapperCSS } from '../elementCSS/wrapperCSS';
import type { IContainerCSS } from '../elementCSS/containerCSS.type';
import type { IElementCSS } from '../elementCSS/elementCSS.type';

export interface ISettingsWidgetButton {
  wrapperCSS: IWrapperCSS;
  containerCSS: IContainerCSS;
  elementCSS: IElementCSS;
  buttonWrapper: CSSProperties;
  buttonAnchor: CSSProperties;
  buttonContentWrapper: CSSProperties;
  buttonWrapperIcon: CSSProperties;
  buttonIcon: CSSProperties;
  buttonText: CSSProperties;
  text: string;
  iconDirection: 'left' | 'right';
  variant: 'primary' | 'secondary';
  idColumn: string;
  idSection: string;
}

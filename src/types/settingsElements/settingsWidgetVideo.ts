import type { CSSProperties } from 'react';
import type { IWrapperCSS } from '../elementCSS/wrapperCSS';
import type { IElementCSS } from '../elementCSS/elementCSS.type';
import type { IContainerCSS } from '../elementCSS/containerCSS.type';

export interface ISettingsWidgetVideo {
  wrapperCSS: IWrapperCSS;
  containerCSS: IContainerCSS;
  elementCSS: IElementCSS;
  wrapperElement: CSSProperties;
  src: string;
  idColumn: string;
  idSection: string;
}

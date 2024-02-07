import type { CSSProperties } from 'react';
import type { IWrapperCSS } from '../elementCSS/wrapperCSS';
import type { IContainerCSS } from '../elementCSS/containerCSS.type';
import type { IElementCSS } from '../elementCSS/elementCSS.type';

export interface ISettingsWidgetDivider {
  wrapperCSS: IWrapperCSS;
  containerCSS: IContainerCSS;
  elementCS: IElementCSS;
  elementSeparator: CSSProperties;
  elementSeparatorBefore: CSSProperties;
  elementSeparatorAfter: CSSProperties;
  elementText: CSSProperties;
  text?: string;
  isText?: string;
  idColumn: string;
  idSection: string;
}

import type { CSSProperties } from 'react';
import type { IWrapperCSS } from '../elementCSS/wrapperCSS';
import type { IElementCSS } from '../elementCSS/elementCSS.type';
import type { IContainerCSS } from '../elementCSS/containerCSS.type';

export interface ISettingsWidgetListIcon {
  wrapperCSS: IWrapperCSS;
  containerCSS: IContainerCSS;
  elementCSS: IElementCSS;
  iconCSS: CSSProperties;
  textCSS: CSSProperties;
  listItemsCSS: CSSProperties;
  listItemCSS: CSSProperties;
  wrapperIconCSS: CSSProperties;
  listIcons: Array<{
    name: string;
    text: string;
  }>;
  idColumn: string;
  idSection: string;
}

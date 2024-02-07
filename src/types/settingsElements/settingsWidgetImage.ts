import type { IWrapperCSS } from '../elementCSS/wrapperCSS';
import type { IContainerCSS } from '../elementCSS/containerCSS.type';
import type { IElementCSS } from '../elementCSS/elementCSS.type';

export interface ISettingsWidgetHtml {
  wrapperCSS: IWrapperCSS;
  containerCSS: IContainerCSS;
  elementCSS: IElementCSS;
  src: string;
  idColumn: string;
  idSection: string;
}

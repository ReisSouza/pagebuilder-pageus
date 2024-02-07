import type { IWrapperCSS } from '../elementCSS/wrapperCSS';
import type { IContainerCSS } from '../elementCSS/containerCSS.type';

export interface ISettingsWidgetHtml {
  wrapperCSS: IWrapperCSS;
  containerCSS: IContainerCSS;
  html: string;
  idColumn: string;
  idSection: string;
}

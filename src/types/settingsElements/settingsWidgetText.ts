import type { IWrapperCSS } from '../elementCSS/wrapperCSS';
import type { IElementCSS } from '../elementCSS/elementCSS.type';
import type { IContainerCSS } from '../elementCSS/containerCSS.type';

export interface ISettingsWidgetText {
  wrapperCSS: IWrapperCSS;
  containerCSS: IContainerCSS;
  elementCSS: IElementCSS;
  text: string;
  link?: string;
  size: 'default' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'custom';
  htmlElement: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  idColumn: string;
  idSection: string;
}

import type { IWrapperCSS } from '../elementCSS/wrapperCSS';
import type { IContainerCSS } from '../elementCSS/containerCSS.type';
export interface ISettingsWidgetEditor {
  wrapperCSS: IWrapperCSS;
  containerCSS: IContainerCSS;
  editor: string;
  idColumn: string;
  idSection: string;
}

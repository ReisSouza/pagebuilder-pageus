import type { IDevice } from './devices.type';
import type { IEditorElement } from './editorElement.type';
import type { IViewModeType } from './viewMode.type';

export interface IEditor {
  viewMode: IViewModeType;
  elements: IEditorElement[];
  selectedElement?: IEditorElement;
  device: IDevice;
}

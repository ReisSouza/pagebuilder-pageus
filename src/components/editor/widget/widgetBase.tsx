import { WrapperWidget } from './widgetWrapper';
import { generateElementWidget } from './generateElementWidget';
import type { IEditorElement } from '@/types/editor/editorElement.type';

export const WidgetBase = (element: IEditorElement) => {
  return <WrapperWidget element={element}>{generateElementWidget(element)}</WrapperWidget>;
};

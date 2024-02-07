import { defaultCSSWidget } from '../defaultCSSWidget';

import type { IEditorElement } from '@/types/editor/editorElement.type';
import type { ISettingsWidgetText } from '@/types/settingsElements/settingsWidgetText';

export const defaultWidgetText = ({
  text = 'Digite seu texto aqui',
  htmlElement = 'h2',
  size = 'medium',
}: {
  size?: ISettingsWidgetText['size'];
  htmlElement?: ISettingsWidgetText['htmlElement'];
  text?: string;
}): IEditorElement => {
  return {
    elType: 'text',
    type: 'widget',
    id: 'widget-2',
    settings: {
      ...defaultCSSWidget,
      text,
      size,
      htmlElement,
      idColumn: 'column-1',
      idSection: 'section-1',
    } as ISettingsWidgetText,
    elements: [],
  };
};

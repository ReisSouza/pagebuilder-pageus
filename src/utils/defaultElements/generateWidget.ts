import type { IEditorElement } from '@/types/editor/editorElement.type';
import { defaultWidgetText } from './defaultWidget/defaultWidgetText';

export const generateWidget = ({ elType }: { elType: IEditorElement['elType'] }): IEditorElement => {
  switch (elType) {
    case 'text':
      return defaultWidgetText({});
    default:
      return defaultWidgetText({
        htmlElement: 'span',
        size: 'small',
        text: `Widget ainda não implementado: ${elType}`,
      });
  }
};

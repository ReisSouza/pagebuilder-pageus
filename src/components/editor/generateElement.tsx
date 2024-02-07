import type { IEditorElement } from '@/types/editor/editorElement.type';
import { Section } from './section/section';
import { Column } from './column/column';
import { Widget } from './widget/widget';

export const generateElement = (element: IEditorElement) => {
  switch (element.type) {
    case 'column':
      return <Column {...element} />;
    case 'section':
      return <Section {...element} />;
    case 'widget':
      return <Widget {...element} />;
    default:
      return null;
  }
};

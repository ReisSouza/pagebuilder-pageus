import { generateID } from './generateID';
import { defaultCSSColumn } from './defaultCSSColumn';
import type { IEditorElement } from '@/types/editor/editorElement.type';
import type { ISettingsColumn } from '@/types/settingsElements/settingsColumn';

export const generateColumn = ({
  elements,
  columnSize,
}: {
  elements?: IEditorElement[];
  columnSize: number;
}): IEditorElement => {
  return {
    id: generateID({ type: 'section' }),
    type: 'column',
    elType: 'column',
    elements: elements ?? [],
    settings: {
      ...defaultCSSColumn,
      columnCSS: {
        ...defaultCSSColumn.columnCSS,
        width: `${columnSize}%`,
      },
      populatedColumnContentAlign: 'flex-start',
    } as ISettingsColumn,
  };
};

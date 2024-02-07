import { generateColumn } from './generateColumn';
import { generateWidget } from './generateWidget';
import { generateSection } from './generateSection';
import type { IEditorElement } from '@/types/editor/editorElement.type';

export const generateSectionWithColumn = ({ elType }: { elType: IEditorElement['elType'] }) => {
  return generateSection({
    elements: [
      generateColumn({
        columnSize: 100,
        elements: [generateWidget({ elType })],
      }),
    ],
  });
};

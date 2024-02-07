import { v4 as uuid } from 'uuid';

import type { IEditorElement } from '@/types/editor/editorElement.type';

export const generateID = ({ type }: { type: IEditorElement['type'] | 'editor' }) => {
  return `${type}-${uuid()}`;
};

import type { IEditorElement } from '@/types/editor/editorElement.type';

export const generateElementWidget = (element: IEditorElement) => {
  switch (element.elType) {
    case 'text':
      return <div>widget text</div>;
    case 'image':
      return <div>widget image</div>;
    case 'video':
      return <div>widget video</div>;
    default:
      return null;
  }
};

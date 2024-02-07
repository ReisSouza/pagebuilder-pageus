import { defaultCSSSection } from './defaultCSSSection';
import type { IEditorElement } from '@/types/editor/editorElement.type';
import type { ISettingsSection } from '@/types/settingsElements/settingsSection';

import { generateID } from './generateID';

export const generateSection = ({ elements }: { elements: IEditorElement[] }): IEditorElement => {
  return {
    id: generateID({ type: 'section' }),
    elType: 'section',
    type: 'section',
    elements,
    settings: {
      ...defaultCSSSection,
      contentWidthType: 'box',
      htmlElement: 'section',
      sectionHeightType: 'default',
    } as ISettingsSection,
  };
};

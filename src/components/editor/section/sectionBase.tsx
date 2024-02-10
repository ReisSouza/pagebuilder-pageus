import React from 'react';

import { generateElement } from '../generateElement';
import type { IEditorElement } from '@/types/editor/editorElement.type';
import type { ISettingsSection } from '@/types/settingsElements/settingsSection';

export const SectionBase = ({ settings, id, elements }: IEditorElement) => {
  const settingsSection = settings as ISettingsSection;
  return (
    <section
      style={{
        ...settingsSection.sectionCSS,
        background: 'blue',
        border: '1px solid #FFF',
      }}
      id={id}
    >
      <div
        style={{
          background: 'yellow',
          ...settingsSection.containerCSS,
        }}
      >
        {React.Children.toArray(elements.map((elementItem) => generateElement(elementItem)))}
      </div>
    </section>
  );
};

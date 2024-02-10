import React from 'react';

import { generateElement } from '../generateElement';
import type { IEditorElement } from '@/types/editor/editorElement.type';
import type { ISettingsColumn } from '@/types/settingsElements/settingsColumn';

export const ColumnBase = ({ settings, id, elements }: IEditorElement) => {
  const settingsColumn = settings as ISettingsColumn;
  return (
    <article
      style={{
        ...settingsColumn.columnCSS,
      }}
      id={id}
    >
      <div
        id={`${id}-populated`}
        style={{
          padding: 24,
          background: 'red',
          ...settingsColumn.populatedCSS,
          alignContent:
            settings.populateColumnContentAlign === 'padrão' ? 'flex-start' : settings.populateColumnContentAlign,
        }}
      >
        {React.Children.toArray(elements.map((elementItem) => generateElement(elementItem)))}
      </div>
    </article>
  );
};

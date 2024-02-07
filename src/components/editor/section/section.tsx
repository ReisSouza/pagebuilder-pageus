import React from 'react';

import { SectionDrag } from './sectionDrag';
import { SectionBase } from './sectionBase';
import { usePageStore } from '@/stores/page/page.store';
import type { IEditorElement } from '@/types/editor/editorElement.type';

export const Section: React.FC<IEditorElement> = ({ ...rest }: IEditorElement) => {
  const { viewMode } = usePageStore();

  if (viewMode) {
    return (
      <SectionDrag>
        <SectionBase {...rest} />
      </SectionDrag>
    );
  }

  return <SectionBase {...rest} />;
};

Section.displayName = 'Section';

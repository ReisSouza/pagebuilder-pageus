import React from 'react';

import { generateElement } from '../generateElement';
import { usePageStore } from '@/stores/page/page.store';
import { EditorWrapper } from './editorWrapper';

export const EditorBase = () => {
  const { elements } = usePageStore();
  return (
    <EditorWrapper>{React.Children.toArray(elements.map((elementItem) => generateElement(elementItem)))}</EditorWrapper>
  );
};

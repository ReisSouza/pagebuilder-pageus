'use client';

import React from 'react';

import { EditorDrag } from './editorDrag';
import { EditorBase } from './editorBase';
import { usePageStore } from '@/stores/page/page.store';

export const Editor = () => {
  const { viewMode } = usePageStore();

  if (viewMode === 'live') {
    return (
      <EditorDrag>
        <EditorBase />
      </EditorDrag>
    );
  }
  return <EditorBase />;
};

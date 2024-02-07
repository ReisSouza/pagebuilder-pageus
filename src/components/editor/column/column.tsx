import React from 'react';

import { ColumnBase } from './columnBase';
import { ColumnDrag } from './columnDrag';
import { usePageStore } from '@/stores/page/page.store';
import type { IEditorElement } from '@/types/editor/editorElement.type';

export const Column: React.FC<IEditorElement> = ({ ...rest }: IEditorElement) => {
  const { viewMode } = usePageStore();

  if (viewMode === 'live') {
    return (
      <ColumnDrag>
        <ColumnBase {...rest} />
      </ColumnDrag>
    );
  }
  return <ColumnBase {...rest} />;
};

Column.displayName = 'Column';

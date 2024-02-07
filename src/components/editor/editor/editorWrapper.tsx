import type { ReactNode } from 'react';
import { generateID } from '@/utils/defaultElements/generateID';

export const EditorWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div id={generateID({ type: 'editor' })}>{children}</div>;
};

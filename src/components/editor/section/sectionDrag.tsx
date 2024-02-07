import type { ReactNode } from 'react';

export const SectionDrag: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  return <div style={{ width: '100%' }}>{children}</div>;
};

SectionDrag.displayName = 'SectionDrag';

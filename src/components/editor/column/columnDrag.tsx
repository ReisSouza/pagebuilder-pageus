import type { ReactNode } from 'react';
export const ColumnDrag: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

ColumnDrag.displayName = 'ColumnDrag';

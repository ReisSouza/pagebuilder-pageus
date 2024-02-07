import type { ReactNode } from 'react';
export const WidgetDrag: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

WidgetDrag.displayName = 'WidgetDrag';

import type { CSSProperties } from 'react';

export interface IBoxShadow {
  horizontal: number;
  vertical: number;
  blur: number;
  spread: number;
  position: 'inset' | 'inherit';
  color: CSSProperties['color'];
}

import type { CSSProperties } from 'react';
export interface IWrapperCSS extends CSSProperties {
  animated?: string;
  animatedDuration?: string;
  animatedDelay?: number;
  animatedHover?: string;
  animatedDurationHover?: string;
  animatedDelayHover?: number;
}

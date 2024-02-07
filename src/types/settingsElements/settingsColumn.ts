import type { CSSProperties } from 'react';
export interface ISettingsColumn {
  columnCSS: CSSProperties;
  populatedCSS: CSSProperties;
  populatedColumnContentAlign?: CSSProperties['alignContent'];
}

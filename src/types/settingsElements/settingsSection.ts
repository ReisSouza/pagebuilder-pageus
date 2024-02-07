import type { CSSProperties } from 'react';
export interface ISettingsSection {
  containerCSS: CSSProperties;
  sectionCSS: CSSProperties;
  htmlElement: string;
  globalHeadingColor: CSSProperties['color'];
  globalTextColor: CSSProperties['color'];
  globalLinkColor: CSSProperties['color'];
  populateColumnContentAlign?: CSSProperties['alignContent'];
  contentWidthType?: 'box' | 'full';
  sectionHeightType?: 'default' | 'screen' | 'personalized';
}

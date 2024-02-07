import type { CSSProperties } from 'react';

import type { IUnits } from './units.type';
import type { IBoxShadow } from './boxShadow.type';
import type { IBackgroundImage } from './backgroundImage.type';

export interface IContainerCSS extends CSSProperties {
  backgroundImageCustom?: IBackgroundImage;
  boxShadowCustom?: IBoxShadow;
  backgroundImageCustomHover?: IBackgroundImage;
  boxShadowCustomHover?: IBoxShadow;
  transformRotate: number;
  transformRotateX: number;
  transformRotateY: number;
  transformRotatePerspective: number;
  transformTranslatorX: IUnits;
  transformTranslatorY: IUnits;
  transformScale: number;
  transformShewX: number;
  transformShewY: number;
  transformScaleX: number;
  transformScaleY: number;
  transformRotateHover: number;
  transformRotateXHover: number;
  transformRotateYHover: number;
  transformRotatePerspectiveHover: number;
  transformTranslatorXHover: IUnits;
  transformTranslatorYHover: IUnits;
  transformScaleHover: number;
  transformShewXHover: number;
  transformShewYHover: number;
  transformScaleXHover: number;
  transformScaleYHover: number;
  responsibleMobile?: boolean;
  responsibleTablet?: boolean;
  responsibleDesktop?: boolean;
}

export interface IBackgroundImage {
  url?: string;
  type?: 'image' | 'gradient';
  gradientType?: 'linear-gradient' | 'radial-gradient';
  gradientColorPrimary?: string;
  gradientColorSecondary?: string;
  gradientAngle?: number;
  gradientColorPrimaryPercent?: number;
  gradientPosition?: string;
  gradientColorSecondaryPercent?: number;
}

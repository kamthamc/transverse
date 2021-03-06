interface Palette {
  primary: string;
  secondary: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
  text: string;
  alternateText: string;
  background: string;
  alternateBackground: string;
}

interface Layout {
  namedFontSize: (size?: string) => string;
  namedSpacing: (size?: string) => string;
}

type Styles = Layout & Palette;

import { GHOST, WHITE, POSTBOX, POSTBOX_30 } from '../palette';
import latinWithDiacriticsScript from '../fontScripts/latinWithDiacritics';
import {
  REITH_SANS_BOLD,
  REITH_SANS_REGULAR,
  REITH_SERIF_MEDIUM,
} from '../fontFaces';
import reithFontVariants from '../fontVariants/reith';
import withThemeProvider from '../withThemeProvider';

const cymrufywTheme = {
  palette: {
    BRAND_BACKGROUND: POSTBOX,
    BRAND_LOGO: WHITE,
    BRAND_FOREGROUND: GHOST,
    BRAND_HIGHLIGHT: WHITE,
    BRAND_BORDER: POSTBOX_30,
  },
  typography: {
    script: latinWithDiacriticsScript,
    fontVariants: reithFontVariants,
    fontFaces: [REITH_SANS_BOLD, REITH_SANS_REGULAR, REITH_SERIF_MEDIUM],
  },
};

export default withThemeProvider(cymrufywTheme);

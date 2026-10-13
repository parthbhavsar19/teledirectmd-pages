import { tdmdCSS } from '../../lib/tdmd-styles';
import { whatWeTreatCSS } from '../../lib/what-we-treat-styles';
import { darkThemeCSS, darkInlineSafetyNetCSS } from '../../lib/dark-theme-styles';

export default function GlobalStyles() {
  return <style dangerouslySetInnerHTML={{ __html: tdmdCSS + whatWeTreatCSS + darkThemeCSS + darkInlineSafetyNetCSS }} />;
}

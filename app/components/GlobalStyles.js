import { tdmdCSS } from '../../lib/tdmd-styles';
import { whatWeTreatCSS } from '../../lib/what-we-treat-styles';
import { homepageCSS } from '../../lib/homepage-styles';

export default function GlobalStyles() {
  return <style dangerouslySetInnerHTML={{ __html: tdmdCSS + whatWeTreatCSS + homepageCSS }} />;
}

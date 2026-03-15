import { tdmdCSS } from '../../lib/tdmd-styles';

export default function GlobalStyles() {
  return <style dangerouslySetInnerHTML={{ __html: tdmdCSS }} />;
}

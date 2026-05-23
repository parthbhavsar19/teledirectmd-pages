import IndustryPageLayout from '../IndustryPageLayout';
import { INDUSTRY_DATA } from '../industry-data';
import { buildIndustryMetadata } from '../industry-page-factory';

const industry = INDUSTRY_DATA['home-care'];
export const metadata = buildIndustryMetadata(industry);
export default function HomeCareEmployersPage() {
  return <IndustryPageLayout industry={industry} />;
}

import IndustryPageLayout from '../IndustryPageLayout';
import { INDUSTRY_DATA } from '../industry-data';
import { buildIndustryMetadata } from '../industry-page-factory';

const industry = INDUSTRY_DATA.cleaning;
export const metadata = buildIndustryMetadata(industry);
export default function CleaningEmployersPage() {
  return <IndustryPageLayout industry={industry} />;
}

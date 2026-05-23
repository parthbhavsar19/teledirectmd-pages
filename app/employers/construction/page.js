import IndustryPageLayout from '../IndustryPageLayout';
import { INDUSTRY_DATA } from '../industry-data';
import { buildIndustryMetadata } from '../industry-page-factory';

const industry = INDUSTRY_DATA.construction;
export const metadata = buildIndustryMetadata(industry);
export default function ConstructionEmployersPage() {
  return <IndustryPageLayout industry={industry} />;
}

// /cost/covid-19-treatment-cost/
// Static route (takes precedence over app/cost/[slug]). Content: lib/condition-cost-data.js.
import ConditionCostPage, { conditionCostMetadata } from '../../components/ConditionCostPage';

const SLUG = 'covid-19-treatment-cost';

export const metadata = conditionCostMetadata(SLUG);

export default function Page() {
  return <ConditionCostPage slug={SLUG} />;
}

// /cost/online-prescription-cost/
// Static route (takes precedence over app/cost/[slug]). Content: lib/condition-cost-data.js.
import ConditionCostPage, { conditionCostMetadata } from '../../components/ConditionCostPage';

const SLUG = 'online-prescription-cost';

export const metadata = conditionCostMetadata(SLUG);

export default function Page() {
  return <ConditionCostPage slug={SLUG} />;
}

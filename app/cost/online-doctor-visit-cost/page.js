import ConditionCostPage, { conditionCostMetadata } from '../../components/ConditionCostPage';

const SLUG = 'online-doctor-visit-cost';

export const metadata = conditionCostMetadata(SLUG);

export default function Page() {
  return <ConditionCostPage slug={SLUG} />;
}

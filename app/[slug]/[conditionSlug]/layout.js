import PrescribingPolicyScope from '../../components/PrescribingPolicy';

export default function StateConditionLayout({ children, params }) {
  return <PrescribingPolicyScope conditionSlug={params.conditionSlug} showNotice={false}>{children}</PrescribingPolicyScope>;
}

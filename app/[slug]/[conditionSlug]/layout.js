import PrescribingPolicyScope from '../../components/PrescribingPolicy';

export default function StateConditionLayout({ children, params }) {
  return <PrescribingPolicyScope conditionSlug={params.conditionSlug}>{children}</PrescribingPolicyScope>;
}

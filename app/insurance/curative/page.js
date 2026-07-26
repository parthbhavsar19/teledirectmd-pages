import { getCurativeRoster } from '../../../lib/curative-content';
import CurativeHubClient from './CurativeHubClient';

const roster = getCurativeRoster();

export const metadata = {
  title: 'Online Doctor That Accepts Curative Insurance | TeleDirectMD',
  description: `TeleDirectMD is in-network with Curative Commercial PPO, EPO, and self-funded plans in ${roster.length} states under a national provider agreement effective July 7, 2026. Members who complete their annual Baseline Visit pay $0 for a virtual visit. $79 flat self-pay is always available.`,
  alternates: { canonical: 'https://teledirectmd.com/insurance/curative/' },
  openGraph: {
    title: 'Online Doctor That Accepts Curative Insurance | TeleDirectMD',
    description: `In-network with Curative Commercial PPO, EPO, and self-funded plans in ${roster.length} states. Same-day video visits with Parth Bhavsar, MD, board-certified in Family Medicine.`,
    url: 'https://teledirectmd.com/insurance/curative/',
    siteName: 'TeleDirectMD',
    type: 'website',
  },
};

export default function CurativePage() {
  return <CurativeHubClient roster={roster} />;
}

import MediaMentionsClient from './MediaMentionsClient';

export const metadata = {
  title: 'Media Mentions | TeleDirectMD Expert Coverage & Press',
  description:
    'TeleDirectMD physicians are quoted and featured in TIME, Newsweek, British GQ, HuffPost, FOX News Digital, Healthline, and 10+ other major outlets. Browse 25 expert media appearances across nutrition, wellness, infectious disease, and safety.',
  alternates: { canonical: 'https://teledirectmd.com/media-mentions' },
  openGraph: {
    title: 'Media Mentions | TeleDirectMD Expert Coverage & Press',
    description:
      'Expert physician commentary from TeleDirectMD featured in TIME, Newsweek, British GQ, and 14 other major health and lifestyle publications.',
    url: 'https://teledirectmd.com/media-mentions',
    siteName: 'TeleDirectMD',
    type: 'website',
  },
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['WebPage', 'CollectionPage', 'MedicalWebPage'],
      '@id': 'https://teledirectmd.com/media-mentions',
      url: 'https://teledirectmd.com/media-mentions',
      name: 'TeleDirectMD in the Media | Press & Editorial Coverage',
      description:
        'TeleDirectMD physicians are trusted expert sources in national health journalism, featured in 25 articles across TIME, Newsweek, British GQ, and 14 other major outlets.',
      inLanguage: 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://teledirectmd.com',
        url: 'https://teledirectmd.com',
        name: 'TeleDirectMD',
      },
      about: {
        '@type': 'MedicalOrganization',
        name: 'TeleDirectMD',
        url: 'https://teledirectmd.com',
        description:
          'TeleDirectMD is a physician-led telehealth service providing direct access to board-certified doctors via video visit.',
      },
      hasPart: [
        {
          '@type': 'NewsArticle',
          headline: "I'm a Family Medicine Doctor — Here Are the 2 Supplements I Take To Stay Healthy and Well",
          datePublished: '2026-03-12',
          publisher: { '@type': 'Organization', name: 'Parade' },
          url: 'https://parade.com/health/i-am-family-medicine-doctor-these-are-the-supplements-i-take',
        },
        {
          '@type': 'NewsArticle',
          headline: 'Primary Care Physicians Say People Over 50 Should Be Careful With How Often They Eat This One Food',
          datePublished: '2026-03-10',
          publisher: { '@type': 'Organization', name: 'AOL' },
          url: 'https://www.aol.com/primary-care-physicians-people-over-185000300.html',
        },
        {
          '@type': 'NewsArticle',
          headline: '9 Best Watches for Monitoring Your Health, According to Experts',
          datePublished: '2026-02-01',
          publisher: { '@type': 'Organization', name: 'British GQ' },
          url: 'https://www.gq-magazine.co.uk/article/9-best-watches-for-monitoring-your-health-according-to-experts',
        },
        {
          '@type': 'NewsArticle',
          headline: 'Is Taking a Cold Shower Good for You?',
          datePublished: '2025-11-13',
          publisher: { '@type': 'Organization', name: 'TIME' },
          url: 'https://time.com/7331761/cold-shower-benefits-health/',
        },
        {
          '@type': 'NewsArticle',
          headline: 'New Super Flu Variant: What Doctors Want You to Know',
          datePublished: '2025-12-29',
          publisher: { '@type': 'Organization', name: 'Newsweek' },
          url: 'https://www.newsweek.com/new-flu-variant-what-doctors-want-you-to-know-11274513',
        },
        {
          '@type': 'NewsArticle',
          headline: '8 Best Nontoxic Water Bottles for 2026, Tested and Sip-Approved',
          datePublished: '2026-03-02',
          publisher: { '@type': 'Organization', name: 'Yahoo Health' },
          url: 'https://health.yahoo.com/your-body/first-aid-safety/environmental-health/article/best-nontoxic-water-bottles-194103109.html',
        },
        {
          '@type': 'NewsArticle',
          headline: 'Best Weight Loss Medications of 2025',
          datePublished: '2026-02-03',
          publisher: { '@type': 'Organization', name: 'Yahoo Health' },
          url: 'https://health.yahoo.com/p/best-weight-loss-meds/',
        },
        {
          '@type': 'NewsArticle',
          headline: '6 Best N95 Masks in 2025',
          datePublished: '2026-01-27',
          publisher: { '@type': 'Organization', name: 'Everyday Health' },
          url: 'https://www.everydayhealth.com/medical-products/best-n95-masks/',
        },
        {
          '@type': 'NewsArticle',
          headline: 'The Ripeness Level of Your Avocado Actually Matters for Your Health',
          datePublished: '2026-01-19',
          publisher: { '@type': 'Organization', name: 'HuffPost' },
          url: 'https://www.huffpost.com/entry/avocado-ripeness-health-benefits_l_695e8d46e4b04b69aaf3f0b7',
        },
        {
          '@type': 'NewsArticle',
          headline: 'This Common Habit May Be Straining Your Kidneys',
          datePublished: '2026-01-09',
          publisher: { '@type': 'Organization', name: 'EatingWell' },
          url: 'https://www.eatingwell.com/common-mistake-putting-stress-on-kidneys-11881542',
        },
        {
          '@type': 'NewsArticle',
          headline: '2 Collagen Supplements That Actually Work, and 1 to Avoid',
          datePublished: '2026-01-04',
          publisher: { '@type': 'Organization', name: 'SHEfinds' },
          url: 'https://www.shefinds.com/collections/collagen-supplements-actually-work/',
        },
        {
          '@type': 'NewsArticle',
          headline: 'No Insurance? How to See a Doctor Without Insurance',
          datePublished: '2025-12-31',
          publisher: { '@type': 'Organization', name: 'U.S. News & World Report' },
          url: 'https://health.usnews.com/wellness/articles/how-to-see-a-doctor-without-insurance',
        },
        {
          '@type': 'NewsArticle',
          headline: 'This Forgotten Recovery Supplement Deserves a Spot in Your Stack',
          datePublished: '2025-12-23',
          publisher: { '@type': 'Organization', name: "Men's Journal" },
          url: 'https://www.mensjournal.com/health-fitness/nutrition-experts-say-this-forgotten-recovery-supplement-might-deserve-a-spot-in-your-supplement-stack',
        },
        {
          '@type': 'NewsArticle',
          headline: '2 OTC Medications You Should Never, Ever Combine',
          datePublished: '2025-11-08',
          publisher: { '@type': 'Organization', name: 'Parade' },
          url: 'https://parade.com/health/never-combine-these-over-the-counter-medications-according-to-doctors',
        },
        {
          '@type': 'NewsArticle',
          headline: 'Bananas May Be Making Your Smoothies Less Effective',
          datePublished: '2025-11-01',
          publisher: { '@type': 'Organization', name: 'New York Post' },
          url: 'https://nypost.com/2025/11/01/lifestyle/bananas-may-be-making-your-smoothies-less-effective-scientists-say/',
        },
        {
          '@type': 'NewsArticle',
          headline: "Bananas May Be Sabotaging Your Smoothie's Superpowers",
          datePublished: '2025-10-31',
          publisher: { '@type': 'Organization', name: 'FOX News Digital' },
          url: 'https://www.foxnews.com/food-drink/bananas-may-sabotaging-your-smoothies-superpowers-scientists-warn',
        },
        {
          '@type': 'NewsArticle',
          headline: 'Stainless Steel vs. Nonstick Cookware: Which Is Better?',
          datePublished: '2025-10-24',
          publisher: { '@type': 'Organization', name: 'Yahoo Shopping' },
          url: 'https://shopping.yahoo.com/home-garden/kitchen/comparison/stainless-steel-vs-nonstick-cookware-which-ones-better-for-your-kitchen-210959319.html',
        },
        {
          '@type': 'NewsArticle',
          headline: "Amy Sedaris Is Making Brain Health Fun — Here's How",
          datePublished: '2025-10-18',
          publisher: { '@type': 'Organization', name: "Woman's World" },
          url: 'https://www.womansworld.com/aging/brain/amy-sedaris-shares-the-brain-boosting-habit-that-keeps-her-sharp',
        },
        {
          '@type': 'NewsArticle',
          headline: 'Common Nasal Spray May Help Lower COVID-19, Cold Risk',
          datePublished: '2025-10-06',
          publisher: { '@type': 'Organization', name: 'Healthline' },
          url: 'https://www.healthline.com/health-news/common-nasal-spray-may-prevent-covid-19-study',
        },
        {
          '@type': 'NewsArticle',
          headline: 'Does Emergen-C Actually Work? Experts Weigh In.',
          datePublished: '2025-09-19',
          publisher: { '@type': 'Organization', name: 'Yahoo Wellness' },
          url: 'https://health.yahoo.com/wellness/nutrition/vitamins-supplements/article/does-emergen-c-work-003908143.html',
        },
        {
          '@type': 'NewsArticle',
          headline: 'Woman Drinks Matcha Every Week — Shock Over Why She Ends Up in Hospital',
          datePublished: '2025-09-13',
          publisher: { '@type': 'Organization', name: 'Newsweek' },
          url: 'https://www.newsweek.com/woman-drinks-matcha-every-week-shock-ends-hospital-2127630',
        },
        {
          '@type': 'NewsArticle',
          headline: "I Tried the 30-Cent 'Miracle Chill Pill' for Anxiety",
          datePublished: '2025-09-09',
          publisher: { '@type': 'Organization', name: 'Daily Mail' },
          url: 'https://www.dailymail.co.uk/health/article-15067045/i-tried-propranolol-chill-pill-anxiety.html',
        },
        {
          '@type': 'NewsArticle',
          headline: 'Diabetes Diet: How the Mediterranean Plan Helps Lower Risk',
          datePublished: '2025-09-03',
          publisher: { '@type': 'Organization', name: "Woman's World" },
          url: 'https://www.womansworld.com/wellness/diabetes/diabetes-diet-tips-that-steady-your-blood-sugar-naturally',
        },
        {
          '@type': 'NewsArticle',
          headline: 'These 6 Foods Can Help Lower Your Cholesterol Naturally',
          datePublished: '2025-09-02',
          publisher: { '@type': 'Organization', name: 'SHEfinds' },
          url: 'https://www.shefinds.com/collections/foods-lower-cholesterol-naturally-flaxseeds-more/',
        },
        {
          '@type': 'NewsArticle',
          headline: 'This Simple Water Trick May Help You Lose Weight — No Diet Needed',
          datePublished: '2025-09-02',
          publisher: { '@type': 'Organization', name: 'Yahoo Life' },
          url: 'https://www.yahoo.com/lifestyle/articles/water-weight-loss-much-drink-153830810.html',
        },
      ],
    },
  ],
};

export default function MediaMentionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MediaMentionsClient />
    </>
  );
}

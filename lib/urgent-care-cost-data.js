// Urgent care cost page data (app/cost/urgent-care-cost-without-insurance).
// Every number here comes from a public source retrieved on 2026-11-24.
// Refresh rules: Medicare amounts change every January 1 (CY 2027 conversion
// factor is lower), NADAC changes weekly (refresh monthly), HCCI and KFF yearly.
//
// Medicare 2026: national non-facility amounts = total RVU x $33.4009 (CMS PFS
// "Indicators for 2026", pfs.data.cms.gov dataset 7c7df311-5315-4f38-b9ed-fd62f8bebe11).
// State ranges = (work RVU x work GPCI + PE RVU x PE GPCI + MP RVU x MP GPCI) x CF,
// using CMS "Localities for 2026" (localities2026-01-01-2026.csv). These are
// TeleDirectMD calculations from CMS data, not numbers CMS publishes per state.
// The District of Columbia locality also covers the Maryland and Virginia suburbs,
// so it is counted in DC, Maryland and Virginia.

export const UC_DATA_CHECKED = '2026-11-24';

export const MEDICARE_2026 = {
  conversionFactor: 33.4009,
  national: { v99202: 75.15, v99203: 117.57, v99204: 177.36, v99212: 59.45, v99213: 95.19, v99214: 135.61, x71046: 33.07, x73610: 37.07, x73130: 38.08 },
  states: [
  {
    "state": "Alabama",
    "localities": 1,
    "v99203": [
      107.9,
      107.9
    ],
    "v99213": [
      87.79,
      87.79
    ],
    "v99214": [
      125.23,
      125.23
    ],
    "x71046": [
      29.6,
      29.6
    ]
  },
  {
    "state": "Alaska",
    "localities": 1,
    "v99203": [
      145.71,
      145.71
    ],
    "v99213": [
      118.72,
      118.72
    ],
    "v99214": [
      169.92,
      169.92
    ],
    "x71046": [
      37.92,
      37.92
    ]
  },
  {
    "state": "Arizona",
    "localities": 1,
    "v99203": [
      114.98,
      114.98
    ],
    "v99213": [
      93.25,
      93.25
    ],
    "v99214": [
      132.86,
      132.86
    ],
    "x71046": [
      32.18,
      32.18
    ]
  },
  {
    "state": "Arkansas",
    "localities": 1,
    "v99203": [
      106.69,
      106.69
    ],
    "v99213": [
      86.86,
      86.86
    ],
    "v99214": [
      123.92,
      123.92
    ],
    "x71046": [
      29.16,
      29.16
    ]
  },
  {
    "state": "California",
    "localities": 29,
    "v99203": [
      121.64,
      146.95
    ],
    "v99213": [
      99.22,
      120.13
    ],
    "v99214": [
      140.94,
      170.02
    ],
    "x71046": [
      35.31,
      44.75
    ]
  },
  {
    "state": "Colorado",
    "localities": 1,
    "v99203": [
      120.8,
      120.8
    ],
    "v99213": [
      98.18,
      98.18
    ],
    "v99214": [
      139.63,
      139.63
    ],
    "x71046": [
      34.63,
      34.63
    ]
  },
  {
    "state": "Connecticut",
    "localities": 1,
    "v99203": [
      124.29,
      124.29
    ],
    "v99213": [
      100.45,
      100.45
    ],
    "v99214": [
      143.02,
      143.02
    ],
    "x71046": [
      35.3,
      35.3
    ]
  },
  {
    "state": "Delaware",
    "localities": 1,
    "v99203": [
      116.59,
      116.59
    ],
    "v99213": [
      94.52,
      94.52
    ],
    "v99214": [
      134.65,
      134.65
    ],
    "x71046": [
      32.73,
      32.73
    ]
  },
  {
    "state": "District of Columbia",
    "localities": 1,
    "v99203": [
      131.52,
      131.52
    ],
    "v99213": [
      106.56,
      106.56
    ],
    "v99214": [
      151.49,
      151.49
    ],
    "x71046": [
      38.04,
      38.04
    ]
  },
  {
    "state": "Florida",
    "localities": 3,
    "v99203": [
      117.67,
      128.15
    ],
    "v99213": [
      94.56,
      101.79
    ],
    "v99214": [
      135.02,
      145.5
    ],
    "x71046": [
      32.29,
      35.13
    ]
  },
  {
    "state": "Georgia",
    "localities": 2,
    "v99203": [
      112.25,
      119.75
    ],
    "v99213": [
      90.5,
      96.71
    ],
    "v99214": [
      129.29,
      137.81
    ],
    "x71046": [
      30.45,
      33.63
    ]
  },
  {
    "state": "Hawaii",
    "localities": 1,
    "v99203": [
      123.37,
      123.37
    ],
    "v99213": [
      100.61,
      100.61
    ],
    "v99214": [
      142.79,
      142.79
    ],
    "x71046": [
      36.26,
      36.26
    ]
  },
  {
    "state": "Idaho",
    "localities": 1,
    "v99203": [
      110.05,
      110.05
    ],
    "v99213": [
      89.71,
      89.71
    ],
    "v99214": [
      127.8,
      127.8
    ],
    "x71046": [
      30.68,
      30.68
    ]
  },
  {
    "state": "Illinois",
    "localities": 4,
    "v99203": [
      115.47,
      125.16
    ],
    "v99213": [
      92.64,
      99.63
    ],
    "v99214": [
      132.43,
      142.45
    ],
    "x71046": [
      31.23,
      34.32
    ]
  },
  {
    "state": "Indiana",
    "localities": 1,
    "v99203": [
      110.53,
      110.53
    ],
    "v99213": [
      90.09,
      90.09
    ],
    "v99214": [
      128.33,
      128.33
    ],
    "x71046": [
      30.87,
      30.87
    ]
  },
  {
    "state": "Iowa",
    "localities": 1,
    "v99203": [
      109.35,
      109.35
    ],
    "v99213": [
      89.23,
      89.23
    ],
    "v99214": [
      127.11,
      127.11
    ],
    "x71046": [
      30.51,
      30.51
    ]
  },
  {
    "state": "Kansas",
    "localities": 1,
    "v99203": [
      109.28,
      109.28
    ],
    "v99213": [
      89.02,
      89.02
    ],
    "v99214": [
      126.88,
      126.88
    ],
    "x71046": [
      30.3,
      30.3
    ]
  },
  {
    "state": "Kentucky",
    "localities": 1,
    "v99203": [
      110.59,
      110.59
    ],
    "v99213": [
      89.52,
      89.52
    ],
    "v99214": [
      127.8,
      127.8
    ],
    "x71046": [
      30.19,
      30.19
    ]
  },
  {
    "state": "Louisiana",
    "localities": 2,
    "v99203": [
      110.59,
      114.83
    ],
    "v99213": [
      89.46,
      92.72
    ],
    "v99214": [
      127.73,
      132.3
    ],
    "x71046": [
      30.12,
      31.66
    ]
  },
  {
    "state": "Maine",
    "localities": 2,
    "v99203": [
      110.85,
      115.07
    ],
    "v99213": [
      90.16,
      93.64
    ],
    "v99214": [
      128.5,
      133.28
    ],
    "x71046": [
      30.78,
      32.59
    ]
  },
  {
    "state": "Maryland",
    "localities": 3,
    "v99203": [
      118.37,
      131.52
    ],
    "v99213": [
      95.97,
      106.56
    ],
    "v99214": [
      136.67,
      151.49
    ],
    "x71046": [
      33.39,
      38.04
    ]
  },
  {
    "state": "Massachusetts",
    "localities": 2,
    "v99203": [
      120.46,
      130.58
    ],
    "v99213": [
      97.86,
      106.1
    ],
    "v99214": [
      139.22,
      150.68
    ],
    "x71046": [
      34.39,
      38.21
    ]
  },
  {
    "state": "Michigan",
    "localities": 2,
    "v99203": [
      113.15,
      119.18
    ],
    "v99213": [
      91.34,
      95.55
    ],
    "v99214": [
      130.4,
      136.48
    ],
    "x71046": [
      30.94,
      32.64
    ]
  },
  {
    "state": "Minnesota",
    "localities": 1,
    "v99203": [
      115.51,
      115.51
    ],
    "v99213": [
      94.49,
      94.49
    ],
    "v99214": [
      134.25,
      134.25
    ],
    "x71046": [
      33.33,
      33.33
    ]
  },
  {
    "state": "Mississippi",
    "localities": 1,
    "v99203": [
      108.01,
      108.01
    ],
    "v99213": [
      87.63,
      87.63
    ],
    "v99214": [
      125.1,
      125.1
    ],
    "x71046": [
      29.36,
      29.36
    ]
  },
  {
    "state": "Missouri",
    "localities": 3,
    "v99203": [
      109.32,
      114.76
    ],
    "v99213": [
      88.38,
      92.86
    ],
    "v99214": [
      126.27,
      132.41
    ],
    "x71046": [
      29.55,
      31.85
    ]
  },
  {
    "state": "Montana",
    "localities": 1,
    "v99203": [
      117.56,
      117.56
    ],
    "v99213": [
      95.19,
      95.19
    ],
    "v99214": [
      135.6,
      135.6
    ],
    "x71046": [
      33.07,
      33.07
    ]
  },
  {
    "state": "Nebraska",
    "localities": 1,
    "v99203": [
      109.72,
      109.72
    ],
    "v99213": [
      89.57,
      89.57
    ],
    "v99214": [
      127.56,
      127.56
    ],
    "x71046": [
      30.7,
      30.7
    ]
  },
  {
    "state": "Nevada",
    "localities": 1,
    "v99203": [
      116.74,
      116.74
    ],
    "v99213": [
      94.74,
      94.74
    ],
    "v99214": [
      134.89,
      134.89
    ],
    "x71046": [
      32.98,
      32.98
    ]
  },
  {
    "state": "New Hampshire",
    "localities": 1,
    "v99203": [
      119.31,
      119.31
    ],
    "v99213": [
      96.82,
      96.82
    ],
    "v99214": [
      137.76,
      137.76
    ],
    "x71046": [
      34.02,
      34.02
    ]
  },
  {
    "state": "New Jersey",
    "localities": 2,
    "v99203": [
      125.64,
      130.71
    ],
    "v99213": [
      101.71,
      105.93
    ],
    "v99214": [
      144.77,
      150.65
    ],
    "x71046": [
      35.75,
      37.62
    ]
  },
  {
    "state": "New Mexico",
    "localities": 1,
    "v99203": [
      113.77,
      113.77
    ],
    "v99213": [
      91.75,
      91.75
    ],
    "v99214": [
      131.0,
      131.0
    ],
    "x71046": [
      31.09,
      31.09
    ]
  },
  {
    "state": "New York",
    "localities": 5,
    "v99203": [
      113.04,
      136.68
    ],
    "v99213": [
      91.86,
      109.76
    ],
    "v99214": [
      130.88,
      156.34
    ],
    "x71046": [
      31.6,
      38.89
    ]
  },
  {
    "state": "North Carolina",
    "localities": 1,
    "v99203": [
      111.7,
      111.7
    ],
    "v99213": [
      90.84,
      90.84
    ],
    "v99214": [
      129.44,
      129.44
    ],
    "x71046": [
      31.12,
      31.12
    ]
  },
  {
    "state": "North Dakota",
    "localities": 1,
    "v99203": [
      114.4,
      114.4
    ],
    "v99213": [
      93.41,
      93.41
    ],
    "v99214": [
      132.83,
      132.83
    ],
    "x71046": [
      32.67,
      32.67
    ]
  },
  {
    "state": "Ohio",
    "localities": 1,
    "v99203": [
      112.5,
      112.5
    ],
    "v99213": [
      90.97,
      90.97
    ],
    "v99214": [
      129.83,
      129.83
    ],
    "x71046": [
      30.86,
      30.86
    ]
  },
  {
    "state": "Oklahoma",
    "localities": 1,
    "v99203": [
      110.09,
      110.09
    ],
    "v99213": [
      89.3,
      89.3
    ],
    "v99214": [
      127.42,
      127.42
    ],
    "x71046": [
      30.2,
      30.2
    ]
  },
  {
    "state": "Oregon",
    "localities": 2,
    "v99203": [
      115.75,
      123.58
    ],
    "v99213": [
      94.1,
      100.53
    ],
    "v99214": [
      133.95,
      142.85
    ],
    "x71046": [
      32.77,
      35.83
    ]
  },
  {
    "state": "Pennsylvania",
    "localities": 2,
    "v99203": [
      112.46,
      121.97
    ],
    "v99213": [
      91.03,
      98.55
    ],
    "v99214": [
      129.87,
      140.4
    ],
    "x71046": [
      30.95,
      34.36
    ]
  },
  {
    "state": "Puerto Rico",
    "localities": 1,
    "v99203": [
      118.14,
      118.14
    ],
    "v99213": [
      95.68,
      95.68
    ],
    "v99214": [
      136.27,
      136.27
    ],
    "x71046": [
      33.34,
      33.34
    ]
  },
  {
    "state": "Rhode Island",
    "localities": 1,
    "v99203": [
      119.95,
      119.95
    ],
    "v99213": [
      97.3,
      97.3
    ],
    "v99214": [
      138.53,
      138.53
    ],
    "x71046": [
      33.97,
      33.97
    ]
  },
  {
    "state": "South Carolina",
    "localities": 1,
    "v99203": [
      112.3,
      112.3
    ],
    "v99213": [
      91.04,
      91.04
    ],
    "v99214": [
      129.83,
      129.83
    ],
    "x71046": [
      31.04,
      31.04
    ]
  },
  {
    "state": "South Dakota",
    "localities": 1,
    "v99203": [
      114.02,
      114.02
    ],
    "v99213": [
      93.2,
      93.2
    ],
    "v99214": [
      132.5,
      132.5
    ],
    "x71046": [
      32.62,
      32.62
    ]
  },
  {
    "state": "Tennessee",
    "localities": 1,
    "v99203": [
      109.75,
      109.75
    ],
    "v99213": [
      89.36,
      89.36
    ],
    "v99214": [
      127.36,
      127.36
    ],
    "x71046": [
      30.45,
      30.45
    ]
  },
  {
    "state": "Texas",
    "localities": 8,
    "v99203": [
      111.9,
      120.48
    ],
    "v99213": [
      90.59,
      97.77
    ],
    "v99214": [
      129.26,
      139.08
    ],
    "x71046": [
      30.73,
      34.48
    ]
  },
  {
    "state": "U.S. Virgin Islands",
    "localities": 1,
    "v99203": [
      118.14,
      118.14
    ],
    "v99213": [
      95.68,
      95.68
    ],
    "v99214": [
      136.27,
      136.27
    ],
    "x71046": [
      33.34,
      33.34
    ]
  },
  {
    "state": "Utah",
    "localities": 1,
    "v99203": [
      113.5,
      113.5
    ],
    "v99213": [
      91.96,
      91.96
    ],
    "v99214": [
      131.12,
      131.12
    ],
    "x71046": [
      31.48,
      31.48
    ]
  },
  {
    "state": "Vermont",
    "localities": 1,
    "v99203": [
      114.34,
      114.34
    ],
    "v99213": [
      93.22,
      93.22
    ],
    "v99214": [
      132.63,
      132.63
    ],
    "x71046": [
      32.48,
      32.48
    ]
  },
  {
    "state": "Virginia",
    "localities": 2,
    "v99203": [
      115.0,
      131.52
    ],
    "v99213": [
      93.48,
      106.56
    ],
    "v99214": [
      133.1,
      151.49
    ],
    "x71046": [
      32.44,
      38.04
    ]
  },
  {
    "state": "Washington",
    "localities": 2,
    "v99203": [
      120.1,
      132.61
    ],
    "v99213": [
      97.62,
      107.88
    ],
    "v99214": [
      138.86,
      153.12
    ],
    "x71046": [
      34.34,
      39.06
    ]
  },
  {
    "state": "West Virginia",
    "localities": 1,
    "v99203": [
      112.17,
      112.17
    ],
    "v99213": [
      90.1,
      90.1
    ],
    "v99214": [
      128.87,
      128.87
    ],
    "x71046": [
      30.03,
      30.03
    ]
  },
  {
    "state": "Wisconsin",
    "localities": 1,
    "v99203": [
      111.4,
      111.4
    ],
    "v99213": [
      91.06,
      91.06
    ],
    "v99214": [
      129.57,
      129.57
    ],
    "x71046": [
      31.54,
      31.54
    ]
  },
  {
    "state": "Wyoming",
    "localities": 1,
    "v99203": [
      116.18,
      116.18
    ],
    "v99213": [
      94.41,
      94.41
    ],
    "v99214": [
      134.39,
      134.39
    ],
    "x71046": [
      32.89,
      32.89
    ]
  }
],
};

// NADAC (CMS National Average Drug Acquisition Cost), as_of_date 2026-11-25 file,
// effective_date 2026-11-18, per unit, generic. This is what retail pharmacies
// pay to buy the drug, not the price a patient pays.
export const NADAC = {
  asOf: '2026-11-25',
  effective: '2026-11-18',
  rows: [
    { drug: 'Amoxicillin 500 mg capsule', perUnit: 0.07753, course: '30 capsules (a 10 day course)', units: 30 },
    { drug: 'Amoxicillin and clavulanate 875/125 mg tablet', perUnit: 0.27877, course: '14 tablets (a 7 day course)', units: 14 },
    { drug: 'Nitrofurantoin monohydrate/macrocrystals 100 mg capsule', perUnit: 0.26808, course: '10 capsules (a 5 day course)', units: 10 },
    { drug: 'Oseltamivir 75 mg capsule', perUnit: 0.81527, course: '10 capsules (a 5 day course)', units: 10 },
  ],
};

// HCCI brief by Kelsey Burke, January 28, 2026 ("Urgent Care Spending Increased
// by 50 percent over 5 years driven by Higher Use"). Employer-sponsored insurance
// claims, 2022. The brief reports "average price" per evaluation and management visit;
// it does not define the payer split, so the page does not either.
export const HCCI_2022 = {
  urgentCare: 220, primaryCare: 224, er: 2256,
  utiPrice: { urgentCare: 218, primaryCare: 167, er: 2511 },
  utiOutOfPocket: { urgentCare: 83, primaryCare: 61, er: 545 },
};

// KFF, Key Facts about the Uninsured Population, June 16, 2026 (ACS 2024).
export const KFF_UNINSURED_2024 = { millions: 26.7, rate: 9.8 };

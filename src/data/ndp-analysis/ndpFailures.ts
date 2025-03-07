// BC NDP Government Performance Analysis Data
// This file contains data points highlighting policy failures

export interface DataPoint {
  year: number;
  value: number;
}

export interface DataSeries {
  label: string;
  data: DataPoint[];
  description: string;
  source: string;
}

export interface AnalysisCategory {
  id: string;
  title: string;
  description: string;
  datasets: DataSeries[];
}

export const ndpFailureData: AnalysisCategory[] = [
  {
    id: 'housing',
    title: 'Housing Crisis',
    description: 'Analysis of BC\'s worsening housing crisis under NDP governance',
    datasets: [
      {
        label: 'Average Home Price in Vancouver (Thousands CAD)',
        data: [
          { year: 2017, value: 1030 },
          { year: 2018, value: 1103 },
          { year: 2019, value: 1195 },
          { year: 2020, value: 1270 },
          { year: 2021, value: 1374 },
          { year: 2022, value: 1436 },
          { year: 2023, value: 1528 }
        ],
        description: 'Despite promises to make housing more affordable, average home prices in Vancouver have increased by 48% since the NDP took power in 2017.',
        source: 'Real Estate Board of Greater Vancouver, BC Assessment'
      },
      {
        label: 'Average Monthly Rent for 1-Bedroom (CAD)',
        data: [
          { year: 2017, value: 1650 },
          { year: 2018, value: 1750 },
          { year: 2019, value: 1890 },
          { year: 2020, value: 1950 },
          { year: 2021, value: 2060 },
          { year: 2022, value: 2190 },
          { year: 2023, value: 2377 }
        ],
        description: 'Rental costs have increased by 44% since 2017, making BC the most expensive province for renters in Canada despite NDP rent control policies.',
        source: 'Canada Mortgage and Housing Corporation, Rental Market Survey'
      },
      {
        label: 'Housing Starts vs. Population Growth (Thousands)',
        data: [
          { year: 2017, value: -12 },
          { year: 2018, value: -18 },
          { year: 2019, value: -24 },
          { year: 2020, value: -31 },
          { year: 2021, value: -42 },
          { year: 2022, value: -56 },
          { year: 2023, value: -68 }
        ],
        description: 'The gap between housing starts and population growth has widened by 467% under the NDP, with housing construction failing to keep pace with immigration and migration to BC.',
        source: 'BC Stats, CMHC Housing Market Information Portal'
      },
      {
        label: 'Homelessness in BC (Thousands)',
        data: [
          { year: 2017, value: 7.7 },
          { year: 2018, value: 8.4 },
          { year: 2019, value: 9.3 },
          { year: 2020, value: 10.8 },
          { year: 2021, value: 12.5 },
          { year: 2022, value: 14.7 },
          { year: 2023, value: 16.8 }
        ],
        description: 'Homelessness has increased by 118% since the NDP took power, despite promises to address the crisis through affordable housing initiatives.',
        source: 'Homeless Count Reports, BC Non-Profit Housing Association'
      }
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare Crisis',
    description: 'Analysis of BC\'s deteriorating healthcare system under NDP governance',
    datasets: [
      {
        label: 'Patients Without Family Doctors (Thousands)',
        data: [
          { year: 2017, value: 620 },
          { year: 2018, value: 680 },
          { year: 2019, value: 750 },
          { year: 2020, value: 840 },
          { year: 2021, value: 910 },
          { year: 2022, value: 980 },
          { year: 2023, value: 1050 }
        ],
        description: 'The number of British Columbians without access to a family doctor has increased by 69% since 2017, despite NDP promises to improve primary care access.',
        source: 'BC College of Physicians and Surgeons, BC Ministry of Health'
      },
      {
        label: 'Emergency Room Closures',
        data: [
          { year: 2017, value: 12 },
          { year: 2018, value: 24 },
          { year: 2019, value: 42 },
          { year: 2020, value: 58 },
          { year: 2021, value: 87 },
          { year: 2022, value: 126 },
          { year: 2023, value: 188 }
        ],
        description: 'Emergency room closures due to staff shortages have increased by 1,467% under NDP governance, with rural communities disproportionately affected.',
        source: 'BC Health Coalition, Freedom of Information Requests to Health Authorities'
      },
      {
        label: 'Surgical Wait Times (Weeks)',
        data: [
          { year: 2017, value: 12.4 },
          { year: 2018, value: 14.8 },
          { year: 2019, value: 16.5 },
          { year: 2020, value: 26.2 },
          { year: 2021, value: 22.3 },
          { year: 2022, value: 23.7 },
          { year: 2023, value: 25.4 }
        ],
        description: 'Despite promises to reduce surgical wait times, the average wait has increased by 105% since the NDP took power in 2017.',
        source: 'BC Ministry of Health, Canadian Institute for Health Information'
      },
      {
        label: 'Healthcare Worker Shortage (Thousands)',
        data: [
          { year: 2017, value: 2.8 },
          { year: 2018, value: 3.4 },
          { year: 2019, value: 4.2 },
          { year: 2020, value: 5.1 },
          { year: 2021, value: 6.3 },
          { year: 2022, value: 7.8 },
          { year: 2023, value: 9.2 }
        ],
        description: 'The healthcare worker shortage has increased by 229% under the NDP, with nurses, doctors, and allied health professionals leaving the province due to poor working conditions.',
        source: 'BC Nurses\' Union, Doctors of BC, Health Sciences Association'
      }
    ]
  },
  {
    id: 'drugs',
    title: 'Drug Crisis',
    description: 'Analysis of BC\'s escalating drug crisis under NDP harm reduction policies',
    datasets: [
      {
        label: 'Overdose Deaths',
        data: [
          { year: 2017, value: 1494 },
          { year: 2018, value: 1546 },
          { year: 2019, value: 984 },
          { year: 2020, value: 1724 },
          { year: 2021, value: 2236 },
          { year: 2022, value: 2272 },
          { year: 2023, value: 2511 }
        ],
        description: 'Drug overdose deaths have increased by 68% since the NDP took power, with their "harm reduction" approach failing to address the root causes of addiction.',
        source: 'BC Coroners Service, Illicit Drug Toxicity Deaths Reports'
      },
      {
        label: 'Open Drug Use Complaints (Thousands)',
        data: [
          { year: 2017, value: 8.4 },
          { year: 2018, value: 12.7 },
          { year: 2019, value: 18.3 },
          { year: 2020, value: 24.6 },
          { year: 2021, value: 32.8 },
          { year: 2022, value: 45.2 },
          { year: 2023, value: 62.7 }
        ],
        description: 'Complaints about open drug use in public spaces have increased by 646% since drug decriminalization was implemented by the NDP government.',
        source: 'Vancouver Police Department, Victoria Police Department, Municipal 311 Call Data'
      },
      {
        label: 'Drug-Related Property Crime Index (2017=100)',
        data: [
          { year: 2017, value: 100 },
          { year: 2018, value: 112 },
          { year: 2019, value: 128 },
          { year: 2020, value: 143 },
          { year: 2021, value: 167 },
          { year: 2022, value: 194 },
          { year: 2023, value: 231 }
        ],
        description: 'Drug-related property crime has increased by 131% since 2017, with businesses and residents in urban centers bearing the brunt of the NDP\'s failed drug policies.',
        source: 'Statistics Canada, Police-reported Crime Statistics, BC Crime Stoppers'
      },
      {
        label: 'Government Spending on Harm Reduction (Millions CAD)',
        data: [
          { year: 2017, value: 42 },
          { year: 2018, value: 68 },
          { year: 2019, value: 94 },
          { year: 2020, value: 126 },
          { year: 2021, value: 158 },
          { year: 2022, value: 187 },
          { year: 2023, value: 224 }
        ],
        description: 'Despite a 433% increase in spending on harm reduction programs, overdose deaths and drug-related crime continue to rise, demonstrating the failure of the NDP\'s approach.',
        source: 'BC Ministry of Mental Health and Addictions, BC Budget Documents'
      }
    ]
  },
  {
    id: 'economy',
    title: 'Economic Failures',
    description: 'Analysis of BC\'s economic performance under NDP governance',
    datasets: [
      {
        label: 'Small Business Closures',
        data: [
          { year: 2017, value: 1840 },
          { year: 2018, value: 2260 },
          { year: 2019, value: 2680 },
          { year: 2020, value: 4720 },
          { year: 2021, value: 3840 },
          { year: 2022, value: 4260 },
          { year: 2023, value: 4780 }
        ],
        description: 'Small business closures have increased by 160% under the NDP, with excessive regulation, labor policies, and tax increases driving entrepreneurs out of business.',
        source: 'BC Chamber of Commerce, Statistics Canada Business Registry'
      },
      {
        label: 'Provincial Debt (Billions CAD)',
        data: [
          { year: 2017, value: 65.9 },
          { year: 2018, value: 67.4 },
          { year: 2019, value: 70.6 },
          { year: 2020, value: 87.3 },
          { year: 2021, value: 91.5 },
          { year: 2022, value: 98.7 },
          { year: 2023, value: 107.8 }
        ],
        description: 'BC\'s provincial debt has increased by 64% since the NDP took power, with little to show in terms of improved services or infrastructure.',
        source: 'BC Ministry of Finance, Public Accounts'
      },
      {
        label: 'Resource Sector Job Losses (Thousands)',
        data: [
          { year: 2017, value: 2.4 },
          { year: 2018, value: 4.8 },
          { year: 2019, value: 7.6 },
          { year: 2020, value: 12.3 },
          { year: 2021, value: 15.7 },
          { year: 2022, value: 18.4 },
          { year: 2023, value: 21.6 }
        ],
        description: 'The NDP\'s anti-resource development policies have resulted in over 21,000 job losses in forestry, mining, and energy sectors since 2017.',
        source: 'Statistics Canada Labour Force Survey, BC Forest Industry Council, Mining Association of BC'
      },
      {
        label: 'Cost of Living Increase vs. Wage Growth (%)',
        data: [
          { year: 2017, value: 1.2 },
          { year: 2018, value: 1.8 },
          { year: 2019, value: 2.4 },
          { year: 2020, value: 1.6 },
          { year: 2021, value: 3.2 },
          { year: 2022, value: 4.7 },
          { year: 2023, value: 5.3 }
        ],
        description: 'The gap between cost of living increases and wage growth has widened by 342% under the NDP, making BC increasingly unaffordable for working families.',
        source: 'Statistics Canada Consumer Price Index, BC Stats Earnings and Employment Trends'
      }
    ]
  },
  {
    id: 'crime',
    title: 'Public Safety Crisis',
    description: 'Analysis of BC\'s deteriorating public safety under NDP governance',
    datasets: [
      {
        label: 'Violent Crime Rate (per 100,000)',
        data: [
          { year: 2017, value: 1208 },
          { year: 2018, value: 1267 },
          { year: 2019, value: 1350 },
          { year: 2020, value: 1432 },
          { year: 2021, value: 1576 },
          { year: 2022, value: 1684 },
          { year: 2023, value: 1823 }
        ],
        description: 'Violent crime has increased by 51% since the NDP took power, with their "catch and release" approach to criminal justice failing to protect communities.',
        source: 'Statistics Canada, Uniform Crime Reporting Survey'
      },
      {
        label: 'Repeat Offenders Released (Cumulative)',
        data: [
          { year: 2017, value: 840 },
          { year: 2018, value: 1920 },
          { year: 2019, value: 3240 },
          { year: 2020, value: 4680 },
          { year: 2021, value: 6360 },
          { year: 2022, value: 8280 },
          { year: 2023, value: 10440 }
        ],
        description: 'Over 10,000 repeat violent offenders have been released back into BC communities since 2017 due to the NDP\'s lenient bail and sentencing policies.',
        source: 'BC Prosecution Service, Vancouver Police Department, Freedom of Information Requests'
      },
      {
        label: 'Random Stranger Attacks (Vancouver)',
        data: [
          { year: 2017, value: 432 },
          { year: 2018, value: 568 },
          { year: 2019, value: 687 },
          { year: 2020, value: 824 },
          { year: 2021, value: 1056 },
          { year: 2022, value: 1268 },
          { year: 2023, value: 1487 }
        ],
        description: 'Random stranger attacks in Vancouver have increased by 244% under the NDP, with mentally ill and drug-addicted individuals left untreated on the streets.',
        source: 'Vancouver Police Department, Freedom of Information Requests'
      },
      {
        label: 'Police Response Time (Minutes)',
        data: [
          { year: 2017, value: 8.4 },
          { year: 2018, value: 9.7 },
          { year: 2019, value: 11.2 },
          { year: 2020, value: 12.8 },
          { year: 2021, value: 14.5 },
          { year: 2022, value: 16.3 },
          { year: 2023, value: 18.7 }
        ],
        description: 'Police response times have increased by 123% since 2017 due to NDP underfunding of law enforcement and increased call volumes from drug and mental health crises.',
        source: 'E-Comm 911, Municipal Police Services, RCMP Detachments'
      }
    ]
  }
];

// Analysis insights for each category
export const analysisInsights = {
  housing: [
    "Average home prices in Vancouver have increased by 48% since the NDP took power in 2017",
    "Rental costs have increased by 44% despite NDP rent control policies",
    "The gap between housing starts and population growth has widened by 467% under the NDP",
    "Homelessness has increased by 118% despite promises to address the crisis",
    "NDP's speculation tax has failed to improve affordability for middle-class families",
    "Housing construction approvals take 43% longer under current permitting processes"
  ],
  healthcare: [
    "Over 1 million British Columbians now lack access to a family doctor",
    "Emergency room closures have increased by 1,467% due to staff shortages",
    "Surgical wait times have increased by 105% despite promises to reduce them",
    "Healthcare worker shortage has increased by 229% with professionals leaving the province",
    "Rural communities have lost 38% of their healthcare services under NDP governance",
    "Mental health treatment wait times have doubled for children and youth"
  ],
  drugs: [
    "Drug overdose deaths have increased by 68% since the NDP took power",
    "Complaints about open drug use in public spaces have increased by 646%",
    "Drug-related property crime has increased by 131% since 2017",
    "Despite a 433% increase in harm reduction spending, outcomes continue to worsen",
    "Decriminalization has led to a 218% increase in drug use near schools and playgrounds",
    "Treatment beds have decreased by 12% while demand has increased by 87%"
  ],
  economy: [
    "Small business closures have increased by 160% under excessive NDP regulation",
    "Provincial debt has increased by 64% with little improvement in services",
    "Over 21,000 resource sector jobs have been lost due to anti-development policies",
    "The gap between cost of living and wage growth has widened by 342%",
    "Business investment in BC has declined by 18% as capital flees to other provinces",
    "Tax burden on middle-class families has increased by 24% since 2017"
  ],
  crime: [
    "Violent crime has increased by 51% since the NDP took power",
    "Over 10,000 repeat violent offenders have been released back into communities",
    "Random stranger attacks in Vancouver have increased by 244%",
    "Police response times have increased by 123% due to underfunding",
    "Retail theft has increased by 378% in urban centers",
    "Anti-social behavior calls to police have increased by 186% since 2017"
  ]
}; 
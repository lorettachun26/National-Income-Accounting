export interface ConceptSection {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  keyPoints: {
    title: string;
    content: string;
    bullets?: string[];
    formula?: string;
    highlight?: string;
    caution?: string;
  }[];
  quickCheck?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const CONCEPTS_DATA: ConceptSection[] = [
  {
    id: 'gdp-definition',
    title: 'GDP Definition & Core Nature',
    subtitle: 'The foundation of national income measurement',
    badge: 'Core Concept',
    keyPoints: [
      {
        title: 'Official Definition of GDP',
        content: 'Gross Domestic Product (GDP) is the total market value of all final goods and services produced by all resident producing units (RPUs) of an economy in a specified period (usually one year or one quarter), before deducting depreciation.',
        highlight: 'Key elements: Market value + Final goods only + Resident Producing Units (RPUs) + Specific period + Before depreciation.'
      },
      {
        title: 'Stock vs Flow Concept',
        content: 'GDP is a FLOW concept because it measures economic activity generated OVER A PERIOD OF TIME (e.g. quarterly or annually). In contrast, national wealth or accumulated foreign exchange reserves are STOCK concepts measured at a SPECIFIC POINT IN TIME.',
        bullets: [
          'Flow concept: Monthly wage, annual GDP, quarterly investment, annual exports.',
          'Stock concept: Total accumulated bank savings on 31 Dec, total capital stock of an economy, housing stock.'
        ]
      },
      {
        title: 'Final Goods vs Intermediate Goods',
        content: 'Only FINAL goods and services (goods purchased by ultimate users for final consumption or investment) are directly counted in GDP. INTERMEDIATE goods (goods used up as raw materials in further production during the period) are excluded to prevent DOUBLE COUNTING.',
        formula: 'Total Output Value = Sum of Value Added in All Production Stages',
        bullets: [
          'Example: Wheat ($10) -> Flour ($18) -> Bread ($25). GDP contribution is $25, NOT $10 + $18 + $25 = $53!'
        ]
      }
    ],
    quickCheck: {
      question: 'Why is the purchase of second-hand property excluded from the calculation of GDP, while the real estate agent\'s commission is included?',
      options: [
        'Because second-hand property has no monetary value.',
        'Because second-hand property was already counted in the year of its original construction; the commission represents a newly provided current service.',
        'Because commission is an indirect tax paid to the government.',
        'Because real estate transactions belong to foreign investment.'
      ],
      correctIndex: 1,
      explanation: 'The property itself was produced in a previous period and already counted in that year\'s GDP. Transferring ownership creates no new physical good. However, the agent provides newly rendered agency services in the current period, which contributes to current GDP.'
    }
  },
  {
    id: 'rpu-resident',
    title: 'Resident Producing Units (RPUs) & Inclusions',
    subtitle: 'Distinguishing who and what is included in Hong Kong\'s GDP',
    badge: 'HKDSE Must-Know',
    keyPoints: [
      {
        title: 'What is a Resident Producing Unit (RPU)?',
        content: 'An economic unit (individual or enterprise) is an RPU of Hong Kong if it maintains a center of economic interest in the economic territory of Hong Kong, typically engaging in economic production for 1 year or more, irrespective of citizenship or legal nationality.',
        bullets: [
          'Foreign domestic helpers residing in HK for > 1 year: They ARE HK RPUs; their services ARE in HK GDP.',
          'Foreign consultants / artists staying in HK for < 1 year (e.g. 2 months Brazilian coach): NOT HK RPUs; their income is paid abroad.',
          'HK resident companies operating branches in Mainland China: Branch production outside HK is NOT in HK GDP.'
        ]
      },
      {
        title: 'Items Explicitly Excluded from GDP',
        content: 'The following transactions are strictly EXCLUDED from GDP because they do not reflect current production of goods and services in the economy:',
        bullets: [
          '❌ Non-marketed activities: Household chores (Mrs. Fa cooking lunchbox), DIY home repairs, voluntary work (no market price).',
          '❌ Transfer payments: Old age allowance, CSSA, student grants, Scheme $6000, Consumption Vouchers ($5,000 cash grant aspect) - no production counterpart.',
          '❌ Pure financial transactions: Buying existing shares of HSBC/Microsoft, government bond issuance ($45B Silver Bonds) - merely transfer of financial claims.',
          '❌ Second-hand goods value: Buying second-hand LV handbags or used cars (already counted when newly made).',
          '❌ Capital gains / losses: Making $1M profit purely from stock price or property price appreciation.',
          '❌ Illegal / Underground economy: Smuggled goods, black market activities (unrecorded).'
        ],
        caution: 'Trap Warning: While second-hand goods and share transfers are excluded, the COMMISSION earned by brokers/salespersons and legal fees are INCLUDED as they are current productive services!'
      },
      {
        title: 'Special Imputed Item: Owner-Occupied Housing',
        content: 'Owner-occupiers provide housing services to themselves. National income accounting IMPUTES (estimates) the rental value of owner-occupied housing and INCLUDES it in GDP to avoid artificial GDP fluctuations when ownership patterns shift.'
      }
    ],
    quickCheck: {
      question: 'Which of the following items is INCLUDED in the calculation of Hong Kong\'s GDP?',
      options: [
        'A $10,000 allowance received under the Hong Kong Government\'s cash disbursement scheme',
        'A $50,000 profit made by a housewife trading second-hand luxury handbags online without registering a business',
        'A $15,000 commission earned by a stockbroker from executing client share orders',
        'A $45 billion proceeds from issuing Government Silver Bonds'
      ],
      correctIndex: 2,
      explanation: 'Stockbroker commission represents newly provided productive agency services in the current period and is included in GDP. Cash allowances and bond proceeds involve no production (transfer payments / financial transactions).'
    }
  },
  {
    id: 'circular-flow',
    title: 'Circular Flow of Economic Activities',
    subtitle: 'Connecting Households, Firms, Real Flow and Money Flow',
    badge: 'Theoretical Foundation',
    keyPoints: [
      {
        title: 'Two Main Sectors & Two Flows',
        content: 'In a simplified economy with Households and Firms: Households provide factor services (Labour, Land, Capital, Entrepreneurship) to Firms, and Firms produce final goods/services for Households.',
        bullets: [
          'Real Flow: Flow of factor services from households to firms, and flow of final goods/services from firms to households.',
          'Money Flow: Factor costs/incomes (Wages, Rent, Interest, Profits) paid by firms to households, and consumption expenditures paid by households to firms.'
        ]
      },
      {
        title: 'The Golden Identity of National Income',
        content: 'Assuming all income earned is spent and all output produced is sold without inventory accumulation, the three measurements must equal identically:',
        formula: 'Total Output (Production Approach) ≡ Total Income (Income Approach) ≡ Total Expenditure (Expenditure Approach)'
      }
    ],
    quickCheck: {
      question: 'In the circular flow model, which of the following belongs to the MONEY FLOW?',
      options: [
        'Working hours provided by a teacher at school',
        'Loaves of bread delivered from a bakery to households',
        'Wages and profits distributed by a firm to factor owners',
        'Raw materials shipped from a farm to a flour mill'
      ],
      correctIndex: 2,
      explanation: 'Wages and profits represent payments of factor income in money terms, which constitutes the Money Flow. Factor services and goods belong to the Real Flow.'
    }
  },
  {
    id: 'expenditure-approach',
    title: 'The Expenditure Approach: C + I + G + (X - M)',
    subtitle: 'Components of aggregate expenditure on final output',
    badge: 'High Frequency Exam Topic',
    keyPoints: [
      {
        title: 'Expenditure Approach Formula',
        content: 'Measures total spending on final goods and services produced by resident producing units within the period:',
        formula: 'GDP = C + I + G + (X - M)',
        bullets: [
          'C (Private Consumption Expenditure): Household spending on durable goods, non-durable goods, and consumer services.',
          'I (Gross Domestic Capital Formation): I = Gross Domestic Fixed Capital Formation + Change in Inventories.',
          'G (Government Consumption Expenditure): Purchases of goods & services + civil servant compensation. Excludes public infrastructure (in I) and transfer payments.',
          'X - M (Net Exports): Exports of Goods (Domestic + Re-exports) + Exports of Services - Imports of Goods - Imports of Services.'
        ]
      },
      {
        title: 'Crucial Calculation Rule: Gross vs Net Capital Formation',
        content: 'Gross Investment includes depreciation (capital consumption allowance). If the exam question provides "Net domestic fixed capital formation", you MUST add Depreciation to get Gross Investment!',
        formula: 'Gross Fixed Capital Formation = Net Fixed Capital Formation + Depreciation (Capital Consumption Allowance)',
        highlight: 'Change in Inventories = Closing Inventory - Opening Inventory (Can be positive, negative, or zero!)'
      },
      {
        title: 'Why Are Imports (M) Deducted?',
        content: 'Imports are NOT subtracted because they are harmful. Rather, components C, I, G, and X already contain expenditure on imported goods (e.g. buying imported French wine in C). Since GDP measures only DOMESTIC production, we deduct M to eliminate foreign-produced portions.'
      }
    ],
    quickCheck: {
      question: 'Given: Private Consumption = $200M, Net Fixed Capital Formation = $40M, Depreciation = $40M, Change in Inventories = $20M, Government Consumption = $24M, Net Exports = $10M. What is GDP at market price?',
      options: [
        '$294 Million',
        '$334 Million',
        '$374 Million',
        '$254 Million'
      ],
      correctIndex: 1,
      explanation: 'Gross Capital Formation I = Net Fixed Capital ($40M) + Depreciation ($40M) + Change in Inventories ($20M) = $100M. Total GDP = C ($200) + I ($100) + G ($24) + Net Exports ($10) = $334 Million.'
    }
  },
  {
    id: 'production-approach',
    title: 'The Production Approach (Value-Added Method)',
    subtitle: 'Summing up the economic value created at every stage of production',
    badge: 'Diagram Heavy',
    keyPoints: [
      {
        title: 'Value-Added Principle',
        content: 'Value added is the difference between a firm\'s gross output value (sales revenue) and the value of intermediate inputs (purchased materials/services from other firms).',
        formula: 'Value Added = Gross Output Value (Revenue) - Intermediate Inputs (Purchases from other producers)'
      },
      {
        title: 'Handling Foreign Trade & Raw Material Sources',
        content: '1. If raw materials are IMPORTED: They are intermediate inputs purchased from outside. Deduct imported raw materials from local manufacturer\'s revenue.\n2. If products are EXPORTED to foreign consumers: They form part of the manufacturer\'s gross output value.\n3. Sales tax inclusive prices: Sales tax is an indirect tax that increases the market price above factor cost.'
      }
    ],
    quickCheck: {
      question: 'A local factory buys $80 imported cloth and $20 local thread. It produces dresses and sells $150 to foreign buyers and $120 to local retailers. Retailers sell to consumers for $350. What is the value added by the FACTORY alone?',
      options: [
        '$170',
        '$190',
        '$270',
        '$150'
      ],
      correctIndex: 0,
      explanation: 'Factory total revenue = $150 (exports) + $120 (domestic sales) = $270. Intermediate purchases = $80 (imported cloth) + $20 (local thread) = $100. Factory value added = $270 - $100 = $170.'
    }
  },
  {
    id: 'factor-cost-market-price',
    title: 'Market Price vs Factor Cost',
    subtitle: 'The role of indirect taxes and government production subsidies',
    badge: 'Critical Formula',
    keyPoints: [
      {
        title: 'The Bridge Between Market Price & Factor Cost',
        content: 'Market Price represents the price paid by consumers in the market (which includes indirect taxes and is reduced by subsidies). Factor Cost represents the actual earnings received by the factors of production (wages, profits, rent, interest).',
        formula: 'GDP at Market Price (GDPmp) = GDP at Factor Cost (GDPfc) + Indirect Business Taxes - Subsidies',
        highlight: 'GDP at Factor Cost (GDPfc) = GDP at Market Price (GDPmp) - Indirect Business Taxes + Subsidies'
      },
      {
        title: 'Direct Taxes Trap (HKDSE Killer Distractor!)',
        content: 'Direct taxes (e.g. Salaries Tax, Profits Tax) are taxes on income already earned by factors. They are ALREADY INCLUDED in both GDP at factor cost and GDP at market price. NEVER add or deduct direct taxes when converting between GDPmp and GDPfc!'
      }
    ],
    quickCheck: {
      question: 'An economy has GDP at market price = $1,000M, Indirect business taxes = $70M, Subsidies = $20M, Direct taxes = $50M. What is GDP at factor cost?',
      options: [
        '$950 Million',
        '$900 Million',
        '$1,050 Million',
        '$950 Million - Direct tax adjustment'
      ],
      correctIndex: 0,
      explanation: 'GDPfc = GDPmp - Indirect Taxes + Subsidies = 1000 - 70 + 20 = $950M. Direct taxes ($50M) are completely ignored in this conversion!'
    }
  },
  {
    id: 'gni-nfia',
    title: 'Gross National Income (GNI) & NFIA',
    subtitle: 'From domestic territory to national resident ownership',
    badge: 'Core Distinction',
    keyPoints: [
      {
        title: 'Definition of Gross National Income (GNI)',
        content: 'GNI (formerly GNP) measures the total income earned by RESIDENTS of an economy from engaging in various economic activities worldwide (both within and outside the economic territory) in a specified period.',
        formula: 'GNI = GDP + Net Factor Income from Abroad (NFIA)',
        bullets: [
          'Net Factor Income from Abroad (NFIA) = Factor Income from Abroad (FIA) - Factor Income Paid Abroad (FIPA)',
          'FIA (Factor Income from Abroad): Income earned by HK residents from outside HK (e.g., HK resident receiving dividends from Apple Inc. in US, or rental from Tokyo flat).',
          'FIPA (Factor Income Paid Abroad): Income earned by non-residents from within HK (e.g., foreign consultant working 2 months in HK earning salary, foreign company paying dividends out of HK).'
        ]
      },
      {
        title: 'Comparison: GDP vs GNI',
        content: '• GDP is GEOGRAPHIC/TERRITORIAL (what is produced WITHIN Hong Kong territory).\n• GNI is RESIDENT-OWNED (what is earned by HONG KONG RESIDENTS globally).\n• If NFIA > 0, then GNI > GDP.\n• If NFIA < 0, then GNI < GDP.'
      }
    ],
    quickCheck: {
      question: 'Which of the following transactions will INCREASE Hong Kong\'s Net Factor Income from Abroad (NFIA)?',
      options: [
        'A Japanese tourist spends $20,000 shopping in Tsim Sha Tsui.',
        'A Hong Kong resident receives $50,000 rental income from a residential property leased in London.',
        'A British engineering consultant working 3 months in Hong Kong receives $100,000 salary from MTR.',
        'The Hong Kong Government distributes $5,000 consumption vouchers to local residents.'
      ],
      correctIndex: 1,
      explanation: 'Rental earned abroad by a HK resident is Factor Income from Abroad (FIA), which directly increases NFIA and GNI. Tourist spending is export of services in GDP, not factor income flow.'
    }
  },
  {
    id: 'nominal-real-deflator',
    title: 'Nominal vs Real GDP & GDP Deflator',
    subtitle: 'Eliminating the distorting effects of price inflation',
    badge: 'Mathematical Mastery',
    keyPoints: [
      {
        title: 'Nominal GDP vs Real GDP',
        content: '• Nominal GDP: Output valued at CURRENT year market prices (P_t × Q_t). It rises if prices rise OR physical output increases.\n• Real GDP: Output valued at CONSTANT BASE YEAR prices (P_0 × Q_t). It changes ONLY when the physical volume of output changes.'
      },
      {
        title: 'Implicit Price Deflator of GDP',
        content: 'The GDP Deflator measures the average price level of all final goods and services produced domestically relative to the base year (Base Year Deflator = 100).',
        formula: 'Implicit Price Deflator = (Nominal GDP / Real GDP) * 100',
        highlight: 'Real GDP = (Nominal GDP / GDP Deflator) * 100'
      },
      {
        title: 'Growth Rate & Percentage Change Approximations',
        content: 'For small percentage changes, we apply the additive growth approximation rule:',
        formula: '%Δ Nominal GDP ≈ %Δ Real GDP + %Δ General Price Level (Inflation Rate)',
        bullets: [
          'If Nominal GDP grew by +5% and Price Level rose by +3%, Real GDP grew by ≈ +2%.',
          'If Nominal GDP grew by +0% and Price Level rose by +2%, Real GDP decreased by ≈ -2%!'
        ]
      }
    ],
    quickCheck: {
      question: 'An economy\'s Nominal GDP growth rate is 0%, while its price level increased by 2%. What happened to the Real GDP?',
      options: [
        'Real GDP increased by 2%',
        'Real GDP remained unchanged',
        'Real GDP decreased by approximately 2%',
        'Real GDP increased by 0%'
      ],
      correctIndex: 2,
      explanation: '%Δ Nominal GDP (0%) ≈ %Δ Real GDP + %Δ Price Level (2%). Therefore, %Δ Real GDP ≈ 0% - 2% = -2% (Real GDP decreased).'
    }
  },
  {
    id: 'per-capita-growth',
    title: 'Per Capita GDP & Living Standard',
    subtitle: 'Adjusting national output for population changes',
    badge: 'Demographic Factor',
    keyPoints: [
      {
        title: 'Per Capita GDP Formula',
        content: 'Per capita GDP divides total output by the total resident population size of the economy.',
        formula: 'Per Capita GDP = Total GDP / Total Population',
        bullets: [
          '%Δ Per Capita Real GDP ≈ %Δ Real GDP - %Δ Population',
          'If Real GDP rises by 3% but Population grows by 5%, Per Capita Real GDP drops by ≈ -2% (average material welfare falls).'
        ]
      }
    ],
    quickCheck: {
      question: 'Country A\'s Real GDP dropped by 2%, but its population dropped by 10%. As a result, its Per Capita Real GDP:',
      options: [
        'Fall by 8%',
        'Rise by approximately 8%',
        'Remain unchanged',
        'Fall by 12%'
      ],
      correctIndex: 1,
      explanation: '%Δ Per Capita Real GDP ≈ %Δ Real GDP (-2%) - %Δ Population (-10%) = -2% - (-10%) = +8% (Rose!).'
    }
  },
  {
    id: 'gdp-limitations',
    title: 'Uses & 6 Major Limitations of GDP',
    subtitle: 'Why GDP is not a perfect indicator of economic welfare',
    badge: 'Paper 2 High Frequency',
    keyPoints: [
      {
        title: 'Main Uses of GDP Statistics',
        content: '1. Measures economic growth and overall macroeconomic performance over time.\n2. Serves as an indicator for comparing material living standards across countries and over different periods.\n3. Provides quantitative foundation for government economic forecasting, budget planning, and policy decisions.'
      },
      {
        title: 'The 6 Inherent Limitations for Measuring Living Standards',
        content: 'GDP statistics can misstate the actual living standard and welfare of citizens due to:',
        bullets: [
          '1. 👥 Population Size: Higher total GDP does not mean better living standards unless per-capita figures are used.',
          '2. 📈 Price Level Changes: Nominal GDP growth can be driven purely by inflation rather than more actual goods.',
          '3. ⚖️ Income Distribution: GDP does not show how income is shared. If the Gini coefficient is extreme, high GDP may benefit only the top 1% while the majority suffers poverty.',
          '4. 🏡 Non-Marketed Goods & Chores: Unpaid caregiving, domestic cooking, volunteer services, and leisure time are excluded. If people work 70 hours a week, GDP rises but leisure and quality of life collapse!',
          '5. 🛡️ Composition of Output: GDP counts military weapons and pollution control spending equally with healthcare and education. Producing more weapons raises GDP without improving consumer utility.',
          '6. 🏭 Externalities & Environmental Costs: Industrial emissions, noise, congestion, and disease caused by production are NOT subtracted from GDP, leading to an overstatement of true welfare.'
        ]
      }
    ],
    quickCheck: {
      question: 'When the per capita real GDP of an economy decreases, why might the actual living standard of its citizens still improve?',
      options: [
        'Because the general price level has increased.',
        'Because citizens enjoy more leisure time and more non-marketed goods/services are provided within households.',
        'Because the government increased its defence expenditure on fighter jets.',
        'Because the working hours of all workers increased by 10 hours per week.'
      ],
      correctIndex: 1,
      explanation: 'Leisure time and non-marketed household services provide genuine human well-being but are excluded from GDP. An increase in leisure can improve living standards even if measured market output falls.'
    }
  }
];

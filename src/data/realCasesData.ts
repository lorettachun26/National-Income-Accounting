import { RealCaseStudy } from '../types';

export const REAL_CASES_DATA: RealCaseStudy[] = [
  {
    id: 'case-consumption-vouchers',
    title: 'HK Electronic Consumption Voucher Scheme ($5,000 / $10,000)',
    titleZh: '香港電子消費券計劃（$5,000 / $10,000）',
    tag: 'Transfer Payment vs Private Consumption C',
    tagZh: '轉移支付 vs 私人消費開支 C',
    summary: 'Why distributing vouchers is NOT government consumption (G), but spending vouchers in shops IS counted in private consumption (C) and GDP.',
    summaryZh: '拆解為何政府發放消費券不計入政府消費 (G)，但市民持券購物卻會計入私人消費 (C) 及本地生產總值。',
    economicConcept: 'Expenditure Approach, Transfer Payments, Private Consumption (C), Government Consumption (G)',
    hkdseRelevance: 'Tested in HKDSE 2022 Paper 2 B12(b) and 2012 Scheme $6000 questions.',
    caseDetails: [
      {
        heading: 'Phase 1: Government Disbursement (發放階段)',
        headingZh: '第一階段：政府派發消費券',
        content: 'When the HKSAR Government credits $5,000 electronic vouchers into citizens\' Octopus or Alipay accounts, no goods or services have been produced. This is classified as a Government Transfer Payment (轉移支付) and is STRICTLY EXCLUDED from Government Consumption Expenditure (G) and GDP.',
        contentZh: '當特區政府向市民八達通或電子錢包注入 5,000 元消費券時，並未產生任何新的貨物或服務。這屬於政府轉移支付，絕不計入政府消費開支 (G) 或 GDP。'
      },
      {
        heading: 'Phase 2: Citizen Redemption in Local Shops (消費使用階段)',
        headingZh: '第二階段：市民持券在本地商戶消費',
        content: 'When citizens use the vouchers to dine at local restaurants or buy stationery, this transaction represents newly produced final goods and services. It is included in Private Consumption Expenditure (C) and therefore increases Hong Kong\'s GDP at market price.',
        contentZh: '當市民在本地茶餐廳食飯或在超市購物並使用消費券結賬時，商戶提供了現期的餐飲與零售服務。這項支出計入「私人消費開支」(C)，從而推高按市價計算的本地生產總值。'
      },
      {
        heading: 'Phase 3: Buying Imported Goods with Vouchers (購買進口貨物)',
        headingZh: '第三階段：持券購買進口手機或化妝品',
        content: 'If a consumer uses vouchers to buy an imported iPhone ($6,000), Private Consumption (C) rises by $6,000, but Imports of Goods (M) also rises by the wholesale cost (e.g. $5,000). The net contribution to HK GDP is only the local retailer\'s margin ($1,000), which represents local value-added!',
        contentZh: '若市民用消費券購買進口 iPhone ($6,000)，私人消費 C 增加 $6,000，但貨物進口 M 亦增加進口成本（例如 $5,000）。對香港 GDP 的淨貢獻僅為本地零售商創造的增值差價（$1,000）！'
      }
    ],
    interactiveCheck: {
      question: 'When the HKSAR Government pays $500,000 to an IT vendor to develop the online registration portal for the Consumption Voucher Scheme, does this payment enter GDP?',
      questionZh: '當特區政府向某 IT 科技公司支付 50 萬港元以開發消費券登記系統網站時，這筆支出會否計入 GDP？',
      options: [
        'No, because it is part of the Consumption Voucher scheme which is a transfer payment.',
        'Yes, under Government Consumption Expenditure (G) as a direct purchase of software development services.',
        'No, because government administration costs are never counted.',
        'Yes, under Net Factor Income from Abroad (NFIA).'
      ],
      correctIndex: 1,
      explanation: 'Unlike the voucher grant itself (transfer payment), purchasing software development services is a direct government purchase of currently produced services, counted under G!'
    }
  },
  {
    id: 'case-housing-imputed-rent',
    title: 'Hong Kong Private Housing Market & Imputed Rent ($300B Case)',
    titleZh: '香港私人住宅市場與自住物業推定租值（3000億案例）',
    tag: 'Imputed Services & Owner-Occupied Housing',
    tagZh: '推定服務與自住物業租值',
    summary: 'Understanding why living in your own flat contributes to Hong Kong\'s GDP even when no money transfers between landlord and tenant.',
    summaryZh: '深入探討為何即使沒有實際租金交易，業主居住於自置物業依然會為香港 GDP 貢獻數千億產值。',
    economicConcept: 'Production of Housing Services, Imputed Rent, GDP Inclusions',
    hkdseRelevance: 'Featured in HKDSE 2025 Paper 2 B11(a)(ii) and 2018 Paper 1 Q24.',
    caseDetails: [
      {
        heading: 'The Economic Logic of Housing Services (居住服務的經濟本質)',
        headingZh: '居住服務的經濟本質',
        content: 'A residential flat continuously produces a stream of shelter and living services. If flat owner Mr. Chan lives in his own flat rather than renting it out to tenants, the economic service is still generated and consumed.',
        contentZh: '住宅物業持續為住戶提供庇護與居住服務。如果業主陳先生住在自己物業內而非出租，這項居住服務依然被持續生產並享用。'
      },
      {
        heading: 'Why We Impute Rent (為何要估算「推定租金」)',
        headingZh: '統計處為何進行「推定」(Imputation)',
        content: 'If national accounts only counted actual cash rent paid by tenants, then if 100,000 tenants bought their rented flats and became owner-occupiers, recorded GDP would falsely plummet! To ensure consistency across time and countries, statisticians calculate the "Imputed Rent" (what the flat would rent for on the open market) and include it in GDP.',
        contentZh: '若只計算實際交租金額，當 10 萬名租客置業變為自住業主時，統計數據上的 GDP 便會大幅暴跌！為保持客觀一致性，統計處會估算「推定租金」（即該物業在公開市場的合理估計租值）並計入 GDP。'
      }
    ],
    interactiveCheck: {
      question: 'Why is the market rental value of owner-occupied flats included in GDP, while a parent\'s cooking service at home is excluded?',
      questionZh: '為什麼自住物業的租值會計入 GDP，但家長在家煮飯的家務勞動卻被剔除？',
      options: [
        'Because cooking food is not beneficial to the economy.',
        'Because an active, well-established rental market exists to reliably estimate property rental values, whereas market pricing for millions of private domestic chores is difficult and subjective to estimate.',
        'Because housing is considered an export good.',
        'Because parents are not resident producing units in Hong Kong.'
      ],
      correctIndex: 1,
      explanation: 'Established real estate leasing market data provides reliable benchmarks for imputing rental values, whereas daily household chores lack market pricing and are standardly excluded.'
    }
  },
  {
    id: 'case-foreign-talents-expats',
    title: 'Expatriates, Domestic Helpers & Cross-Border Workers',
    titleZh: '外籍勞工、外傭與跨境專才的 GDP/GNI 歸屬',
    tag: 'RPU Definition, 1-Year Rule, FIA vs FIPA',
    tagZh: 'RPU 界定、一年居住法則、對外要素收益',
    summary: 'Mastering the 1-year residency threshold to distinguish Hong Kong RPUs from non-resident factor flows.',
    summaryZh: '精確掌握「一年居住準則」，準確劃分香港常住生產單位與跨國要素收益流動。',
    economicConcept: 'Resident Producing Unit (RPU), Gross Domestic Product (GDP) vs Gross National Income (GNI), NFIA',
    hkdseRelevance: 'Tested in HKDSE 2013 Q21, 2015 B10, 2021 A5, 2024 B11, 2025 Q24.',
    caseDetails: [
      {
        heading: 'Foreign Domestic Helpers in HK (外籍家庭傭工)',
        headingZh: '在港工作的外籍家庭傭工（如菲傭、印傭）',
        content: 'Foreign domestic helpers work in Hong Kong under standard 2-year contracts (> 1 year). Hence, they are Hong Kong Resident Producing Units (RPUs) and HK residents for national accounting. Their domestic services and wages ARE fully included in Hong Kong\'s GDP and GNI.',
        contentZh: '外傭通常簽署兩年合約（超過一年），其經濟利益中心在香港，故被界定為香港常住單位（RPU）及香港居民。其提供的家政服務及所得工資全數計入香港 GDP 及 GNI。'
      },
      {
        heading: 'Short-Stay Visiting Experts < 1 Year (短期訪港專家/教練)',
        headingZh: '逗留少於一年的短期訪港專家（如日本咖啡師、巴西教練）',
        content: 'A famous Japanese barista invited for a 1-week workshop earning $30,000, or a Brazilian coach hired for 2 months earning $8M, are NOT HK residents. Their service is produced in HK (in HK GDP), but their salary is Factor Income Paid Abroad (FIPA), which must be DEDUCTED to calculate HK GNI.',
        contentZh: '訪港一星期的日本咖啡大師（賺取 3 萬元）或執教兩個月的巴西教練（賺取 800 萬），逗留少於一年均非香港居民。其產出計入香港 GDP，但薪金屬於對外要素收益流出 (FIPA)，計算香港 GNI 時必須扣除！'
      }
    ],
    interactiveCheck: {
      question: 'A Hong Kong architect goes to Dubai to supervise a construction project for 5 months, earning HK$400,000 salary from a Dubai firm, then returns to Hong Kong. How is this $400,000 treated?',
      questionZh: '一名香港建築師前往杜拜監督建築項目 5 個月，從杜拜公司賺取 40 萬港元薪金後返回香港。這 40 萬港元應如何處理？',
      options: [
        'Included in HK GDP and excluded from HK GNI.',
        'Excluded from HK GDP, but included in HK GNI as Factor Income from Abroad (FIA).',
        'Included in both HK GDP and HK GNI.',
        'Excluded from both HK GDP and HK GNI.'
      ],
      correctIndex: 1,
      explanation: 'The service was produced in Dubai (outside HK territory -> NOT in HK GDP). Because the architect stayed < 1 year in Dubai and returned, he is a HK resident, so his foreign salary is Factor Income from Abroad (FIA), counted in HK GNI!'
    }
  },
  {
    id: 'case-mega-events-tourism',
    title: 'Inbound Tourism & International Mega Events (Art Basel, Sevens, Cruises)',
    titleZh: '盛事經濟與入境旅遊消費（七欖、Art Basel、郵輪）',
    tag: 'Exports of Services in GDP',
    tagZh: 'GDP 中的服務輸出 (Exports of Services)',
    summary: 'How foreign tourist dining, hotel stays, and ticket sales enter Hong Kong\'s Net Exports ($X - M$).',
    summaryZh: '訪港海外遊客在香港住酒店、食飯、觀賞賽事的開支如何計入香港的服務輸出。',
    economicConcept: 'Exports of Services, Net Exports, Tourism Expenditure',
    hkdseRelevance: 'Featured in HKDSE 2018 Paper 2 B12(c).',
    caseDetails: [
      {
        heading: 'Why Tourist Spending is an EXPORT (為何遊客在港消費算「出口」)',
        headingZh: '遊客在港消費為何屬於「服務輸出」',
        content: 'When an overseas rugby fan from Britain buys a ticket to the Hong Kong Sevens, stays in a Causeway Bay hotel, and eats roast goose in Central, non-residents are purchasing services produced by Hong Kong RPUs. Even though the transaction happens physically inside Hong Kong, it is officially classified as EXPORTS OF SERVICES (服務輸出, X) in GDP!',
        contentZh: '當外國球迷來港觀看香港國際七人欖球賽、入住本地酒店並在酒樓消費時，是非居民購買了香港常住生產單位提供的服務。即使交易在香港境內發生，統計上仍全數歸類為「服務輸出」(Exports of Services, X)！'
      }
    ],
    interactiveCheck: {
      question: 'When a Hong Kong resident travels to Tokyo for a holiday and spends ¥300,000 on hotels and sushi, how does this affect Hong Kong\'s GDP components?',
      questionZh: '當一名香港居民前往日本東京旅遊渡假，花費 30 萬日圓住酒店及吃壽司，這項交易在香港 GDP 中如何入賬？',
      options: [
        'It is an Export of Services (X).',
        'It is counted under Private Consumption (C) and simultaneously deducted as Imports of Services (M), having net zero effect on HK GDP.',
        'It increases Hong Kong\'s GDP at factor cost directly.',
        'It is a transfer payment.'
      ],
      correctIndex: 1,
      explanation: 'Resident outbound travel expenditure is included in HK Private Consumption (C) because it is household consumption, but since it was produced in Japan, it is simultaneously recorded as Imports of Services (M). Net effect on HK GDP = C - M = 0!'
    }
  },
  {
    id: 'case-silver-bonds-shares',
    title: 'Financial Assets: Government Silver Bonds ($45B) & Share Trading',
    titleZh: '金融資產：政府銀色債券（450億）與股票買賣',
    tag: 'Pure Financial Asset Transfers vs Productive Services',
    tagZh: '純金融資產轉移 vs 現期生產服務',
    summary: 'Distinguishing the face value of stocks and bonds from the brokerage and underwriting services.',
    summaryZh: '清晰區分股票與債券面值（資產轉移）與證券行經紀佣金（現期生產服務）的根本不同。',
    economicConcept: 'Financial Transactions, Brokerage Commissions, GDP Inclusions/Exclusions',
    hkdseRelevance: 'Featured in HKDSE 2023 Paper 2 B10(d) and 2023 Paper 1 Q24.',
    caseDetails: [
      {
        heading: 'Bond Issuance ($45 Billion Silver Bonds)',
        headingZh: '特區政府發行 450 億元銀色債券',
        content: 'When citizens subscribe to $45 billion worth of government Silver Bonds, this is purely a financial lending transaction (transfer of monetary claims). No new goods or services are produced. Therefore, the $45 billion principal is EXCLUDED from Hong Kong\'s GDP.',
        contentZh: '市民認購 450 億元特區政府銀色債券時，僅代表資金借貸與金融債權轉移，過程中並無任何商品或服務被生產出來，因此 450 億元本金絕不計入 GDP。'
      },
      {
        heading: 'Brokerage Fees & Bank Underwriting',
        headingZh: '銀行包銷費用與經紀佣金',
        content: 'If the bank charges a 0.15% processing fee or financial commission for assisting the bond placement or executing client stock trades on the HKEX, that fee represents payment for financial agency services provided in the current period and IS INCLUDED in GDP!',
        contentZh: '若銀行或證券行在配售債券或執行股票買賣時收取了 0.15% 的手續費或經紀佣金，該筆費用是為現期提供的金融中介服務付費，必須計入 GDP！'
      }
    ],
    interactiveCheck: {
      question: 'Mr. Wong bought 1,000 shares of Tencent for $300,000 and paid $600 brokerage commission. Later he sold them for $380,000, paying another $700 commission. What is the total contribution to GDP?',
      questionZh: '黃先生以 30 萬港元購入 1,000 股騰訊並支付 600 元佣金，其後以 38 萬港元沽出並支付 700 元佣金。上述交易對 GDP 的總貢獻是多少？',
      options: [
        '$80,000 (his capital gain)',
        '$680,000 (total share transaction volume)',
        '$1,300 (total brokerage commissions paid: $600 + $700)',
        '$81,300 (capital gain + commissions)'
      ],
      correctIndex: 2,
      explanation: 'Share transactions ($300k and $380k) and capital gain ($80k) are pure asset transfers and excluded from GDP. Only the current financial brokerage services rendered ($600 + $700 = $1,300) are counted in GDP!'
    }
  }
];

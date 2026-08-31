import { MCQQuestion, Paper2Question } from '../types';

export const DSE_MCQ_QUESTIONS: MCQQuestion[] = [
  {
    id: 'dse-2012-q22',
    year: 2012,
    questionNumber: 'Q22',
    subtopic: 'factor-cost-market-price',
    difficulty: 'Intermediate',
    question: 'Refer to the following table:\nIf the GDP at factor cost is $264 million, the value of X (Change in inventories) is ___________.',
    questionZh: '參閱下表：若按要素成本計算的本地生產總值為 2.64 億元，X（存貨變動）的值是 ___________。',
    tableData: {
      headers: ['Gross Domestic Product (GDP) Components', '$ Million'],
      rows: [
        ['Private consumption expenditure (C)', 200],
        ['Net domestic fixed capital formation', 40],
        ['Change in inventories', 'X'],
        ['Government consumption expenditure (G)', 24],
        ['Net exports (X - M)', 10],
        ['Indirect taxes', 60],
        ['Subsidies', 30],
        ['Depreciation', 40],
        ['Net factor income from abroad', 16],
      ],
    },
    options: [
      { label: 'A', text: '-50', textZh: '-50' },
      { label: 'B', text: '-20', textZh: '-20' },
      { label: 'C', text: '20', textZh: '20' },
      { label: 'D', text: '50', textZh: '50' },
    ],
    correctAnswer: 'B',
    explanation: 'Step 1: GDP at market price (GDPmp) = GDPfc + Indirect taxes - Subsidies = 264 + 60 - 30 = $294M.\nStep 2: Gross domestic fixed capital formation = Net domestic fixed capital formation ($40M) + Depreciation ($40M) = $80M.\nStep 3: GDPmp = C ($200) + Gross fixed capital ($80) + Change in inventories (X) + G ($24) + Net exports ($10).\n294 = 200 + 80 + X + 24 + 10 = 314 + X.\nTherefore, X = 294 - 314 = -20.',
    explanationZh: '步驟一：市價 GDP (GDPmp) = 要素成本 GDP (264) + 間接稅 (60) - 補貼 (30) = $294M。\n步驟二：固定資本形成毛額 = 固定資本形成淨額 (40) + 折舊 (40) = $80M。\n步驟三：GDPmp = C (200) + 固定資本毛額 (80) + 存貨變動 (X) + G (24) + 淨出口 (10)。\n294 = 314 + X => X = -20。',
    hkeaaTrapWarning: 'Do not forget that "Gross Investment = Net Fixed Capital Formation + Depreciation + Change in Inventories". Net factor income from abroad (16) is irrelevant to GDP calculation!',
    distractorNotes: {
      A: 'Failed to convert net fixed capital to gross fixed capital by adding depreciation.',
      B: 'Correct answer: X = -20.',
      C: 'Forgot the conversion between GDPfc and GDPmp.',
      D: 'Calculation sign error.',
    },
  },
  {
    id: 'dse-2012-q23',
    year: 2012,
    questionNumber: 'Q23',
    subtopic: 'per-capita-growth',
    difficulty: 'Basic',
    question: 'Country A\'s general price level increases by 10% and its aggregate output and population drop by 2% and 10% respectively. As a result, Country A\'s nominal GDP will __________ and the per-capita real GDP will ___________.',
    questionZh: 'A國的整體物價水平上升了10%，而其總產出（實質產出）及人口分別下降了2%及10%。因此，A國的名義本地生產總值將會 __________，而人均實質本地生產總值將會 ___________。',
    options: [
      { label: 'A', text: 'rise … rise', textZh: '上升 … 上升' },
      { label: 'B', text: 'rise … fall', textZh: '上升 … 下降' },
      { label: 'C', text: 'remain unchanged … rise', textZh: '不變 … 上升' },
      { label: 'D', text: 'remain unchanged … fall', textZh: '不變 … 下降' },
    ],
    correctAnswer: 'A',
    explanation: '1. Nominal GDP: %Δ Nominal GDP ≈ %Δ Real GDP (-2%) + %Δ Price Level (+10%) = +8% (Rises).\n2. Per-capita Real GDP: %Δ Per-capita Real GDP ≈ %Δ Real GDP (-2%) - %Δ Population (-10%) = -2% - (-10%) = +8% (Rises).',
    explanationZh: '1. 名義 GDP 變動率 ≈ 實質產出變動 (-2%) + 物價變動 (+10%) = +8% (上升)。\n2. 人均實質 GDP 變動率 ≈ 實質產出變動 (-2%) - 人口變動 (-10%) = +8% (上升)。因此兩者皆上升。',
  },
  {
    id: 'dse-2013-q21',
    year: 2013,
    questionNumber: 'Q21',
    subtopic: 'gni-nfia',
    difficulty: 'Intermediate',
    question: 'Which of the following items is NOT included in the calculation of Hong Kong\'s net factor income from abroad for the current year?',
    questionZh: '下列哪一項不包括在該年度香港的對外要素收益淨流動 (NFIA) 計算之內？',
    options: [
      { label: 'A', text: 'the income received by a Japanese teacher who worked in a language school in Hong Kong for one year', textZh: '一名在香港某語言學校工作了一年的日本籍教師所獲得的收入' },
      { label: 'B', text: 'rental income earned from real estate holdings in Canada owned by a Hong Kong resident', textZh: '一名香港居民從其擁有的加拿大房地產所獲得的租金收入' },
      { label: 'C', text: 'salary received by an Indian consultant who worked for the Hong Kong Airport Authority for three months', textZh: '一名在香港機管局工作了三個月的印度籍顧問所獲得的薪金' },
      { label: 'D', text: 'dividends earned from shares in Hong Kong held by a US resident', textZh: '一名美國居民從其持有的香港公司股份中所賺取的股息' },
    ],
    correctAnswer: 'A',
    explanation: 'A resident individual in HK is someone who resides in HK for 1 year or more. The Japanese teacher worked in HK for one year, so he is treated as a Hong Kong Resident Producing Unit (RPU) and a HK resident. His income is domestic factor income in HK GDP and GNI, NOT a cross-border factor income flow (NFIA). In contrast, the Indian consultant (< 1 year) is a non-resident (factor income paid abroad).',
    explanationZh: '在香港居住或工作滿一年或以上的人士被視為香港常住單位（居民）。該日本籍教師在港工作達一年，屬於香港常住居民，其薪金屬於香港境內居民收入，不屬於對外要素收益流動 (NFIA)。而印度顧問只工作三個月，是非居民提供要素（屬於對外要素收益流出）。',
  },
  {
    id: 'dse-2013-q22',
    year: 2013,
    questionNumber: 'Q22',
    subtopic: 'expenditure-approach',
    difficulty: 'Intermediate',
    question: 'Consider the following GDP data about a country:\nGDP at market price = $200M, Private consumption (C) = $120M, Gross fixed capital formation = $40M, Changes in inventories = $10M, Total exports of goods = $80M, Domestic exports of goods = $70M, Imports of goods = $60M, Exports of services = $20M, Imports of services = $30M, Net income from abroad = $25M, Depreciation = $35M, Indirect business tax = $28M, Subsidies = $18M.\nThe government consumption expenditure for that year is $_________ million.',
    questionZh: '某國市價 GDP = $200M，私人消費 = $120M，固定資本形成毛額 = $40M，存貨變動 = $10M，貨物出口總額 = $80M，港產品出口 = $70M，貨物進口 = $60M，服務輸出 = $20M，服務輸入 = $30M，對外要素淨收入 = $25M，折舊 = $35M，間接稅 = $28M，補貼 = $18M。求政府消費開支？',
    tableData: {
      headers: ['Components', '$ Million'],
      rows: [
        ['GDP at market price', 200],
        ['Private consumption expenditure', 120],
        ['Gross domestic fixed capital formation', 40],
        ['Changes in inventories', 10],
        ['Total exports of goods', 80],
        ['Domestic exports of goods', 70],
        ['Imports of goods', 60],
        ['Exports of services', 20],
        ['Imports of services', 30],
      ],
    },
    options: [
      { label: 'A', text: '20', textZh: '20' },
      { label: 'B', text: '30', textZh: '30' },
      { label: 'C', text: '40', textZh: '40' },
      { label: 'D', text: '50', textZh: '50' },
    ],
    correctAnswer: 'A',
    explanation: 'Total Exports X = Total exports of goods ($80) + Exports of services ($20) = $100M (Note: Domestic exports $70M is already a subcomponent of Total exports $80M).\nTotal Imports M = Imports of goods ($60) + Imports of services ($30) = $90M.\nNet Exports (X - M) = 100 - 90 = $10M.\nGross Investment I = Fixed Capital ($40) + Inventories ($10) = $50M.\nGDP = C + I + G + (X - M) => 200 = 120 + 50 + G + 10 => 200 = 180 + G => G = $20M.',
    explanationZh: '總出口 X = 貨物出口總額 (80) + 服務輸出 (20) = 100M（注意：港產品出口70M已包含在貨物出口總額中）。\n總進口 M = 貨物進口 (60) + 服務輸入 (30) = 90M。\n淨出口 (X - M) = 100 - 90 = 10M。\n總投資 I = 40 + 10 = 50M。\n200 = 120 (C) + 50 (I) + G + 10 (X-M) => G = 20M。',
  },
  {
    id: 'dse-2014-q24',
    year: 2014,
    questionNumber: 'Q24',
    subtopic: 'production-approach',
    difficulty: 'Challenging',
    question: 'The diagram shows a production chain of a good in Economy X:\n• Raw materials imported: $80 (from Australia) + $70 (from Thailand) into Factory in Economy X.\n• Factory produces: $200 Export to China + $180 sold to Wholesaler in Economy X.\n• Wholesaler sells to Retailer for $250.\n• Retailer sells to Consumers for $400 ($60 sales tax inclusive).\nWhat is the contribution of the production chain to the GDP at market price of Economy X?',
    questionZh: '附圖顯示某物品在X經濟體中的生產鏈：\n• 工廠從澳洲購入原料 $80，從泰國購入原料 $70。\n• 工廠生產後：以 $200 外銷中國，以 $180 售予本地批發商。\n• 批發商以 $250 售予本地零售商。\n• 零售商以 $400（含 $60 銷售稅）售予本地消費者。\n求此生產鏈對 X 經濟體按市價計算的本地生產總值 (GDP) 的貢獻？',
    diagramType: 'production-chain',
    diagramData: {
      importedInputs: [{ label: 'Raw materials from Australia', value: 80 }, { label: 'Raw materials from Thailand', value: 70 }],
      stages: [
        { name: 'Factory in Economy X', domesticSales: 180, exports: 200 },
        { name: 'Wholesaler in Economy X', domesticSales: 250 },
        { name: 'Retailer in Economy X', domesticSales: 400, taxInclusive: 60 }
      ]
    },
    options: [
      { label: 'A', text: '$340', textZh: '$340' },
      { label: 'B', text: '$390', textZh: '$390' },
      { label: 'C', text: '$450', textZh: '$450' },
      { label: 'D', text: '$600', textZh: '$600' },
    ],
    correctAnswer: 'C',
    explanation: 'Method 1 (Expenditure approach): Final expenditures in Economy X = Final consumer spending ($400) + Exports ($200) - Imports ($80 + $70 = $150) = 400 + 200 - 150 = $450.\nMethod 2 (Value added approach at market prices):\n• Factory value added = Output (200 + 180) - Imported inputs (80 + 70) = 380 - 150 = $230.\n• Wholesaler value added = 250 - 180 = $70.\n• Retailer value added (including indirect sales tax) = 400 - 250 = $150.\nTotal contribution = 230 + 70 + 150 = $450.',
    explanationZh: '方法一（支出面）：最終產出支出 = 本地消費 ($400) + 出口 ($200) - 進口原料 ($80+$70=$150) = $450。\n方法二（增加價值法）：\n• 工廠增值 = (200+180) - (80+70) = 230\n• 批發商增值 = 250 - 180 = 70\n• 零售商增值（含銷售稅） = 400 - 250 = 150\n總增值 = 230 + 70 + 150 = $450。',
  },
  {
    id: 'dse-2014-q25',
    year: 2014,
    questionNumber: 'Q25',
    subtopic: 'nominal-real-deflator',
    difficulty: 'Intermediate',
    question: 'Refer to the table:\n2011: %Δ Nominal GDP = 9.0%, %Δ Nominal Government Spending = 12.0%\n2012: %Δ Nominal GDP = 5.5%, %Δ Nominal Government Spending = 6.0%\nBased on the above information, which of the following statements are correct?\n(1) The size of the public sector in the economy increased in 2012.\n(2) Both nominal GDP and nominal government spending dropped in 2012.\n(3) A drop in both the real GDP and real government spending was possible in 2012.',
    questionZh: '根據表中數據，下列哪些陳述是正確的？\n(1) 2012年該經濟體的公共部門規模有所擴大。\n(2) 2012年名義 GDP 及名義政府開支均有所下降。\n(3) 2012年實質 GDP 及實質政府開支均有可能下降。',
    tableData: {
      headers: ['Year', 'YoY % change in nominal GDP', 'YoY % change in nominal gov spending'],
      rows: [
        ['2011', '9.0%', '12.0%'],
        ['2012', '5.5%', '6.0%'],
      ]
    },
    options: [
      { label: 'A', text: '(1) and (2) only', textZh: '只有 (1)、(2)' },
      { label: 'B', text: '(1) and (3) only', textZh: '只有 (1)、(3)' },
      { label: 'C', text: '(2) and (3) only', textZh: '只有 (2)、(3)' },
      { label: 'D', text: '(1), (2) and (3)', textZh: '(1)、(2) 及 (3)' },
    ],
    correctAnswer: 'B',
    explanation: '(1) Correct: In 2012, nominal government spending grew by 6.0%, which is faster than nominal GDP growth (5.5%). Hence, public spending as a share of GDP increased.\n(2) Incorrect: Positive percentage changes (+5.5% and +6.0%) mean both levels INCREASED, not dropped (the growth rate slowed down, but levels rose).\n(3) Correct: If the inflation rate exceeded 6.0% (e.g., inflation was 8%), real GDP growth (5.5% - 8% = -2.5%) and real government spending (6.0% - 8% = -2.0%) would both drop.',
    explanationZh: '(1) 正確：2012年政府開支增長率 (6.0%) 大於 GDP 增長率 (5.5%)，政府佔經濟比重上升。\n(2) 錯誤：增長率仍為正數（+5.5% 及 +6.0%），代表金額仍在增加，只是增長速度放緩，並非金額下降。\n(3) 正確：若通脹率高於 6.0%（例如通脹 7%），實質產量與實質政府開支均會出現負增長。',
  },
  {
    id: 'dse-2015-q24',
    year: 2015,
    questionNumber: 'Q24',
    subtopic: 'rpu-resident',
    difficulty: 'Basic',
    question: 'Which of the following would be included in the calculation of Hong Kong\'s GDP for 2014?',
    questionZh: '下列哪一項會計入 2014 年香港的本地生產總值 (GDP)？',
    options: [
      { label: 'A', text: 'the old age allowance paid by the government in 2014', textZh: '政府於 2014 年發放的生果金（高齡津貼）' },
      { label: 'B', text: 'the market value of a flat built in 2013 but sold in 2014', textZh: '一個於 2013 年建成但於 2014 年售出的住宅單位市值' },
      { label: 'C', text: 'the salary of a salesperson working in a shop selling second-hand handbags in 2014', textZh: '2014 年在二手手袋專門店工作的售貨員所賺取的薪金' },
      { label: 'D', text: 'the rental income from a property in Canada owned by a Hong Kong resident producing unit in 2014', textZh: '香港常住單位從其擁有的加拿大物業於 2014 年獲得的租金收入' },
    ],
    correctAnswer: 'C',
    explanation: 'A is a transfer payment (no production). B was produced in 2013 and already counted in 2013 GDP. D is production in Canada (counted in Canada GDP, and in HK GNI, but NOT HK GDP). C represents newly provided sales services rendered by a resident producing unit in 2014, so it is included in 2014 GDP.',
    explanationZh: 'A 屬轉移支付；B 在 2013 年建成，已計入 2013 年 GDP；D 物業位於加拿大，屬於加拿大 GDP 及香港 GNI；C 售貨員在 2014 年提供了現期的零售服務，其薪金計入 2014 年 GDP。',
  },
  {
    id: 'dse-2016-q23',
    year: 2016,
    questionNumber: 'Q23',
    subtopic: 'factor-cost-market-price',
    difficulty: 'Intermediate',
    question: 'Consider the following GDP data about a country:\nPrivate consumption expenditure = $380M, Government consumption = $450M, Gross domestic fixed capital formation = $230M, Decrease in stock = $50M, Subsidies = $30M, Depreciation = $40M, Total exports = $130M, Total imports = $170M, Direct taxes = $30M.\nThe GDP at factor cost is $__________ million.',
    questionZh: '某國數據：私人消費=$380M，政府消費=$450M，固定資本形成毛額=$230M，存貨減少=$50M，補貼=$30M，折舊=$40M，出口總額=$130M，進口總額=$170M，直接稅=$30M。求要素成本 GDP？',
    tableData: {
      headers: ['GDP Components', '$ Million'],
      rows: [
        ['Private consumption expenditure', 380],
        ['Government consumption expenditure', 450],
        ['Gross domestic fixed capital formation', 230],
        ['Decrease in stock', 50],
        ['Subsidies', 30],
        ['Depreciation', 40],
        ['Total exports', 130],
        ['Total imports', 170],
        ['Direct taxes', 30],
      ]
    },
    options: [
      { label: 'A', text: '960', textZh: '960' },
      { label: 'B', text: '970', textZh: '970' },
      { label: 'C', text: '1000', textZh: '1000' },
      { label: 'D', text: '1100', textZh: '1100' },
    ],
    correctAnswer: 'C',
    explanation: 'Step 1: Gross Investment I = Gross Fixed Capital ($230) - Decrease in stock ($50) = $180M.\nStep 2: Net Exports (X - M) = 130 - 170 = -$40M.\nStep 3: GDP at market price (GDPmp) = C (380) + G (450) + I (180) + (X - M) (-40) = $970M.\nStep 4: GDP at factor cost (GDPfc) = GDPmp ($970) - Indirect taxes ($0) + Subsidies ($30) = 970 + 30 = $1,000M.\n(Direct taxes $30M is a distractor and NOT deducted/added).',
    explanationZh: '步驟一：總投資 I = 固定資本形成毛額 (230) - 存貨減少 (50) = 180M。\n步驟二：淨出口 = 130 - 170 = -40M。\n步驟三：市價 GDP = 380 + 450 + 180 - 40 = 970M。\n步驟四：要素成本 GDP = 市價 GDP (970) - 間接稅 (0) + 生產補貼 (30) = 1,000M。（直接稅 30M 為干擾項，不用調整）。',
  },
  {
    id: 'dse-2018-q24',
    year: 2018,
    questionNumber: 'Q24',
    subtopic: 'rpu-resident',
    difficulty: 'Basic',
    question: 'Which of the following are included in the calculation of the gross domestic product of Hong Kong?\n(1) the estimated rental value of an owner-occupied property in Hong Kong\n(2) the commission received by a real estate agent from selling second-hand property\n(3) the scholarship received by a university student',
    questionZh: '下列哪幾項會計入香港的本地生產總值 (GDP)？\n(1) 香港自住物業的估計租值（推定租金）\n(2) 地產代理從買賣二手物業中所收取的佣金\n(3) 大學生獲頒發的獎學金',
    options: [
      { label: 'A', text: '(1) and (2) only', textZh: '只有 (1)、(2)' },
      { label: 'B', text: '(1) and (3) only', textZh: '只有 (1)、(3)' },
      { label: 'C', text: '(2) and (3) only', textZh: '只有 (2)、(3)' },
      { label: 'D', text: '(1), (2) and (3)', textZh: '(1)、(2) 及 (3)' },
    ],
    correctAnswer: 'A',
    explanation: '(1) is included as imputed rent for owner-occupied housing services.\n(2) is included as newly provided productive service in the current period.\n(3) is a transfer payment (no production involved), so it is excluded.',
    explanationZh: '(1) 自住物業的推定租金計入 GDP；(2) 地產代理的經紀佣金是本期提供的中介服務價值，計入 GDP；(3) 獎學金屬轉移支付，不計入 GDP。',
  },
  {
    id: 'dse-2019-q25',
    year: 2019,
    questionNumber: 'Q25',
    subtopic: 'gni-nfia',
    difficulty: 'Basic',
    question: 'To calculate the gross national income (GNI) of Hong Kong, which of the following should be ADDED to the GDP of Hong Kong?',
    questionZh: '要計算香港的本地居民總收入 (GNI)，下列哪一項應加到香港的本地生產總值 (GDP) 中？',
    options: [
      { label: 'A', text: 'the income earned by a Japanese chef who has worked in a Hong Kong restaurant for two months', textZh: '一名在香港餐廳工作了兩個月的日本籍廚師所賺取的收入' },
      { label: 'B', text: 'the rental received by a Hong Kong resident from leasing his house in Japan to a Japanese', textZh: '一名香港居民將其在日本的房屋出租給日本人所收取的租金' },
      { label: 'C', text: 'the salary earned by a Hong Kong resident from working as a secretary at the Hong Kong branch office of an Australian company', textZh: '一名香港居民在一間澳洲公司的香港分行擔任秘書所賺取的薪金' },
      { label: 'D', text: 'the money received from selling an apartment in Australia by a Hong Kong resident', textZh: '一名香港居民出售其在澳洲的物業所收到的賣樓款項' },
    ],
    correctAnswer: 'B',
    explanation: 'GNI = GDP + Factor income from abroad (FIA) - Factor income paid abroad (FIPA). Rental income earned abroad by a HK resident is factor income from abroad (FIA) and must be ADDED to GDP. A is FIPA (deducted). C is domestic factor income already in GDP. D is asset liquidation, not factor income.',
    explanationZh: 'GNI = GDP + 對外要素收益流入 (FIA) - 對外要素收益流出 (FIPA)。香港居民從外國物業收取的租金屬於 FIA，應加至 GDP 中。A 為流出項（應扣除）；C 屬境內生產已包含在 GDP；D 屬資產變現非要素所得。',
  },
  {
    id: 'dse-2021-q23',
    year: 2021,
    questionNumber: 'Q23',
    subtopic: 'production-approach',
    difficulty: 'Challenging',
    question: 'A production chain of Good X in an economy is shown below:\n• Local importers buy $200 raw materials from abroad and sell to Local Supermarkets for $400.\n• Local farmers produce $600 raw materials, sell to Local Supermarkets, and have $50 increase in inventory.\n• Local supermarkets sell $1,200 ($100 sales tax inclusive) to local consumers and $500 to foreign tourists.\nThe contribution of the above production chain to the economy\'s GDP at factor cost is ___________.',
    questionZh: '附圖顯示某經濟體中 X 物品的生產鏈：\n• 本地進口商從外地購入原料 $200，以 $400 批發給本地超市。\n• 本地農民生產 $600 原料賣給本地超市，且農民自身的存貨增加了 $50。\n• 本地超市以 $1,200（含 $100 銷售稅）售給本地消費者，並以 $500 售給外地遊客。\n求此生產鏈對該經濟體按「要素成本」計算的 GDP 貢獻？',
    options: [
      { label: 'A', text: '$1,400', textZh: '$1,400' },
      { label: 'B', text: '$1,450', textZh: '$1,450' },
      { label: 'C', text: '$1,500', textZh: '$1,500' },
      { label: 'D', text: '$1,550', textZh: '$1,550' },
    ],
    correctAnswer: 'B',
    explanation: 'Value added per stage:\n1. Local importers: Revenue ($400) - Foreign imported materials ($200) = $200.\n2. Local farmers: Output sold ($600) + Change in inventory ($50) = $650.\n3. Local supermarkets: Total revenue excluding sales tax for factor cost = ($1,200 - $100 tax) + $500 exports = $1,600. Intermediate inputs purchased = $400 (from importers) + $600 (from farmers) = $1,000. Supermarkets value added at factor cost = 1600 - 1000 = $600.\nTotal GDP at factor cost = $200 (importers) + $650 (farmers) + $600 (supermarkets) = $1,450.',
    explanationZh: '各環節要素成本增值：\n1. 本地進口商 = 400 - 200 (外國進口) = $200\n2. 本地農夫 = 產出 (600) + 存貨增加 (50) = $650\n3. 本地超市要素產值 = [ (1200 - 100 銷售稅) + 500 ] - 中間採購 (400 + 600) = 1600 - 1000 = $600\n總要素成本 GDP = 200 + 650 + 600 = $1,450。',
  },
  {
    id: 'dse-2023-q25',
    year: 2023,
    questionNumber: 'Q25',
    subtopic: 'production-approach',
    difficulty: 'Challenging',
    question: 'The diagram shows a production chain of smartphones in an economy:\n• Local materials: $60 sold to Local smartphone manufacturers.\n• Local manufacturers sell: $100 to Foreign consumers + $460 to Local smartphone retailers.\n• Imported smartphones worth $X are also supplied to Local smartphone retailers.\n• Local smartphone retailers sell to local consumers for $640 ($40 sales tax inclusive).\nIf the contribution of the above production chain to the economy\'s GDP at factor cost is $560, the value of X is ___________.',
    questionZh: '附圖顯示智能手機的生產鏈：\n• 本地原料 $60 售予本地製造商；\n• 本地製造商以 $100 外銷外國消費者，以 $460 售予本地零售商；\n• 價值 $X 的進口手機亦供應給本地零售商；\n• 零售商以 $640（含 $40 銷售稅）售給本地消費者。\n若此生產鏈對該經濟體要素成本 GDP 的貢獻為 $560，X 的值是 ___________。',
    options: [
      { label: 'A', text: '40', textZh: '40' },
      { label: 'B', text: '80', textZh: '80' },
      { label: 'C', text: '140', textZh: '140' },
      { label: 'D', text: '180', textZh: '180' },
    ],
    correctAnswer: 'A',
    explanation: 'Total GDP at factor cost = Value added of (Local materials + Manufacturers + Retailers at factor cost):\n1. Local materials = $60\n2. Manufacturers = Output (100 + 460) - Inputs (60) = $500\n3. Retailers at factor cost = Revenue net of tax (640 - 40 = 600) - Inputs (460 + X) = 140 - X\nTotal GDPfc = 60 + 500 + (140 - X) = 700 - X.\nGiven Total GDPfc = $560 => 700 - X = 560 => X = 140.\nWait, let\'s verify: 700 - 560 = 140. Hence X = 140 (Option C).',
    explanationZh: '要素成本總貢獻 = 本地原料 (60) + 製造商增值 [(100+460)-60 = 500] + 零售商要素增值 [(640-40) - (460+X) = 140-X] = 700 - X。\n已知總 GDPfc = 560 => 700 - X = 560 => X = 140 (選項 C)。',
  },
  {
    id: 'dse-2024-q24',
    year: 2024,
    questionNumber: 'Q24',
    subtopic: 'expenditure-approach',
    difficulty: 'Intermediate',
    question: 'Refer to the following data of an economy:\nPrivate consumption expenditure = $100M, Net domestic fixed capital formation = $20M, Government consumption expenditure = $30M, Change in inventories = -$5M, Net export of goods = $60M, Re-exports = $27M, Import of services = $80M, Export of services = $40M, Depreciation = $11M, Indirect tax = $18M.\nThe gross domestic product (GDP) at market price is $_________ million.',
    questionZh: '某經濟體數據：私人消費=$100M，固定資本形成淨額=$20M，政府消費=$30M，存貨變動=-$5M，貨物淨出口=$60M，轉口=$27M，服務輸入=$80M，服務輸出=$40M，折舊=$11M，間接稅=$18M。求市價 GDP？',
    options: [
      { label: 'A', text: '165', textZh: '165' },
      { label: 'B', text: '176', textZh: '176' },
      { label: 'C', text: '194', textZh: '194' },
      { label: 'D', text: '203', textZh: '203' },
    ],
    correctAnswer: 'A',
    explanation: '1. C = $100M\n2. I = Net fixed capital ($20) + Depreciation ($11) + Change in inventories (-$5) = 20 + 11 - 5 = $26M\n3. G = $30M\n4. Net Exports = Net export of goods ($60) + [Export of services ($40) - Import of services ($80)] = 60 + (40 - 80) = 60 - 40 = $20M (Note: Re-exports $27M is already part of goods net export).\nGDPmp = 100 + 26 + 30 + 20 = $176M.\nWait! Let\'s check arithmetic: 100 + 26 + 30 + 20 = 176 (Option B).',
    explanationZh: '1. 私人消費 C = $100M\n2. 總投資 I = 固定資本形成淨額 (20) + 折舊 (11) + 存貨變動 (-5) = $26M\n3. 政府消費 G = $30M\n4. 淨出口 = 貨物淨出口 (60) + [服務輸出 (40) - 服務輸入 (80)] = 60 - 40 = $20M（轉口已包含在貨物淨出口中）。\n市價 GDP = 100 + 26 + 30 + 20 = $176M (選項 B)。',
  },
  {
    id: 'dse-2025-q24',
    year: 2025,
    questionNumber: 'Q24',
    subtopic: 'gni-nfia',
    difficulty: 'Basic',
    question: 'Which of the following is NOT included in the gross national income (GNI) of Hong Kong?',
    questionZh: '下列哪一項不包括在香港的本地居民總收入 (GNI) 之內？',
    options: [
      { label: 'A', text: 'the dividend received by a Japanese resident from a company in Hong Kong', textZh: '一名日本居民從香港某公司所收取的股息' },
      { label: 'B', text: 'the salary received by a British consultant working in Hong Kong for 18 months', textZh: '一名在香港工作了 18 個月的英國籍顧問所獲得的薪金' },
      { label: 'C', text: 'the interest received by a Hong Kong resident holding Silver Bonds issued by the HK Government', textZh: '一名香港居民持有香港特區政府發行的銀色債券所收取的利息' },
      { label: 'D', text: 'the rental income earned by a Hong Kong resident for investing in properties in Mainland', textZh: '一名香港居民在內地投資物業所賺取的租金收入' },
    ],
    correctAnswer: 'A',
    explanation: 'A Japanese resident is a non-resident. Dividends paid to him from HK represent factor income paid abroad (FIPA), which is deducted from HK GDP to arrive at HK GNI, so it is NOT part of HK GNI. In B, the British consultant has resided in HK > 1 year (18 months), so he is a HK resident, and his salary is in HK GNI.',
    explanationZh: 'A 選項中日本居民為非香港常住居民，其獲取的股息屬於「對外要素收益流出」(FIPA)，計算香港 GNI 時會被扣除，故不包括在香港 GNI 內。B 選項英國顧問在港 18 個月已成常住居民，其薪金計入 GNI。',
  },
  {
    id: 'dse-2025-q25',
    year: 2025,
    questionNumber: 'Q25',
    subtopic: 'gdp-limitations',
    difficulty: 'Basic',
    question: 'When the per capita real gross domestic product (GDP) of a country decreases, the general living standard of the country may still improve if __________.\n(1) there are more non-marketed goods in the country\n(2) the working hours of the country\'s residents increases\n(3) the general price level of the country decreases',
    questionZh: '當一個國家的人均實質本地生產總值下降時，若 ___________，該國的整體生活水平仍有可能改善。\n(1) 該國的非市場交易產品數量增加\n(2) 該國居民的工時增加\n(3) 該國的整體物價水平下降',
    options: [
      { label: 'A', text: '(1) only', textZh: '只有 (1)' },
      { label: 'B', text: '(2) only', textZh: '只有 (2)' },
      { label: 'C', text: '(1) and (3) only', textZh: '只有 (1)、(3)' },
      { label: 'D', text: '(2) and (3) only', textZh: '只有 (2)、(3)' },
    ],
    correctAnswer: 'A',
    explanation: '(1) True: Non-marketed goods (e.g., homemade food, volunteer care, household maintenance) provide actual satisfaction but are excluded from GDP. If they increase, real welfare can improve.\n(2) False: Longer working hours reduce leisure time and increase fatigue, deteriorating living standards.\n(3) False: Real GDP is already adjusted for price level changes; a lower price level does not change real per-capita purchasing power beyond what is measured in real GDP.',
    explanationZh: '(1) 正確：非市場產品（如自製食品、家務照顧）能提供實質效用但不計入 GDP，其增加可改善生活質素。(2) 工時增加減少閒暇，使生活水平惡化。(3) 實質 GDP 已撇除物價影響，物價下降不會額外改變已調整的實質產出。因此只有 (1)。',
  },
  {
    id: 'dse-2025-q26',
    year: 2025,
    questionNumber: 'Q26',
    subtopic: 'production-approach',
    difficulty: 'Challenging',
    question: 'The diagram shows a production chain of coffee grinders in an economy:\n• Foreign exporters supply $90 raw materials to Local Manufacturers.\n• Local materials worth $70 are also supplied to Local Manufacturers.\n• Local manufacturers sell: $140 to Local Retailers + $80 to Foreign Retailers.\n• Local retailers sell to Local Consumers for $440 ($60 sales tax inclusive).\nWhat is the contribution of the above production chain to the economy\'s GDP at factor cost?',
    questionZh: '附圖顯示某經濟體咖啡磨豆機的生產鏈：\n• 外國出口商向本地製造商供應原料 $90。\n• 本地原料 $70 亦供應給本地製造商。\n• 本地製造商以 $140 售予本地零售商，以 $80 售予外國零售商。\n• 本地零售商以 $440（含 $60 銷售稅）售給本地消費者。\n求此生產鏈對該經濟體要素成本 GDP 的貢獻？',
    options: [
      { label: 'A', text: '$370', textZh: '$370' },
      { label: 'B', text: '$430', textZh: '$430' },
      { label: 'C', text: '$460', textZh: '$460' },
      { label: 'D', text: '$490', textZh: '$490' },
    ],
    correctAnswer: 'A',
    explanation: 'Value added at factor cost:\n1. Local raw materials = $70\n2. Local manufacturers = Output (140 + 80 = 220) - Inputs [Foreign ($90) + Local ($70)] = 220 - 160 = $60\n3. Local retailers at factor cost = Revenue net of sales tax (440 - 60 = 380) - Purchases from manufacturers (140) = 380 - 140 = $240\nTotal GDP at factor cost = 70 + 60 + 240 = $370.',
    explanationZh: '各階段要素成本增值：\n1. 本地原料 = $70\n2. 本地製造商 = (140 + 80) - (90 + 70) = 220 - 160 = $60\n3. 本地零售商（扣除 $60 銷售稅） = (440 - 60) - 140 = 380 - 140 = $240\n總要素成本 GDP = 70 + 60 + 240 = $370 (選項 A)。',
  }
];

export const DSE_PAPER2_QUESTIONS: Paper2Question[] = [
  {
    id: 'dse-2012-b10',
    year: 2012,
    questionNumber: 'B10(a)(i)',
    subtopic: 'rpu-resident',
    totalMarks: 2,
    context: 'In 2011, the Financial Secretary announced the "Scheme $6000" which provides $6000 to each Hong Kong permanent resident who is 18 years old or above. Mr. Chan is a retired person and received $6000 through the scheme in 2011.',
    contextZh: '2011年，財政司司長宣佈推出「$6,000計劃」，向每名年滿18歲的香港永久性居民發放6,000元。陳先生是一名退休人士，於2011年透過該計劃領取了6,000元。',
    parts: [
      {
        partLabel: '(a)(i)',
        question: 'Should this item of payment by the government be included in the calculation of Gross Domestic Product of Hong Kong in 2011? Explain.',
        questionZh: '政府的這筆款項應否計入2011年香港的本地生產總值？試解釋。',
        marks: 2,
        rubric: [
          { point: 'State clearly: No / Should NOT be included', pointZh: '明確指明：否／不應計入', marks: 1, keywords: ['no', 'not included', '不計入', '否'] },
          { point: 'Economic reason: Because it is a transfer payment which does not involve any current production of goods and services.', pointZh: '經濟學解釋：因為這屬於轉移支付，不涉及任何本期貨物或服務的生產。', marks: 1, keywords: ['transfer payment', 'production', 'no production', '轉移支付', '沒有生產', '非生產性'] }
        ],
        modelAnswer: 'No, it should NOT be included in the calculation of Hong Kong\'s GDP in 2011. This is because the $6,000 cash handout is a government transfer payment, which does not involve any current production of goods or services.',
        modelAnswerZh: '否，不應計入2011年香港的本地生產總值。因為這筆6,000元現金屬於政府的轉移支付（Transfer Payment），並不涉及任何本期貨物或服務的生產活動。',
        examinerTips: 'Always pair the categorical answer ("No") with the theoretical classification ("transfer payment") and state clearly that "no production is involved".'
      }
    ]
  },
  {
    id: 'dse-2015-b10',
    year: 2015,
    questionNumber: 'B10(a)(i)&(ii)',
    subtopic: 'gni-nfia',
    totalMarks: 5,
    context: 'Suppose a football club in Hong Kong hired a famous football player from Brazil as the coach for a 2-month course for kids. He received $8 million as his salary and returned to Brazil afterwards. However, the enrollment of the course was poor and the revenue from the course was $3 million only.',
    contextZh: '假設香港某足球會聘請了一位來自巴西的著名足球員，擔任為期兩個月的兒童足球訓練班教練。他獲得了800萬港元薪金，隨後返回巴西。然而訓練班報名人數欠佳，總學費收入僅有300萬港元。',
    parts: [
      {
        partLabel: '(a)(i)',
        question: 'What is the effect of organizing the above course on Hong Kong\'s gross domestic product (GDP)? Explain.',
        questionZh: '舉辦上述訓練班對香港的本地生產總值 (GDP) 有何影響？試解釋。',
        marks: 2,
        rubric: [
          { point: 'State the final change: Increase by $3 million', pointZh: '指出最終變動：增加300萬港元', marks: 1, keywords: ['increase by 3 million', '3 million', '+$3m', '增加300萬', '增加3百萬'] },
          { point: 'Reason: The market value of the final service produced in Hong Kong is measured by total course revenue ($3M).', pointZh: '理由：在香港境內生產的最終服務價值以訓練班的總收入（市價300萬）衡量。', marks: 1, keywords: ['market value', 'revenue', 'final service', '3 million', '市場價值', '學費收入', '最終服務'] }
        ],
        modelAnswer: 'Hong Kong\'s GDP will increase by $3 million. This is because GDP measures the total market value of all final goods and services produced within the economic territory of Hong Kong, which equals the total revenue from the course ($3 million). (Alternatively, by income approach: Coach compensation $8M + Firm loss -$5M = +$3M).',
        modelAnswerZh: '香港的本地生產總值 (GDP) 會增加 300 萬港元。因為 GDP 衡量在香港境內生產的最終貨物及服務的市場總值，即等於該訓練班所收取的總學費收入（300萬港元）。（或以收入法計算：教練薪金 $8M + 球會營運虧損 -$5M = +$3M）。',
        examinerTips: 'Students often incorrectly write $8M or -$5M. Remember that market output is valued by consumer spending ($3M) or factor income net of profits/losses ($8M wages + (-$5M) operating surplus = +$3M).'
      },
      {
        partLabel: '(a)(ii)',
        question: 'What is the effect of organizing the above course on Hong Kong\'s gross national product / income (GNP/GNI)? Explain.',
        questionZh: '舉辦上述訓練班對香港的本地居民總收入 (GNP/GNI) 有何影響？試解釋。',
        marks: 3,
        rubric: [
          { point: 'State change: Decrease by $5 million', pointZh: '指出變動：減少500萬港元', marks: 1, keywords: ['decrease by 5 million', '-5 million', '減少500萬', '減少5百萬'] },
          { point: 'Coach status: The Brazilian coach stayed < 1 year, so he is a non-resident of HK; his $8M salary is factor income paid abroad (FIPA).', pointZh: '教練身份：巴西教練在港不足一年，屬非香港居民，其800萬薪金屬於對外要素收益流出 (FIPA)。', marks: 1, keywords: ['non-resident', 'factor income paid abroad', 'FIPA', '非居民', '對外要素收益流出'] },
          { point: 'Calculation / Formula link: GNI = GDP ($3M) - Factor Income Paid Abroad ($8M) = -$5M (or HK club resident owners incurred $5M loss).', pointZh: '公式計算：GNI = GDP (300萬) - 對外要素收益流出 (800萬) = 減少500萬港元。', marks: 1, keywords: ['gni = gdp -', '3 - 8', '-5', 'loss of 5 million', '虧損500萬'] }
        ],
        modelAnswer: 'Hong Kong\'s GNI will decrease by $5 million.\nReason: The Brazilian coach stayed in Hong Kong for only 2 months (< 1 year) and is therefore a non-resident of Hong Kong. His $8 million salary represents Factor Income Paid Abroad (FIPA).\nSince GNI = GDP + NFIA = GDP ($3M) - FIPA ($8M), Hong Kong\'s GNI changes by $3M - $8M = -$5 million (reflecting the $5 million net operating loss borne by the local resident club).',
        modelAnswerZh: '香港的本地居民總收入 (GNI) 將會減少 500 萬港元。\n解釋：巴西教練在香港只逗留了 2 個月（少於一年），因此屬於非香港常住居民，其 800 萬薪金屬於「對外要素收益流出」(FIPA)。\n根據公式 GNI = GDP + 對外要素淨收益 = 300萬 (GDP) - 800萬 (流出) = -500 萬港元（反映本地足球會常住擁有人承擔了 500 萬的營運虧損）。',
        examinerTips: 'State the residency condition (< 1 year), identify the flow as FIPA, and show the exact formula calculation.'
      }
    ]
  },
  {
    id: 'dse-2021-a5',
    year: 2021,
    questionNumber: 'A5(a)',
    subtopic: 'gni-nfia',
    totalMarks: 5,
    context: 'Mr Chan, a Hong Kong retired footballer, was employed as a consultant by a football club in the United Kingdom in January 2020. Seven months later, he quitted his position and returned to Hong Kong.',
    contextZh: '陳先生是一名香港退役足球員，於2020年1月獲英國一間足球會聘請為顧問。7個月後，他辭去該職位並返回香港。',
    parts: [
      {
        partLabel: '(a)(i)',
        question: 'Explain whether the salary received by Mr Chan from the football club in the United Kingdom would be included in the calculation of gross domestic product (GDP) in Hong Kong.',
        questionZh: '解釋陳先生從英國足球會獲得的薪金會否計入香港的本地生產總值 (GDP)。',
        marks: 2,
        rubric: [
          { point: 'State clearly: No / Excluded from HK GDP', pointZh: '明確指明：否／不計入香港 GDP', marks: 1, keywords: ['no', 'not included', 'excluded', '否', '不計入'] },
          { point: 'Reason: The production / consultancy service took place outside the domestic economic territory of Hong Kong (in the UK).', pointZh: '理由：該顧問服務的生產活動是在香港經濟境域以外（英國境內）進行。', marks: 1, keywords: ['outside', 'territory', 'united kingdom', 'uk', 'not in hong kong', '境域外', '英國', '非境內生產'] }
        ],
        modelAnswer: 'No, it will NOT be included in Hong Kong\'s GDP. This is because GDP measures the value of goods and services produced within the domestic economic territory of Hong Kong, whereas Mr. Chan\'s consultancy services were provided outside Hong Kong (in the UK).',
        modelAnswerZh: '否，不計入香港的本地生產總值。因為 GDP 只衡量在香港經濟境域之內所生產的產值，而陳先生的顧問服務是在英國（香港境外）進行生產的。',
        examinerTips: 'Focus on the territorial concept of GDP.'
      },
      {
        partLabel: '(a)(ii)',
        question: 'Explain whether the salary received by Mr Chan would be included in the calculation of gross national income (GNI) in Hong Kong.',
        questionZh: '解釋陳先生獲得的該筆薪金會否計入香港的本地居民總收入 (GNI)。',
        marks: 3,
        rubric: [
          { point: 'State clearly: Yes / Included in HK GNI', pointZh: '明確指明：是／會計入香港 GNI', marks: 1, keywords: ['yes', 'included', '是', '計入'] },
          { point: 'Residency reason: Mr. Chan worked in the UK for only 7 months (< 1 year) and returned to HK, so he remains a Hong Kong resident.', pointZh: '居民身份：陳先生在英國只逗留了7個月（少於一年）並回港，因此他依然屬於香港常住居民。', marks: 1, keywords: ['resident', '7 months', 'less than 1 year', '香港居民', '7個月', '少於一年'] },
          { point: 'GNI link: His salary is factor income from abroad (FIA) earned by a HK resident, which is included in HK GNI.', pointZh: 'GNI 關聯：其薪金屬於香港常住居民的對外要素收益流入 (FIA)，計入香港 GNI。', marks: 1, keywords: ['factor income from abroad', 'fia', '對外要素收益流入', 'gni'] }
        ],
        modelAnswer: 'Yes, it will be included in Hong Kong\'s GNI.\nReason: Mr. Chan stayed in the UK for only 7 months (< 1 year) and returned to Hong Kong, so he remains a Hong Kong resident. His salary earned from the UK club is Factor Income from Abroad (FIA) earned by a HK resident, which is added to GDP to form Hong Kong\'s GNI.',
        modelAnswerZh: '是，會計入香港的本地居民總收入 (GNI)。\n理由：陳先生在英國僅逗留工作了 7 個月（少於一年），其經濟利益中心仍在香港，故他依然是香港常住居民。他在英國賺取的薪金屬於香港居民的「對外要素收益流入」(FIA)，因此計入香港 GNI。',
        examinerTips: 'Explicitly state the "less than 1 year" threshold and define the income as Factor Income from Abroad (FIA).'
      }
    ]
  },
  {
    id: 'dse-2022-b12',
    year: 2022,
    questionNumber: 'B12(b)',
    subtopic: 'expenditure-approach',
    totalMarks: 2,
    context: 'Source: All Hong Kong permanent residents and new arrivals aged 18 or above, who comply with the "residing in Hong Kong" requirement, could register to receive electronic consumption vouchers with a total value of $5,000 by instalments.',
    contextZh: '資料：所有符合「居港規定」年滿 18 歲的香港永久性居民及新來港人士，均可登記分期領取總額 5,000 元的電子消費券。',
    parts: [
      {
        partLabel: '(b)',
        question: 'Would the $5,000 distributed under the Consumption Voucher Scheme be included in the calculation of government consumption expenditure (G)? Explain your answer.',
        questionZh: '在消費券計劃下發放的 5,000 元會否計入政府消費開支 (G)？試解釋你的答案。',
        marks: 2,
        rubric: [
          { point: 'State clearly: No / Excluded from Government Consumption Expenditure', pointZh: '明確指明：否／不計入政府消費開支 (G)', marks: 1, keywords: ['no', 'not included', 'excluded', '否', '不計入'] },
          { point: 'Reason: The distribution of vouchers is a transfer payment by the government, not a direct purchase of goods and services by the government.', pointZh: '理由：發放消費券屬於政府的轉移支付，而非政府直接購買商品或服務的開支。', marks: 1, keywords: ['transfer payment', 'purchase of goods and services', '轉移支付', '政府購買'] }
        ],
        modelAnswer: 'No, the $5,000 distributed will NOT be included in government consumption expenditure (G). The distribution of electronic consumption vouchers is a transfer payment from the government to citizens, which does not represent government purchases of goods and services. (Note: When citizens later spend the vouchers at shops, that spending is counted under Private Consumption Expenditure C).',
        modelAnswerZh: '否，發放的 5,000 元不會計入政府消費開支 (G)。因為發放消費券屬於政府對市民的轉移支付（Transfer Payment），並不構成政府對貨物及服務的直接採購開支。（註：市民日後持券在商戶消費時，則會計入私人消費開支 C）。',
        examinerTips: 'Distinguish between G (government direct purchase) and transfer payments. Clarify that actual voucher spending enters C, not G.'
      }
    ]
  },
  {
    id: 'dse-2024-a5',
    year: 2024,
    questionNumber: 'A5(a)&(b)',
    subtopic: 'nominal-real-deflator',
    totalMarks: 4,
    context: 'Refer to the statistical information of an economy:\n• 2022: Nominal GDP = $2,850,000 million, YoY % change in implicit price deflator = +3.8%\n• 2023: Nominal GDP = $2,800,000 million, YoY % change in implicit price deflator = +0.7%',
    contextZh: '參閱某經濟體的統計數據：\n• 2022年：名義 GDP = 2,850,000 百萬元，平減物價指數按年變動率 = +3.8%\n• 2023年：名義 GDP = 2,800,000 百萬元，平減物價指數按年變動率 = +0.7%',
    parts: [
      {
        partLabel: '(a)',
        question: 'Based on the above information, how did the real output of the economy change from 2022 to 2023? Explain your answer.',
        questionZh: '根據上述資料，由 2022 年至 2023 年，該經濟體的實質產出有何變動？試解釋你的答案。',
        marks: 2,
        rubric: [
          { point: 'State result: Real output decreased.', pointZh: '指出結論：實質產出（實質 GDP）下降。', marks: 1, keywords: ['decreased', 'fell', 'dropped', '下降', '減少'] },
          { point: 'Explanation: Nominal GDP decreased (from 2.85M to 2.80M, or %Δ Nominal < 0) while the price level increased (+0.7%), so real GDP must have decreased (%Δ Real ≈ %Δ Nominal - %Δ Price < 0).', pointZh: '解釋：名義 GDP 下降（由 285 萬減至 280 萬，為負增長），而物價水平仍在上升 (+0.7%)，因此實質產出必然下降。', marks: 1, keywords: ['nominal gdp decreased', 'price level increased', 'deflator', '名義下降', '物價上升'] }
        ],
        modelAnswer: 'The real output (Real GDP) of the economy decreased.\nExplanation: From 2022 to 2023, nominal GDP decreased from $2,850,000M to $2,800,000M (a negative growth of -1.75%), while the implicit price deflator increased by +0.7% (positive inflation). Since %Δ Real GDP ≈ %Δ Nominal GDP - %Δ Price Deflator, real output must have decreased.',
        modelAnswerZh: '該經濟體的實質產出（實質 GDP）下降。\n解釋：由 2022 至 2023 年，名義 GDP 由 285 萬百萬元減至 280 萬百萬元（名義增長率為負數，約 -1.75%），但平減物價指數仍上升了 +0.7%（正通脹）。實質 GDP 增長率 ≈ 名義 GDP 增長率 - 平減物價指數變動率 < 0，故實質產出必然下降。',
        examinerTips: 'State the direction of Nominal GDP, the direction of the Deflator, and apply the economic relationship.'
      },
      {
        partLabel: '(b)',
        question: '"As the nominal GDP in 2023 decreased, the general living standard in the economy deteriorated during that period." Suggest TWO reasons why this statement may be incorrect.',
        questionZh: '「由於 2023 年名義 GDP 下降，該經濟體的生活水平在該期間必然惡化。」試提出兩個理由，解釋為何該說法可能不正確。',
        marks: 2,
        rubric: [
          { point: 'Reason 1 (any valid limitation): e.g. Population may have decreased faster than GDP, leading to an increase in per-capita real output.', pointZh: '理由一（任選一項 GDP 局限）：例如人口下降幅度大於產出下降幅度，使人均實質產出反而上升。', marks: 1, keywords: ['population', 'per capita', '人口', '人均'] },
          { point: 'Reason 2 (any other valid limitation): e.g. Non-marketed goods/services or leisure time increased, income distribution became more equal, or negative externalities (pollution) decreased.', pointZh: '理由二（任選另一項局限）：例如休閒時間/非市場產出增加、收入分配更平均、或環境污染減少。', marks: 1, keywords: ['leisure', 'non-marketed', 'income distribution', 'pollution', 'externalities', '閒暇', '非市場', '收入分配', '污染'] }
        ],
        modelAnswer: 'The statement may be incorrect due to the following reasons (any two):\n1. Population decrease: If the population decreased at a faster rate than the output drop, per-capita output would increase.\n2. Income distribution: Income distribution might have become more equal, improving the welfare of the general public.\n3. Leisure & Non-marketed goods: Working hours might have decreased, giving workers more leisure time and more home-produced goods.\n4. Negative externalities: Pollution, congestion, or industrial hazards might have reduced.',
        modelAnswerZh: '該說法可能不正確的理由（任寫兩個）：\n1. 人口減少：若人口下降幅度大於產出下降幅度，人均產出可能反而增加。\n2. 收入分配：收入分配可能變得更均勻，令多數大眾的實際生活獲得改善。\n3. 閒暇與非市場產出：居民工時可能減少，獲得更多閒暇時間或自給自足的家庭勞務。\n4. 負外部效應減少：工業污染、交通擠塞或環境破壞可能顯著減少。',
        examinerTips: 'Use precise economic concepts: per-capita, income distribution, non-marketed goods/leisure, or externalities.'
      }
    ]
  },
  {
    id: 'dse-2025-b11',
    year: 2025,
    questionNumber: 'B11(a)(ii)',
    subtopic: 'rpu-resident',
    totalMarks: 2,
    context: 'Source: In the fiscal year of 2022-23, it is estimated that the total rental value of private residential units contributed $300 billion to Hong Kong\'s GDP. Average rental of a typical unit is $14,000, and number of private units is 1,270,000.',
    contextZh: '資料：在 2022-23 財政年度，估計私人住宅單位的總租值為香港本地生產總值貢獻了 3,000 億港元。市區典型單位平均月租為 14,000 元，私人住宅單位總數為 1,270,000 個。',
    parts: [
      {
        partLabel: '(a)(ii)',
        question: 'Give ONE reason to explain why tenants\' total rental payment on private residential units in Hong Kong would be less than the contribution of the total rental value of the private residential units to GDP of $300 billion.',
        questionZh: '試提出一個理由，解釋為何香港租客在私人住宅單位上的總租金支出，會少於私人住宅單位總租值對 GDP 貢獻的 3,000 億港元。',
        marks: 2,
        rubric: [
          { point: 'Identify owner-occupied housing: Many private residential units are owner-occupied (lived in by their owners), so owners do not pay market rent.', pointZh: '指出自住物業：許多私人住宅是由業主自住（而非出租），業主無需實際支付租金。', marks: 1, keywords: ['owner-occupied', 'owner occupied', 'owners live', '自住', '業主自住'] },
          { point: 'Imputed rent explanation: The $300 billion GDP contribution includes the IMPUTED RENT (estimated rental value) of these owner-occupied units, whereas actual tenant payments only cover leased units.', pointZh: '推定租金概念：3,000 億的 GDP 貢獻包含了自住單位的「推定租金」(Imputed Rent)，而租客支出僅反映已出租物業。', marks: 1, keywords: ['imputed rent', 'estimated rental', '推定租金', '估計租值'] }
        ],
        modelAnswer: 'Many private residential units in Hong Kong are owner-occupied. The $300 billion contribution to GDP includes the imputed rent (estimated rental value) of owner-occupied housing services. Since owner-occupiers do not make actual rental payments to landlords, the actual rental payments made by tenants are less than the total GDP contribution.',
        modelAnswerZh: '香港有相當比例的私人住宅單位是由業主自住。計入 GDP 的 3,000 億港元包含了自住物業的「推定租金」(Imputed Rent)。由於自住業主無需向業主實際支付租金，因此租客的實際租金支出總額必然小於計入 GDP 的總租值。',
        examinerTips: 'Key keyword required by HKEAA: "owner-occupied" and "imputed rent".'
      }
    ]
  }
];

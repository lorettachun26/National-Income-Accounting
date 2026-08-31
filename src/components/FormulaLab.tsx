import React, { useState } from 'react';
import { 
  Calculator, 
  Layers, 
  ArrowRight, 
  AlertTriangle, 
  TrendingUp, 
  HelpCircle,
  Sparkles,
  Sliders,
  DollarSign,
  PieChart,
  CheckCircle
} from 'lucide-react';

interface FormulaLabProps {
  lang?: 'en' | 'zh';
}

export const FormulaLab: React.FC<FormulaLabProps> = () => {
  const [labTab, setLabTab] = useState<'production' | 'expenditure' | 'factor-cost' | 'real-nominal' | 'gni'>('production');

  // Production Chain State
  const [importedMaterial, setImportedMaterial] = useState<number>(80);
  const [localMaterial, setLocalMaterial] = useState<number>(70);
  const [factoryExports, setFactoryExports] = useState<number>(200);
  const [factoryToRetailer, setFactoryToRetailer] = useState<number>(250);
  const [retailPriceWithoutTax, setRetailPriceWithoutTax] = useState<number>(340);
  const [salesTax, setSalesTax] = useState<number>(60);
  const [productionSubsidy, setProductionSubsidy] = useState<number>(0);

  // Expenditure Sandbox State
  const [cVal, setCVal] = useState<number>(500);
  const [netFixedCap, setNetFixedCap] = useState<number>(260);
  const [depreciationVal, setDepreciationVal] = useState<number>(90);
  const [changeInventory, setChangeInventory] = useState<number>(-50);
  const [gVal, setGVal] = useState<number>(470);
  const [domesticExports, setDomesticExports] = useState<number>(240);
  const [reExports, setReExports] = useState<number>(140);
  const [exportServices, setExportServices] = useState<number>(200);
  const [importGoods, setImportGoods] = useState<number>(220);
  const [importServices, setImportServices] = useState<number>(130);

  // Factor Cost Converter State
  const [marketPriceGdp, setMarketPriceGdp] = useState<number>(2000);
  const [indirectTaxVal, setIndirectTaxVal] = useState<number>(150);
  const [subsidyVal, setSubsidyVal] = useState<number>(40);
  const [directTaxTrapVal, setDirectTaxTrapVal] = useState<number>(100);
  const [showDirectTaxWarning, setShowDirectTaxWarning] = useState<boolean>(false);

  // Nominal vs Real State
  const [nominalGdpGrowth, setNominalGdpGrowth] = useState<number>(5.5);
  const [deflatorGrowth, setDeflatorGrowth] = useState<number>(3.0);
  const [populationGrowth, setPopulationGrowth] = useState<number>(1.0);

  // GNI Sandbox State
  const [baseGdp, setBaseGdp] = useState<number>(3000);
  const [fiaVal, setFiaVal] = useState<number>(250); // Factor income from abroad
  const [fipaVal, setFipaVal] = useState<number>(180); // Factor income paid abroad

  // Calculations for Production Chain
  const factoryTotalOutput = factoryExports + factoryToRetailer;
  const factoryIntermediatePurchases = importedMaterial + localMaterial;
  const factoryValueAdded = factoryTotalOutput - factoryIntermediatePurchases;
  
  const retailGrossRevenue = retailPriceWithoutTax + salesTax;
  const retailerValueAddedAtFactorCost = retailPriceWithoutTax - factoryToRetailer;
  const retailerValueAddedAtMarketPrice = retailGrossRevenue - factoryToRetailer;

  const totalGdpMarketPrice = localMaterial + factoryValueAdded + retailerValueAddedAtMarketPrice - productionSubsidy;
  const totalGdpFactorCost = localMaterial + factoryValueAdded + retailerValueAddedAtFactorCost;

  // Calculations for Expenditure Approach
  const grossFixedCap = netFixedCap + depreciationVal;
  const grossInvestment = grossFixedCap + changeInventory;
  const totalExports = domesticExports + reExports + exportServices;
  const totalImports = importGoods + importServices;
  const netExports = totalExports - totalImports;
  const calculatedGdpMp = cVal + grossInvestment + gVal + netExports;

  // Calculations for Factor Cost
  const calculatedGdpFc = marketPriceGdp - indirectTaxVal + subsidyVal;

  // Calculations for Nominal vs Real
  const approxRealGdpGrowth = +(nominalGdpGrowth - deflatorGrowth).toFixed(2);
  const approxPerCapitaRealGrowth = +(approxRealGdpGrowth - populationGrowth).toFixed(2);

  // Calculations for GNI
  const nfia = fiaVal - fipaVal;
  const calculatedGni = baseGdp + nfia;

  return (
    <div className="space-y-8 pb-12">
      {/* Editorial Header */}
      <div className="bg-white border-2 border-black p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-black pb-4 mb-4 gap-2">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[10px] uppercase font-bold tracking-widest bg-red-700 text-white px-2 py-0.5">
                Section B: Formula Laboratory
              </span>
              <span className="text-[11px] font-mono text-gray-500">Live Computational Engine</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif italic tracking-tight text-[#1a1a1a]">
              Interactive Formula & Production Chain Lab
            </h1>
            <p className="text-xs text-gray-500 font-mono mt-1">
              Dynamic economic simulation: Value-added chains, C+I+G+(X-M) adjustments, Factor cost conversions, and Deflators.
            </p>
          </div>
        </div>

        {/* Sub-tabs */}
        <div className="flex space-x-2 overflow-x-auto pt-2 no-scrollbar">
          {[
            { id: 'production', label: '1. Production Chain (Value-Added)' },
            { id: 'expenditure', label: '2. Expenditure Approach C+I+G+(X-M)' },
            { id: 'factor-cost', label: '3. Market Price ↔ Factor Cost' },
            { id: 'real-nominal', label: '4. Nominal vs Real & Deflator' },
            { id: 'gni', label: '5. GNI & NFIA Flowchart' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setLabTab(t.id as any)}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors border ${
                labTab === t.id
                  ? 'bg-black text-white border-black font-bold'
                  : 'bg-white text-neutral-700 border-neutral-300 hover:border-black hover:bg-[#f4f4f0]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* TAB 1: PRODUCTION CHAIN / VALUE ADDED LAB */}
      {labTab === 'production' && (
        <div className="space-y-6">
          <div className="bg-white border-2 border-black p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 pb-3 border-b-2 border-black gap-2">
              <div>
                <h3 className="text-xl font-serif italic font-bold text-[#1a1a1a]">
                  Multi-Stage Production Chain Simulator
                </h3>
                <p className="text-xs text-gray-500 font-mono mt-0.5">
                  Simulate HKDSE production chains (e.g. 2014 Q24, 2021 Q23, 2023 Q25, 2025 Q26) with imported inputs and sales taxes.
                </p>
              </div>
              <span className="text-xs font-mono bg-neutral-100 border border-black text-black px-3 py-1 font-bold">
                Value Added = Output - Intermediate Purchases
              </span>
            </div>

            {/* Visual Interactive Chain Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Stage 1: Raw Materials */}
              <div className="bg-[#fdfdfb] border border-black p-4 space-y-3 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-black flex items-center justify-between border-b border-neutral-300 pb-2">
                  <span className="font-serif italic font-bold text-sm">Stage 1: Raw Materials</span>
                  <span className="text-red-700 font-mono font-bold text-[10px]">STAGE 1</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <label className="text-xs text-neutral-800 flex justify-between font-medium">
                      <span>Imported Materials:</span>
                      <strong className="text-red-700 font-mono font-bold">${importedMaterial}</strong>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="300"
                      step="10"
                      value={importedMaterial}
                      onChange={(e) => setImportedMaterial(Number(e.target.value))}
                      className="w-full h-1.5 bg-neutral-200 cursor-pointer accent-black"
                    />
                    <span className="text-[10px] text-gray-500 block">⚠️ Foreign input (deducted from local value-added)</span>
                  </div>

                  <div>
                    <label className="text-xs text-neutral-800 flex justify-between font-medium">
                      <span>Local Raw Materials:</span>
                      <strong className="text-black font-mono font-bold">${localMaterial}</strong>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="300"
                      step="10"
                      value={localMaterial}
                      onChange={(e) => setLocalMaterial(Number(e.target.value))}
                      className="w-full h-1.5 bg-neutral-200 cursor-pointer accent-black"
                    />
                    <span className="text-[10px] text-gray-500 block">✓ 100% created by local producers</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-black text-xs text-black font-bold flex justify-between">
                  <span>Local Material Value-Added:</span>
                  <span className="font-mono">${localMaterial}</span>
                </div>
              </div>

              {/* Stage 2: Local Manufacturer */}
              <div className="bg-[#fdfdfb] border border-black p-4 space-y-3 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-black flex items-center justify-between border-b border-neutral-300 pb-2">
                  <span className="font-serif italic font-bold text-sm">Stage 2: Manufacturer</span>
                  <span className="text-red-700 font-mono font-bold text-[10px]">STAGE 2</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <label className="text-xs text-neutral-800 flex justify-between font-medium">
                      <span>Export to Foreign Consumers:</span>
                      <strong className="text-black font-mono font-bold">${factoryExports}</strong>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      step="10"
                      value={factoryExports}
                      onChange={(e) => setFactoryExports(Number(e.target.value))}
                      className="w-full h-1.5 bg-neutral-200 cursor-pointer accent-black"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-neutral-800 flex justify-between font-medium">
                      <span>Sold to Local Retailers:</span>
                      <strong className="text-black font-mono font-bold">${factoryToRetailer}</strong>
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="500"
                      step="10"
                      value={factoryToRetailer}
                      onChange={(e) => setFactoryToRetailer(Number(e.target.value))}
                      className="w-full h-1.5 bg-neutral-200 cursor-pointer accent-black"
                    />
                  </div>
                </div>
                <div className="pt-2 border-t border-neutral-300 text-xs space-y-1 font-mono">
                  <div className="flex justify-between text-gray-600 text-[11px]">
                    <span>Output: ${factoryTotalOutput} (Exp ${factoryExports} + Local ${factoryToRetailer})</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-[11px]">
                    <span>Inputs: ${factoryIntermediatePurchases} (Imp ${importedMaterial} + Loc ${localMaterial})</span>
                  </div>
                  <div className="flex justify-between text-black font-bold pt-1 border-t border-black">
                    <span>Manufacturer Value-Added:</span>
                    <span>${factoryValueAdded}</span>
                  </div>
                </div>
              </div>

              {/* Stage 3: Local Retailer */}
              <div className="bg-[#fdfdfb] border border-black p-4 space-y-3 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-black flex items-center justify-between border-b border-neutral-300 pb-2">
                  <span className="font-serif italic font-bold text-sm">Stage 3: Retailer</span>
                  <span className="text-red-700 font-mono font-bold text-[10px]">STAGE 3</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <label className="text-xs text-neutral-800 flex justify-between font-medium">
                      <span>Retail Price (Excl. Tax):</span>
                      <strong className="text-black font-mono font-bold">${retailPriceWithoutTax}</strong>
                    </label>
                    <input
                      type="range"
                      min={factoryToRetailer}
                      max="800"
                      step="10"
                      value={retailPriceWithoutTax}
                      onChange={(e) => setRetailPriceWithoutTax(Number(e.target.value))}
                      className="w-full h-1.5 bg-neutral-200 cursor-pointer accent-black"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-neutral-800 flex justify-between font-medium">
                      <span>Sales Tax Included:</span>
                      <strong className="text-red-700 font-mono font-bold">${salesTax}</strong>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="150"
                      step="5"
                      value={salesTax}
                      onChange={(e) => setSalesTax(Number(e.target.value))}
                      className="w-full h-1.5 bg-neutral-200 cursor-pointer accent-black"
                    />
                  </div>
                </div>
                <div className="pt-2 border-t border-neutral-300 text-xs space-y-1 font-mono">
                  <div className="flex justify-between text-gray-600 text-[11px]">
                    <span>Final Consumer Price: ${retailGrossRevenue}</span>
                  </div>
                  <div className="flex justify-between text-black font-bold pt-1 border-t border-black">
                    <span>Retailer Value-Added (MP):</span>
                    <span>${retailerValueAddedAtMarketPrice}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 text-[11px]">
                    <span>Retailer Value-Added (FC):</span>
                    <span>${retailerValueAddedAtFactorCost}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Summary Box */}
            <div className="border-t-4 border-double border-black pt-6 bg-[#1a1a1a] text-white p-5 sm:p-6">
              <h4 className="text-sm font-serif italic font-bold text-yellow-300 mb-4 flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Calculated Contribution to GDP</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-neutral-900 p-4 border border-neutral-700">
                  <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">GDP at Market Price</div>
                  <div className="text-3xl font-serif italic font-bold text-white mt-1">${totalGdpMarketPrice}</div>
                  <div className="text-xs text-neutral-300 mt-2 space-y-1 font-mono text-[11px]">
                    <div>= Local Materials (${localMaterial}) + Factory VA (${factoryValueAdded}) + Retailer VA (${retailerValueAddedAtMarketPrice})</div>
                    <div className="text-yellow-300">
                      Check via Expenditure: C (${retailGrossRevenue}) + X (${factoryExports}) - M (${importedMaterial}) = ${retailGrossRevenue + factoryExports - importedMaterial} ✓
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-900 p-4 border border-neutral-700">
                  <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">GDP at Factor Cost</div>
                  <div className="text-3xl font-serif italic font-bold text-yellow-400 mt-1">${totalGdpFactorCost}</div>
                  <div className="text-xs text-neutral-300 mt-2 space-y-1 font-mono text-[11px]">
                    <div>= GDP at Market Price (${totalGdpMarketPrice}) - Indirect Sales Tax (${salesTax})</div>
                    <div className="text-yellow-300">
                      = ${totalGdpMarketPrice} - ${salesTax} = ${totalGdpFactorCost} ✓
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: EXPENDITURE APPROACH SANDBOX */}
      {labTab === 'expenditure' && (
        <div className="space-y-6">
          <div className="bg-white border-2 border-black p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 pb-4 border-b-2 border-black">
              <div>
                <h3 className="text-xl font-serif italic font-bold text-[#1a1a1a]">
                  Expenditure Method Sandbox: C + I + G + (X - M)
                </h3>
                <p className="text-xs text-gray-500 font-mono mt-0.5">
                  Adjust components to test gross capital formation with depreciation, inventory adjustments, and net exports.
                </p>
              </div>
              <div className="border border-black bg-black text-white px-4 py-2 text-right">
                <span className="text-[10px] uppercase font-bold text-gray-300 block">Calculated GDP (Market Price)</span>
                <span className="text-xl font-serif italic font-bold">${calculatedGdpMp} Million</span>
              </div>
            </div>

            {/* Sliders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Left Column: C, I, G */}
              <div className="space-y-4 bg-[#fdfdfb] p-4 border border-black">
                <div className="text-xs font-bold text-black uppercase tracking-wider border-b border-neutral-300 pb-1">
                  Domestic Demand (C, I, G)
                </div>
                
                {/* C */}
                <div>
                  <label className="text-xs text-neutral-800 flex justify-between font-medium">
                    <span>Private Consumption Expenditure (C):</span>
                    <strong className="text-black font-mono font-bold">${cVal}M</strong>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    step="10"
                    value={cVal}
                    onChange={(e) => setCVal(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-200 cursor-pointer accent-black"
                  />
                </div>

                {/* Net fixed + Depreciation = Gross Fixed */}
                <div className="p-3 bg-white border border-black space-y-2">
                  <span className="text-xs font-serif italic font-bold text-black">Investment Components (I - Capital Formation):</span>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] text-gray-600 flex justify-between">
                        <span>Net Fixed Capital:</span>
                        <strong className="text-black font-mono">${netFixedCap}M</strong>
                      </label>
                      <input
                        type="range"
                        min="50"
                        max="500"
                        step="10"
                        value={netFixedCap}
                        onChange={(e) => setNetFixedCap(Number(e.target.value))}
                        className="w-full h-1 bg-neutral-200 cursor-pointer accent-black"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-600 flex justify-between">
                        <span>Depreciation:</span>
                        <strong className="text-black font-mono">${depreciationVal}M</strong>
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="200"
                        step="5"
                        value={depreciationVal}
                        onChange={(e) => setDepreciationVal(Number(e.target.value))}
                        className="w-full h-1 bg-neutral-200 cursor-pointer accent-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-gray-600 flex justify-between">
                      <span>Change in Inventories:</span>
                      <strong className={`font-mono ${changeInventory >= 0 ? 'text-black' : 'text-red-700'}`}>
                        {changeInventory >= 0 ? `+${changeInventory}` : changeInventory}M
                      </strong>
                    </label>
                    <input
                      type="range"
                      min="-100"
                      max="100"
                      step="5"
                      value={changeInventory}
                      onChange={(e) => setChangeInventory(Number(e.target.value))}
                      className="w-full h-1 bg-neutral-200 cursor-pointer accent-black"
                    />
                  </div>
                  <div className="text-xs text-black font-bold pt-1 border-t border-neutral-300 flex justify-between font-mono">
                    <span>Total Gross Investment (I):</span>
                    <span>${grossInvestment}M</span>
                  </div>
                </div>

                {/* G */}
                <div>
                  <label className="text-xs text-neutral-800 flex justify-between font-medium">
                    <span>Government Consumption Expenditure (G):</span>
                    <strong className="text-black font-mono font-bold">${gVal}M</strong>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="800"
                    step="10"
                    value={gVal}
                    onChange={(e) => setGVal(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-200 cursor-pointer accent-black"
                  />
                </div>
              </div>

              {/* Right Column: Net Exports (X - M) */}
              <div className="space-y-4 bg-[#fdfdfb] p-4 border border-black">
                <div className="text-xs font-bold text-red-700 uppercase tracking-wider border-b border-neutral-300 pb-1">
                  External Sector (X - M)
                </div>

                {/* Exports breakdown */}
                <div className="p-3 bg-white border border-black space-y-2">
                  <span className="text-xs font-serif italic font-bold text-black">Exports (X = Goods + Services):</span>
                  <div className="space-y-1.5">
                    <div>
                      <label className="text-[11px] text-gray-600 flex justify-between">
                        <span>Domestic Exports of Goods:</span>
                        <strong className="text-black font-mono">${domesticExports}M</strong>
                      </label>
                      <input
                        type="range"
                        min="50"
                        max="500"
                        step="10"
                        value={domesticExports}
                        onChange={(e) => setDomesticExports(Number(e.target.value))}
                        className="w-full h-1 bg-neutral-200 cursor-pointer accent-black"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-600 flex justify-between">
                        <span>Re-exports of Goods:</span>
                        <strong className="text-black font-mono">${reExports}M</strong>
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="300"
                        step="10"
                        value={reExports}
                        onChange={(e) => setReExports(Number(e.target.value))}
                        className="w-full h-1 bg-neutral-200 cursor-pointer accent-black"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-600 flex justify-between">
                        <span>Exports of Services:</span>
                        <strong className="text-black font-mono">${exportServices}M</strong>
                      </label>
                      <input
                        type="range"
                        min="50"
                        max="400"
                        step="10"
                        value={exportServices}
                        onChange={(e) => setExportServices(Number(e.target.value))}
                        className="w-full h-1 bg-neutral-200 cursor-pointer accent-black"
                      />
                    </div>
                  </div>
                  <div className="text-xs text-black font-bold pt-1 border-t border-neutral-300 flex justify-between font-mono">
                    <span>Total Exports (X):</span>
                    <span>${totalExports}M</span>
                  </div>
                </div>

                {/* Imports breakdown */}
                <div className="p-3 bg-white border border-black space-y-2">
                  <span className="text-xs font-serif italic font-bold text-black">Imports (M = Goods + Services):</span>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] text-gray-600 flex justify-between">
                        <span>Goods Imports:</span>
                        <strong className="text-black font-mono">${importGoods}M</strong>
                      </label>
                      <input
                        type="range"
                        min="50"
                        max="400"
                        step="10"
                        value={importGoods}
                        onChange={(e) => setImportGoods(Number(e.target.value))}
                        className="w-full h-1 bg-neutral-200 cursor-pointer accent-black"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-600 flex justify-between">
                        <span>Services Imports:</span>
                        <strong className="text-black font-mono">${importServices}M</strong>
                      </label>
                      <input
                        type="range"
                        min="20"
                        max="300"
                        step="10"
                        value={importServices}
                        onChange={(e) => setImportServices(Number(e.target.value))}
                        className="w-full h-1 bg-neutral-200 cursor-pointer accent-black"
                      />
                    </div>
                  </div>
                  <div className="text-xs text-red-700 font-bold pt-1 border-t border-neutral-300 flex justify-between font-mono">
                    <span>Total Imports (M):</span>
                    <span>${totalImports}M</span>
                  </div>
                </div>

                <div className="text-xs text-black font-bold flex justify-between p-2.5 bg-[#f4f4f0] border border-black font-mono">
                  <span>Net Exports (X - M):</span>
                  <span className={netExports >= 0 ? 'text-black' : 'text-red-700'}>
                    ${netExports}M
                  </span>
                </div>
              </div>
            </div>

            {/* Arithmetic Formula Breakdown */}
            <div className="bg-[#1a1a1a] text-white p-4 border border-black text-xs font-mono space-y-1">
              <div className="text-yellow-300 font-bold">Equation breakdown:</div>
              <div className="text-neutral-300">
                GDPmp = C (${cVal}) + I [Fixed (${netFixedCap} + ${depreciationVal}) + Inventory (${changeInventory})] + G (${gVal}) + Net Exports (${netExports})
              </div>
              <div className="text-yellow-300 font-bold pt-1">
                = ${cVal} + ${grossInvestment} + ${gVal} + (${netExports}) = ${calculatedGdpMp} Million
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: FACTOR COST VS MARKET PRICE */}
      {labTab === 'factor-cost' && (
        <div className="space-y-6">
          <div className="bg-white border-2 border-black p-6 shadow-sm">
            <div className="mb-4 border-b-2 border-black pb-3">
              <h3 className="text-xl font-serif italic font-bold text-[#1a1a1a]">
                Market Price ↔ Factor Cost Converter
              </h3>
              <p className="text-xs text-gray-500 font-mono mt-0.5">
                Learn how Indirect Business Taxes and Subsidies bridge the two valuations.
              </p>
            </div>

            {/* Formula Banner */}
            <div className="p-4 bg-[#f4f4f0] border-2 border-black text-center mb-6">
              <div className="text-[10px] uppercase font-bold text-gray-600 mb-1">Standard HKDSE Identity</div>
              <div className="text-base sm:text-lg font-serif italic font-bold text-black">
                GDP<sub>mp</sub> = GDP<sub>fc</sub> + Indirect Taxes - Subsidies
              </div>
              <div className="text-sm font-serif italic font-bold text-red-700 mt-1">
                GDP<sub>fc</sub> = GDP<sub>mp</sub> - Indirect Taxes + Subsidies
              </div>
            </div>

            {/* Sliders Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#fdfdfb] p-4 border border-black">
                <label className="text-xs text-neutral-800 flex justify-between font-medium">
                  <span>GDP at Market Price:</span>
                  <strong className="text-black font-mono font-bold">${marketPriceGdp}M</strong>
                </label>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="50"
                  value={marketPriceGdp}
                  onChange={(e) => setMarketPriceGdp(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 cursor-pointer accent-black mt-2"
                />
              </div>

              <div className="bg-[#fdfdfb] p-4 border border-black">
                <label className="text-xs text-neutral-800 flex justify-between font-medium">
                  <span>Indirect Taxes:</span>
                  <strong className="text-red-700 font-mono font-bold">${indirectTaxVal}M</strong>
                </label>
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="10"
                  value={indirectTaxVal}
                  onChange={(e) => setIndirectTaxVal(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 cursor-pointer accent-black mt-2"
                />
                <span className="text-[10px] text-gray-500 block mt-1">Deducted to find Factor Cost</span>
              </div>

              <div className="bg-[#fdfdfb] p-4 border border-black">
                <label className="text-xs text-neutral-800 flex justify-between font-medium">
                  <span>Production Subsidies:</span>
                  <strong className="text-black font-mono font-bold">${subsidyVal}M</strong>
                </label>
                <input
                  type="range"
                  min="0"
                  max="300"
                  step="10"
                  value={subsidyVal}
                  onChange={(e) => setSubsidyVal(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 cursor-pointer accent-black mt-2"
                />
                <span className="text-[10px] text-gray-500 block mt-1">Added to find Factor Cost</span>
              </div>
            </div>

            {/* Direct Tax Trap Alert Trigger */}
            <div className="bg-yellow-50 border-2 border-black p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-red-700" />
                  <span className="text-xs font-bold text-black uppercase">HKEAA Trap Test: Direct Taxes</span>
                </div>
                <button
                  onClick={() => setShowDirectTaxWarning(!showDirectTaxWarning)}
                  className="text-xs px-2.5 py-1 bg-black text-white font-bold uppercase hover:bg-neutral-800"
                >
                  {showDirectTaxWarning ? 'Hide Trap Explanation' : 'Why Direct Taxes are Ignored?'}
                </button>
              </div>
              <div className="mt-2">
                <label className="text-xs text-neutral-800 flex justify-between font-medium">
                  <span>Direct Taxes (Salaries/Profits Tax = ${directTaxTrapVal}M):</span>
                  <span className="text-red-700 font-mono font-bold">ADJUSTMENT = $0</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="300"
                  value={directTaxTrapVal}
                  onChange={(e) => setDirectTaxTrapVal(Number(e.target.value))}
                  className="w-full h-1 bg-neutral-200 cursor-pointer accent-black mt-1"
                />
              </div>
              {showDirectTaxWarning && (
                <div className="mt-3 p-3 bg-white border border-black text-xs text-neutral-800 space-y-1">
                  <p className="font-bold text-red-700">⚠️ Why do we NOT adjust Direct Taxes?</p>
                  <p className="leading-relaxed">
                    Direct taxes (Salaries Tax, Profits Tax) are taxes on factor incomes that factors of production already earned. They are ALREADY INCLUDED in both GDP at factor cost and GDP at market price. Therefore, changing direct taxes has ZERO adjustment on the conversion between GDPmp and GDPfc!
                  </p>
                </div>
              )}
            </div>

            {/* Calculated Output Result */}
            <div className="bg-[#1a1a1a] text-white p-5 border border-black flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">Resulting GDP at Factor Cost</div>
                <div className="text-3xl font-serif italic font-bold text-yellow-400 mt-0.5">${calculatedGdpFc} Million</div>
                <div className="text-xs font-mono text-neutral-300 mt-1">
                  Calculation: ${marketPriceGdp} (GDPmp) - ${indirectTaxVal} (Indirect Tax) + ${subsidyVal} (Subsidy) = ${calculatedGdpFc}M
                </div>
              </div>
              <div className="text-xs text-neutral-300 bg-neutral-900 p-3 border border-neutral-700 max-w-sm">
                💡 <strong>Tip:</strong> If Indirect Taxes {'>'} Subsidies, then GDP<sub>mp</sub> {'>'} GDP<sub>fc</sub>.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: NOMINAL VS REAL GDP & DEFLATOR */}
      {labTab === 'real-nominal' && (
        <div className="space-y-6">
          <div className="bg-white border-2 border-black p-6 shadow-sm">
            <div className="mb-4 border-b-2 border-black pb-3">
              <h3 className="text-xl font-serif italic font-bold text-[#1a1a1a]">
                Nominal vs Real GDP & Deflator Rate Simulator
              </h3>
              <p className="text-xs text-gray-500 font-mono mt-0.5">
                Test percentage change rules: %Δ Nominal ≈ %Δ Real + %Δ Price Level, and Per-Capita adjustments.
              </p>
            </div>

            {/* Growth rate controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#fdfdfb] p-4 border border-black">
                <label className="text-xs text-neutral-800 flex justify-between font-medium">
                  <span>%Δ Nominal GDP:</span>
                  <strong className={`font-mono font-bold ${nominalGdpGrowth >= 0 ? 'text-black' : 'text-red-700'}`}>
                    {nominalGdpGrowth > 0 ? `+${nominalGdpGrowth}` : nominalGdpGrowth}%
                  </strong>
                </label>
                <input
                  type="range"
                  min="-10"
                  max="15"
                  step="0.5"
                  value={nominalGdpGrowth}
                  onChange={(e) => setNominalGdpGrowth(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 cursor-pointer accent-black mt-2"
                />
              </div>

              <div className="bg-[#fdfdfb] p-4 border border-black">
                <label className="text-xs text-neutral-800 flex justify-between font-medium">
                  <span>%Δ Price Level:</span>
                  <strong className={`font-mono font-bold ${deflatorGrowth >= 0 ? 'text-black' : 'text-red-700'}`}>
                    {deflatorGrowth > 0 ? `+${deflatorGrowth}` : deflatorGrowth}%
                  </strong>
                </label>
                <input
                  type="range"
                  min="-5"
                  max="15"
                  step="0.5"
                  value={deflatorGrowth}
                  onChange={(e) => setDeflatorGrowth(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 cursor-pointer accent-black mt-2"
                />
                <span className="text-[10px] text-gray-500 block mt-1">
                  {deflatorGrowth > 0 ? 'Inflation' : 'Deflation'}
                </span>
              </div>

              <div className="bg-[#fdfdfb] p-4 border border-black">
                <label className="text-xs text-neutral-800 flex justify-between font-medium">
                  <span>%Δ Population:</span>
                  <strong className={`font-mono font-bold ${populationGrowth >= 0 ? 'text-black' : 'text-red-700'}`}>
                    {populationGrowth > 0 ? `+${populationGrowth}` : populationGrowth}%
                  </strong>
                </label>
                <input
                  type="range"
                  min="-5"
                  max="10"
                  step="0.5"
                  value={populationGrowth}
                  onChange={(e) => setPopulationGrowth(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 cursor-pointer accent-black mt-2"
                />
              </div>
            </div>

            {/* Output Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] text-white p-5 border border-black">
                <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">Real GDP Growth</div>
                <div className={`text-3xl font-serif italic font-bold mt-1 ${approxRealGdpGrowth >= 0 ? 'text-yellow-300' : 'text-red-400'}`}>
                  {approxRealGdpGrowth > 0 ? `+${approxRealGdpGrowth}` : approxRealGdpGrowth}%
                </div>
                <div className="text-xs text-neutral-300 mt-1 font-mono">
                  %Δ Real GDP ≈ %Δ Nominal ({nominalGdpGrowth}%) - %Δ Price ({deflatorGrowth}%)
                </div>
                <div className="mt-3 text-xs text-neutral-200 border-t border-neutral-700 pt-2">
                  {approxRealGdpGrowth > 0 
                    ? 'Physical volume of final goods and services INCREASED.' 
                    : 'Physical volume of final goods and services DECREASED.'}
                </div>
              </div>

              <div className="bg-[#1a1a1a] text-white p-5 border border-black">
                <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">Per-Capita Real GDP Growth</div>
                <div className={`text-3xl font-serif italic font-bold mt-1 ${approxPerCapitaRealGrowth >= 0 ? 'text-yellow-300' : 'text-red-400'}`}>
                  {approxPerCapitaRealGrowth > 0 ? `+${approxPerCapitaRealGrowth}` : approxPerCapitaRealGrowth}%
                </div>
                <div className="text-xs text-neutral-300 mt-1 font-mono">
                  %Δ Per-Capita Real ≈ %Δ Real ({approxRealGdpGrowth}%) - %Δ Pop ({populationGrowth}%)
                </div>
                <div className="mt-3 text-xs text-neutral-200 border-t border-neutral-700 pt-2">
                  {approxPerCapitaRealGrowth > 0
                    ? 'Average material output per person IMPROVED.'
                    : 'Average material output per person DETERIORATED.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: GNI & NFIA FLOWCHART */}
      {labTab === 'gni' && (
        <div className="space-y-6">
          <div className="bg-white border-2 border-black p-6 shadow-sm">
            <div className="mb-4 border-b-2 border-black pb-3">
              <h3 className="text-xl font-serif italic font-bold text-[#1a1a1a]">
                Gross National Income (GNI) & Cross-Border Flow
              </h3>
              <p className="text-xs text-gray-500 font-mono mt-0.5">
                GNI = GDP + Factor Income from Abroad (FIA) - Factor Income Paid Abroad (FIPA).
              </p>
            </div>

            {/* Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#fdfdfb] p-4 border border-black">
                <label className="text-xs text-neutral-800 flex justify-between font-medium">
                  <span>Domestic GDP:</span>
                  <strong className="text-black font-mono font-bold">${baseGdp}B</strong>
                </label>
                <input
                  type="range"
                  min="1000"
                  max="5000"
                  step="50"
                  value={baseGdp}
                  onChange={(e) => setBaseGdp(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 cursor-pointer accent-black mt-2"
                />
              </div>

              <div className="bg-[#fdfdfb] p-4 border border-black">
                <label className="text-xs text-neutral-800 flex justify-between font-medium">
                  <span>FIA (Factor Income from Abroad):</span>
                  <strong className="text-black font-mono font-bold">+${fiaVal}B</strong>
                </label>
                <input
                  type="range"
                  min="0"
                  max="600"
                  step="10"
                  value={fiaVal}
                  onChange={(e) => setFiaVal(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 cursor-pointer accent-black mt-2"
                />
                <span className="text-[10px] text-gray-500 block mt-1">Earned by HK residents abroad</span>
              </div>

              <div className="bg-[#fdfdfb] p-4 border border-black">
                <label className="text-xs text-neutral-800 flex justify-between font-medium">
                  <span>FIPA (Factor Income Paid Abroad):</span>
                  <strong className="text-red-700 font-mono font-bold">-${fipaVal}B</strong>
                </label>
                <input
                  type="range"
                  min="0"
                  max="600"
                  step="10"
                  value={fipaVal}
                  onChange={(e) => setFipaVal(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 cursor-pointer accent-black mt-2"
                />
                <span className="text-[10px] text-gray-500 block mt-1">Earned by non-residents in HK</span>
              </div>
            </div>

            {/* Results Output */}
            <div className="bg-[#1a1a1a] text-white p-5 sm:p-6 border border-black">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-neutral-900 p-4 border border-neutral-700">
                  <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">Net Factor Income from Abroad (NFIA)</div>
                  <div className={`text-3xl font-serif italic font-bold mt-1 ${nfia >= 0 ? 'text-yellow-300' : 'text-red-400'}`}>
                    {nfia >= 0 ? `+$${nfia}` : `-$${Math.abs(nfia)}`} Billion
                  </div>
                  <div className="text-xs text-neutral-300 font-mono mt-1">
                    = FIA (+${fiaVal}B) - FIPA (-${fipaVal}B)
                  </div>
                </div>

                <div className="bg-neutral-900 p-4 border border-neutral-700">
                  <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">Gross National Income (GNI)</div>
                  <div className="text-3xl font-serif italic font-bold text-yellow-400 mt-1">${calculatedGni} Billion</div>
                  <div className="text-xs text-neutral-300 mt-1 font-mono">
                    = GDP (${baseGdp}B) + NFIA ({nfia >= 0 ? `+${nfia}` : nfia}B)
                  </div>
                  <div className="mt-2 text-xs font-semibold text-yellow-200">
                    {calculatedGni > baseGdp ? 'GNI > GDP (HK residents earned more abroad)' : calculatedGni < baseGdp ? 'GNI < GDP (Non-residents took more factor earnings out)' : 'GNI = GDP (NFIA is Zero)'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

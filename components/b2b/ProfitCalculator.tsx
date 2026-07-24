"use client";

import React, { useState, useEffect } from "react";
import { Calculator, DollarSign, TrendingUp, Package } from "lucide-react";

export default function ProfitCalculator() {
  const [quantity, setQuantity] = useState<number>(100);
  const [retailPrice, setRetailPrice] = useState<number>(65);
  const [shippingCost, setShippingCost] = useState<number>(50);

  const [wholesalePrice, setWholesalePrice] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [grossRevenue, setGrossRevenue] = useState<number>(0);
  const [grossProfit, setGrossProfit] = useState<number>(0);
  const [marginPercent, setMarginPercent] = useState<number>(0);

  // Calculate pricing based on tiers
  useEffect(() => {
    let pricePerUnit = 25; // default base
    if (quantity >= 500) pricePerUnit = 12;
    else if (quantity >= 250) pricePerUnit = 14;
    else if (quantity >= 100) pricePerUnit = 16;
    else if (quantity >= 50) pricePerUnit = 18;
    else if (quantity >= 20) pricePerUnit = 20;

    // eslint-disable-next-line
    setWholesalePrice(pricePerUnit);

    const cost = (pricePerUnit * quantity) + shippingCost;
    const revenue = retailPrice * quantity;
    const profit = revenue - cost;
    const margin = revenue > 0 ? (profit / revenue) * 100 : 0;

    setTotalCost(cost);
    setGrossRevenue(revenue);
    setGrossProfit(profit);
    setMarginPercent(margin);
  }, [quantity, retailPrice, shippingCost]);

  return (
    <section className="w-full bg-white py-24 text-black border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 flex justify-center items-center gap-4">
            <Calculator className="w-10 h-10 text-emerald-500" />
            Profit Margin Calculator
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            Calculate your exact wholesale ROI. As you increase order volume, your unit cost drops automatically, improving your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold mb-8">Order Variables</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Order Quantity (Units)</label>
                <div className="relative">
                  <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="number" 
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-black font-black text-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors outline-none"
                  />
                </div>
                <p className="text-emerald-600 text-sm mt-2 font-bold flex items-center gap-1">
                  Current Tier: ${wholesalePrice.toFixed(2)} / unit
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Target Retail Price (Per Unit)</label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="number" 
                    value={retailPrice}
                    onChange={(e) => setRetailPrice(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-black font-black text-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Estimated Shipping Cost (Total)</label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="number" 
                    value={shippingCost}
                    onChange={(e) => setShippingCost(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-black font-black text-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Outputs */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col justify-center shadow-sm">
              <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">Total Wholesale Cost</p>
              <p className="text-4xl font-black text-black">${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              <p className="text-gray-400 text-sm mt-2 font-medium">Includes ${shippingCost} shipping</p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col justify-center shadow-sm">
              <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">Projected Gross Revenue</p>
              <p className="text-4xl font-black text-black">${grossRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              <p className="text-gray-400 text-sm mt-2 font-medium">If sold out at ${retailPrice}/ea</p>
            </div>

            <div className="md:col-span-2 bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 border border-emerald-100 relative overflow-hidden shadow-sm">
              <TrendingUp className="absolute -right-8 -bottom-8 w-64 h-64 text-emerald-500/5" />
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <div>
                  <p className="text-emerald-700 text-sm font-black uppercase tracking-wider mb-2">Estimated Gross Profit</p>
                  <p className="text-6xl font-black text-emerald-600">
                    ${grossProfit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-emerald-700 text-sm font-black uppercase tracking-wider mb-2">Profit Margin</p>
                  <div className={`inline-block px-4 py-2 rounded-lg font-black text-3xl shadow-sm ${marginPercent >= 50 ? 'bg-emerald-500 text-white' : marginPercent > 0 ? 'bg-yellow-400 text-white' : 'bg-red-500 text-white'}`}>
                    {marginPercent.toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

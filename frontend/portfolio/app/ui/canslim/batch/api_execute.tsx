"use client";

import { useState } from 'react';
import { useActionState } from 'react';

export function ApiExecute() {
  const countryDict = {
    ja: 'Japan',
    usa: 'USA',
  };

  const batchTypeDict = {
    symbol: 'Symbol',
    finance: 'Finance',
    stock: 'Stock',
  };

  const [country, setCountry] = useState('ja');
  const [number, setProcessNum] = useState(1);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleProcessNumChange = (e) => {
    setProcessNum(Number(e.target.value));
  };

  return (
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-lg font-semibold p-4">バッチ実行</h2>

        <form action="/api/submit" method="POST" className="mt-4 space-y-4">
          {/* Country Select */}
          <div className="flex justify-between items-center">
            <label htmlFor="country" className="font-medium pl-10">
              Country
            </label>
            <select
              id="country"
              name="country"
              value={country}
              onChange={handleCountryChange}
              className="w-full max-w-sm border border-gray-300 rounded-lg p-1 text-center text-gray-700"
            >
              <option value="ja">Japan (ja)</option>
              <option value="usa">USA (usa)</option>
            </select>
          </div>

          {/* Number Input */}
          <div className="flex justify-between items-center">
            <label htmlFor="processNum" className="font-medium pl-10">
              Number
            </label>
            <input
              type="number"
              id="processNum"
              name="processNum"
            //   value={processNum}
              onChange={handleProcessNumChange}
              className="w-full max-w-sm border border-gray-300 rounded-lg p-1 text-center text-gray-700"
            />
          </div>

          {/* Execute Button */}
          <div className="flex justify-end mt-6 p-6">
            <button type="submit" className="py-2 px-6 text-white bg-gray-900 rounded-md hover:bg-black">
              Execute
            </button>
          </div>
        </form>
      </div>
  );
}

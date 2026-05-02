'use client'

import { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface CoinMeta {
  id: string
  symbol: string
  color: string
}

interface ChartPoint {
  date: number
  [symbol: string]: number
}

interface ApiResponse {
  coins: CoinMeta[]
  chartData: ChartPoint[]
  error?: string
}

function formatBillions(value: number) {
  return `$${(value / 1e9).toFixed(0)}B`
}

function formatDate(timestamp: number) {
  return new Date(timestamp).toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
}

export default function MarketCapChart() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/market-cap')
      .then((r) => r.json())
      .then((json: ApiResponse) => {
        if (json.error) setError(json.error)
        else setData(json)
      })
      .catch((e) => setError(e.message))
  }, [])

  if (error) {
    return (
      <div className="flex items-center justify-center h-[300px] text-[12px] text-red-400">
        데이터를 불러오지 못했습니다: {error}
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex flex-col gap-2 p-4 h-[300px] animate-pulse">
        <div className="h-4 bg-gray-100 rounded w-1/3" />
        <div className="flex-1 bg-gray-100 rounded" />
        <div className="h-3 bg-gray-100 rounded w-full" />
      </div>
    )
  }

  // Sample every 7th point to reduce render load (~52 points / year)
  const sampled = data.chartData.filter((_, i) => i % 7 === 0)

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={sampled} margin={{ top: 8, right: 16, left: 8, bottom: 4 }}>
        <XAxis
          dataKey="date"
          tickFormatter={formatDate}
          tick={{ fontSize: 11 }}
          tickLine={false}
          axisLine={false}
          interval="preserveStartEnd"
        />
        <YAxis
          tickFormatter={formatBillions}
          tick={{ fontSize: 11 }}
          tickLine={false}
          axisLine={false}
          width={52}
        />
        <Tooltip
          formatter={(value: unknown) =>
            typeof value === 'number' ? formatBillions(value) : String(value)
          }
          labelFormatter={(label: unknown) =>
            new Date(Number(label)).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })
          }
          contentStyle={{ fontSize: 11 }}
        />
        <Legend wrapperStyle={{ fontSize: 11 }} />
        {data.coins.map((coin) => (
          <Line
            key={coin.symbol}
            type="monotone"
            dataKey={coin.symbol}
            stroke={coin.color}
            strokeWidth={1.5}
            dot={false}
            connectNulls
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}

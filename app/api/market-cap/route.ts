import { NextResponse } from 'next/server'

const COINS = [
  { id: 'tether', symbol: 'USDT', color: '#26A17B' },
  { id: 'usd-coin', symbol: 'USDC', color: '#2775CA' },
  { id: 'dai', symbol: 'DAI', color: '#F5AC37' },
  { id: 'binance-usd', symbol: 'BUSD', color: '#F0B90B' },
  { id: 'frax', symbol: 'FRAX', color: '#000000' },
  { id: 'true-usd', symbol: 'TUSD', color: '#002868' },
]

export async function GET() {
  try {
    const results = await Promise.all(
      COINS.map(async (coin) => {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=365`,
          { next: { revalidate: 3600 } }
        )
        if (!res.ok) throw new Error(`Failed to fetch ${coin.id}: ${res.status}`)
        const data = await res.json()
        return {
          ...coin,
          data: (data.market_caps as [number, number][]).map(([timestamp, cap]) => ({
            date: timestamp,
            value: cap,
          })),
        }
      })
    )

    // Merge into array of { date, USDT, USDC, ... } keyed by date string
    const dateMap = new Map<string, Record<string, number>>()
    for (const coin of results) {
      for (const point of coin.data) {
        const key = new Date(point.date).toISOString().slice(0, 10)
        if (!dateMap.has(key)) dateMap.set(key, { date: point.date })
        dateMap.get(key)![coin.symbol] = point.value
      }
    }

    const chartData = Array.from(dateMap.values()).sort((a, b) => a.date - b.date)

    return NextResponse.json({ coins: COINS, chartData })
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

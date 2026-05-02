import { NextResponse } from 'next/server'

export const revalidate = 3600

const COINS = [
  { id: 'tether', symbol: 'USDT', color: '#26A17B' },
  { id: 'usd-coin', symbol: 'USDC', color: '#2775CA' },
  { id: 'ripple-usd', symbol: 'RLUSD', color: '#346AA9' },
]

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function GET() {
  const results: (typeof COINS[number] & { data: { date: number; value: number }[] })[] = []

  for (let i = 0; i < COINS.length; i++) {
    const coin = COINS[i]
    if (i > 0) await delay(1500)

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=365`,
        { next: { revalidate: 3600 } }
      )
      if (!res.ok) {
        console.warn(`Skipping ${coin.id}: HTTP ${res.status}`)
        continue
      }
      const data = await res.json()
      results.push({
        ...coin,
        data: (data.market_caps as [number, number][]).map(([timestamp, cap]) => ({
          date: timestamp,
          value: cap,
        })),
      })
    } catch (err) {
      console.warn(`Skipping ${coin.id}:`, err)
    }
  }

  const dateMap = new Map<string, Record<string, number>>()
  for (const coin of results) {
    for (const point of coin.data) {
      const key = new Date(point.date).toISOString().slice(0, 10)
      if (!dateMap.has(key)) dateMap.set(key, { date: point.date })
      dateMap.get(key)![coin.symbol] = point.value
    }
  }

  const chartData = Array.from(dateMap.values()).sort((a, b) => a.date - b.date)
  const coins = COINS.filter((c) => results.some((r) => r.symbol === c.symbol))

  return NextResponse.json({ coins, chartData })
}

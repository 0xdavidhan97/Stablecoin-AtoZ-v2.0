import Sidebar from '@/components/Sidebar'
import ChartCard from '@/components/ChartCard'

const charts = [
  'Stablecoin Market Cap',
  'Stablecoin On-chain Volume',
  'Monthly Active Addresses',
  'Total Unique Holders',
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-[71px]">
      <Sidebar />

      <main className="xl:ml-[240px] bg-white min-h-[calc(100vh-71px)]">
        <div className="px-5 py-6">
          {/* Intro Banner */}
          <div className="bg-[#FAFAFA] rounded-[6px]" style={{ padding: '20px 24px' }}>
            <h2 className="text-[13px] font-medium text-[#5F5F5F] tracking-[0.1em]">
              Stablecoin A to Z란?
            </h2>
            <p className="mt-2 text-[12px] text-[#5F5F5F] leading-relaxed">
              스테이블코인과 블록체인에 관심이 많은 쟁쟁이가 만든 스테이블코인 온체인 데이터 대시보드입니다.
            </p>
            <p className="mt-0.5 text-[12px] text-[#5F5F5F]">
              스테이블코인 핵심 지표를 실시간으로 추적합니다.
            </p>
          </div>

          {/* Chart Grid */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {charts.map((title) => (
              <ChartCard key={title} title={title} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

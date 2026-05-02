import Sidebar from '@/components/Sidebar'
import TopBanner from '@/components/TopBanner'

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-[71px]">
      <Sidebar />
      <main className="xl:ml-[240px] bg-white min-h-[calc(100vh-71px)] relative">
        <TopBanner />

        {/* Group 22 */}
        <div className="absolute top-[108px] left-[33px] w-[548px] h-[374px] bg-white border border-[#F2F2F2] rounded-[5px] relative">
          <p className="absolute top-[12px] left-[17px] w-[163px] h-[18px] text-[15px] font-medium leading-[18px] text-black">
            Stablecoin Market Cap
          </p>
          <div className="absolute top-[42px] left-0 w-full h-0 border-t border-[#F2F2F2]" />
        </div>
      </main>
    </div>
  )
}

import Sidebar from '@/components/Sidebar'
import TopBanner from '@/components/TopBanner'

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-[71px]">
      <Sidebar />
      <main className="xl:ml-[240px] bg-white min-h-[calc(100vh-71px)]">
        <TopBanner />
      </main>
    </div>
  )
}

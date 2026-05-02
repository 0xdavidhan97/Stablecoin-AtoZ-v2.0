import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-[71px]">
      <Sidebar />
      <main className="xl:ml-[240px] bg-white min-h-[calc(100vh-71px)] relative">
        <div className="absolute top-[7px] left-[248px] w-[1185px] h-[88px] bg-[#FAFAFA] rounded-[5px]" />
      </main>
    </div>
  )
}

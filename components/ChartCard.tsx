interface ChartCardProps {
  title: string
}

export default function ChartCard({ title }: ChartCardProps) {
  return (
    <div className="border-2 border-[#C8C8C8] rounded-[10px] p-6 min-h-[320px] flex flex-col">
      <h3 className="text-[24px] md:text-[30px] font-medium text-black">{title}</h3>
      <div className="flex-1 flex items-center justify-center mt-4">
        <p className="text-gray-400 text-sm">Chart coming soon</p>
      </div>
    </div>
  )
}

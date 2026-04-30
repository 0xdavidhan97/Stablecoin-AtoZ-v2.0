interface ChartCardProps {
  title: string
}

export default function ChartCard({ title }: ChartCardProps) {
  return (
    <div className="border-2 border-[#C8C8C8] rounded-[6px] p-4 min-h-[320px] xl:h-full flex flex-col">
      <h3 className="text-[16px] font-medium text-black">{title}</h3>
      <div className="flex-1 flex items-center justify-center mt-3">
        <p className="text-gray-400 text-[11px]">Chart coming soon</p>
      </div>
    </div>
  )
}

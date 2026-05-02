import Image from 'next/image'
import { Konkhmer_Sleokchher } from 'next/font/google'

const konkhmer = Konkhmer_Sleokchher({ subsets: ['latin'], weight: '400' })

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[71px] bg-white border-b-[1.5px] border-[#F2F2F2] z-50">
      <div className="relative w-full h-full">
        {/* 로고 이미지 */}
        <div className="absolute top-[20px] left-[19px] w-[29px] h-[29px]">
          <Image
            src="/stable_logo1.png"
            alt="Stablecoin A to Z"
            width={29}
            height={29}
          />
        </div>

        {/* 타이틀 텍스트 */}
        <p
          className={`absolute top-[20px] left-[57px] text-[20px] text-black leading-none ${konkhmer.className}`}
        >
          Stablecoin A to Z
        </p>
      </div>
    </header>
  )
}

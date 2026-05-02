import Image from 'next/image'
import { Konkhmer_Sleokchher } from 'next/font/google'

const konkhmer = Konkhmer_Sleokchher({ subsets: ['latin'], weight: '400' })

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[71px] bg-white border-b-[1.5px] border-[#F2F2F2] z-50">
      <div className="relative h-full">
        <Image
          src="/stable_logo1.png"
          alt="Stablecoin A to Z"
          width={29}
          height={29}
          className="absolute top-[20px] left-[19px]"
        />
        <p
          className={`absolute top-[18px] left-[57px] text-[20px] text-black leading-none ${konkhmer.className}`}
        >
          Stablecoin A to Z
        </p>
      </div>
    </header>
  )
}

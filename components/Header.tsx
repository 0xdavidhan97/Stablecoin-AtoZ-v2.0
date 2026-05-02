import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[71px] bg-white border-b-[1.5px] border-[#F2F2F2] z-50">
      <div className="relative w-full h-full">
        {/* 로고 이미지 */}
        <div className="absolute top-[20px] left-[19px] w-[29px] h-[29px]">
          <Image
            src="/stable_logo1.png"
            alt="Stablecoin A to Z logo"
            width={29}
            height={29}
          />
        </div>

        {/* 타이틀 이미지 */}
        <div className="absolute top-[20px] left-[57px]">
          <Image
            src="/Stablecoin_A_to_Z.png"
            alt="Stablecoin A to Z"
            width={165}
            height={16}
            className="object-contain"
          />
        </div>
      </div>
    </header>
  )
}

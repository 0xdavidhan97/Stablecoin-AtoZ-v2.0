'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile hamburger — sits in header area */}
      <button
        className="xl:hidden fixed top-[22px] right-4 z-[60] flex flex-col gap-[4px] p-1.5 bg-white rounded shadow-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-4 h-px bg-black transition-transform duration-200 ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
        <span className={`block w-4 h-px bg-black transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-4 h-px bg-black transition-transform duration-200 ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
      </button>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={[
          'fixed left-0 top-[71px] w-[240px] h-[calc(100vh-71px)] box-border',
          'bg-[#FAFAFA] border-r-[1.5px] border-[#F2F2F2] overflow-hidden z-40',
          'transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0',
        ].join(' ')}
      >
        {/* About Me */}
        <p className="absolute top-[98px] left-[35px] text-[15px] font-medium text-black">
          About Me
        </p>

        {/* Profile image */}
        <div className="absolute top-[127px] left-[34px] w-[171px] h-[195px] rounded-[10px] overflow-hidden">
          <Image src="/profile2.png" alt="프로필" fill className="object-cover" />
        </div>

        {/* Line 6 */}
        <div className="absolute top-[341px] left-0 right-0 h-0 border-t-[1.5px] border-[#F2F2F2]" />

        {/* Interests */}
        <p className="absolute top-[352px] left-[13px] text-[12px] font-medium text-[#242424]">
          Interests
        </p>

        {/* Tags */}
        <p className="absolute top-[378px] left-[26px] right-[16px] text-[12px] text-[#575757] leading-relaxed">
          #Blockchain #Stablecoin #RWA #x402 #Claude_Code
        </p>

        {/* Line 7 */}
        <div className="absolute top-[435px] left-0 right-0 h-0 border-t-[1.5px] border-[#F2F2F2]" />

        {/* Data Sources */}
        <p className="absolute top-[446px] left-[13px] text-[12px] font-medium text-[#242424]">
          Data Sources
        </p>

        {/* Line 8 */}
        <div className="absolute top-[553px] left-0 right-0 h-0 border-t-[1.5px] border-[#F2F2F2]" />

        {/* How I Built */}
        <p className="absolute top-[564px] left-[13px] text-[12px] font-medium text-[#242424]">
          How I Built
        </p>

        {/* Designed in — text */}
        <span className="absolute top-[594px] left-[40px] text-[12px] text-[#575757]">
          🎨 Designed in
        </span>

        {/* Figma logo */}
        <div className="absolute top-[587px] left-[128px]">
          <Image
            src="/figma_logo3.png"
            alt="Figma"
            width={61.88}
            height={30.94}
            className="object-contain"
          />
        </div>

        {/* Built with — text */}
        <span className="absolute top-[624px] left-[41px] text-[12px] text-[#575757]">
          ⚡ Built with
        </span>

        {/* Claude icon */}
        <div className="absolute top-[627px] left-[131px]">
          <Image
            src="/claude_logo3.png"
            alt="Claude Code"
            width={15.85}
            height={15.85}
            className="object-contain"
          />
        </div>

        {/* Claude Code text */}
        <span className="absolute top-[623px] left-[151px] text-[12px] text-[#575757]">
          Claude Code
        </span>

        {/* Line 9 */}
        <div className="absolute top-[659px] left-0 right-0 h-0 border-t-[1.5px] border-[#F2F2F2]" />

        {/* Seoul */}
        <p className="absolute top-[738px] left-[19px] text-[13px] text-black">
          📍 Seoul, Republic of Korea
        </p>

        {/* GitHub logo — fixed at sidebar bottom */}
        <div className="absolute bottom-6 left-[33px]">
          <Image
            src="/github_logo2.png"
            alt="GitHub"
            width={174.1}
            height={39.14}
            className="object-contain"
          />
        </div>
      </aside>
    </>
  )
}

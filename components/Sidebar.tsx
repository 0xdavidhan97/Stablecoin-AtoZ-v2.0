'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="xl:hidden fixed top-3 left-3 z-50 flex flex-col gap-[4px] p-1.5 bg-white rounded shadow-md"
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
          'fixed left-0 top-0 w-[240px] h-screen bg-[#FAFAFA] border-r-[1.5px] border-[#F2F2F2] overflow-hidden z-40',
          'transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0',
        ].join(' ')}
      >
        {/* About Me */}
        <p className="absolute top-[26px] left-[25px] text-[20px] font-medium text-black">
          About Me
        </p>

        {/* Profile image */}
        <div className="absolute top-[66px] left-[25px] w-[190px] h-[217px] rounded-[10px] overflow-hidden">
          <Image
            src="/profile2.png"
            alt="프로필"
            fill
            className="object-cover"
          />
        </div>

        {/* Seoul */}
        <p className="absolute top-[299px] left-[25px] text-[13px] text-gray-700">
          📍 Seoul, Republic of Korea
        </p>

        {/* How I Built */}
        <p className="absolute top-[336px] left-0 right-0 text-center text-[12px] text-[#575757]">
          ── How I Built ──
        </p>

        {/* Designed in — text */}
        <span className="absolute top-[366px] left-[25px] text-[12px] text-[#575757]">🎨 Designed in</span>

        {/* Figma logo — left: 115px, top: 357px */}
        <Image
          src="/figma_logo2.png"
          alt="Figma"
          width={72.5}
          height={34.23}
          className="absolute top-[357px] left-[115px] object-contain"
        />

        {/* Built with — text */}
        <span className="absolute top-[405px] left-[25px] text-[12px] text-[#575757]">⚡ Built with</span>

        {/* Claude logo — left: 115px, top: 396px */}
        <Image
          src="/claude_logo2.png"
          alt="Claude Code"
          width={72.5}
          height={34.23}
          className="absolute top-[396px] left-[115px] object-contain"
        />

        {/* Data Sources */}
        <p className="absolute top-[478px] left-0 right-0 text-center text-[12px] text-[#575757]">
          ── Data Sources ──
        </p>

        {/* Interests */}
        <p className="absolute top-[590px] left-0 right-0 text-center text-[12px] text-[#575757]">
          ── Interests ──
        </p>

        {/* Tags */}
        <p className="absolute top-[624px] left-0 right-0 text-center text-[12px] text-[#575757] leading-relaxed">
          #Blockchain #Stablecoin #x402 #Claude_Code
        </p>

        {/* GitHub logo button — top: 830px, left: 33px */}
        <button
          className="absolute top-[830px] left-[33px] w-[174.1px] h-[39.14px] overflow-hidden hover:opacity-80 transition-opacity"
          aria-label="GitHub"
        >
          <Image
            src="/github_logo2.png"
            alt="GitHub"
            width={174.1}
            height={39.14}
            className="object-contain"
          />
        </button>
      </aside>
    </>
  )
}

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
        <p className="absolute top-[341px] left-0 right-0 text-center text-[12px] text-[#575757]">
          ── How I Built ──
        </p>

        {/* Designed in */}
        <div className="absolute top-[366px] left-[25px] flex items-center gap-2">
          <span className="text-[12px] text-[#575757]">🎨 Designed in</span>
          <Image
            src="/figma_logo.png"
            alt="Figma"
            width={44}
            height={22}
            className="object-contain"
          />
        </div>

        {/* Built with */}
        <div className="absolute top-[405px] left-[25px] flex items-center gap-2">
          <span className="text-[12px] text-[#575757]">⚡ Built with</span>
          <Image
            src="/claude_logo.png"
            alt="Claude Code"
            width={49}
            height={22}
            className="object-contain"
          />
        </div>

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

        {/* Bottom fixed area — height 91px */}
        <div className="absolute bottom-0 left-0 right-0 h-[91px] border-t border-[#F2F2F2]" />

        {/* GitHub logo button — top: 831px, left: 24px */}
        <button
          className="absolute top-[831px] left-[24px] w-[191px] h-[37px] overflow-hidden rounded-[10px] hover:opacity-80 transition-opacity"
          aria-label="GitHub"
        >
          <Image
            src="/github_logo2.png"
            alt="GitHub"
            width={191}
            height={37}
            className="object-contain"
          />
        </button>
      </aside>
    </>
  )
}

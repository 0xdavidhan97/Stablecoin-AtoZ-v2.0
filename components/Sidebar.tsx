'use client'

import { useState } from 'react'

const FigmaIcon = () => (
  <svg width="18" height="27" viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg" aria-label="Figma">
    <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
    <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z"/>
    <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z"/>
    <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
    <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
  </svg>
)

const ClaudeCodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Claude Code">
    <rect width="22" height="22" rx="5" fill="#CC785C"/>
    <path d="M5 15L8.5 7L12 15M6.5 12.5H10.5M14 7V15M14 7C14 7 17 7 17 10C17 13 14 13 14 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const copyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        className="xl:hidden fixed top-5 left-5 z-50 flex flex-col gap-[5px] p-2 bg-white rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${
            isOpen ? 'rotate-45 translate-y-[7px]' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-black transition-opacity duration-200 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${
            isOpen ? '-rotate-45 -translate-y-[7px]' : ''
          }`}
        />
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
          'fixed left-0 top-0 w-full sm:w-[428px] h-screen bg-[#FAFAFA] overflow-hidden flex flex-col z-40',
          'transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0',
        ].join(' ')}
      >
        <div className="px-[30px] pt-[65px] flex flex-col h-full">
          {/* Top info */}
          <div className="shrink-0">
            <h1 className="text-[35px] font-medium text-black leading-tight">쟁쟁이</h1>
            <p className="text-[25px] font-normal text-[#575757] mt-[11px] leading-tight">
              바이브코딩 하는 쟁쟁이
            </p>
            <div className="mt-[28px] w-full max-w-[368px] h-[420px] rounded-[20px] overflow-hidden bg-gradient-to-br from-[#e8e8e8] to-[#d0d0d0] flex items-center justify-center">
              <span className="text-gray-400 text-sm">Profile Image</span>
            </div>
            <p className="text-[22px] mt-[14px] text-gray-700">
              📍 Seoul, Republic of Korea
            </p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-3 mt-5 flex-1 min-h-0">
            {/* How I Built */}
            <div className="border-2 border-dashed border-[#C8C8C8] rounded-[10px] px-4 py-3">
              <p className="text-[22px] text-[#575757] mb-2">How I Built</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base text-[#575757]">🎨 Designed in</span>
                <FigmaIcon />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base text-[#575757]">⚡ Built with</span>
                <ClaudeCodeIcon />
                <span className="text-sm text-[#575757] font-medium">Claude Code</span>
              </div>
            </div>

            {/* Data Sources */}
            <div className="border-2 border-dashed border-[#C8C8C8] rounded-[10px] px-4 py-3">
              <p className="text-[22px] text-[#575757]">Data Sources</p>
            </div>

            {/* Interests */}
            <div className="border-2 border-dashed border-[#C8C8C8] rounded-[10px] px-4 py-3">
              <p className="text-[22px] text-[#575757] mb-1">Interests</p>
              <p className="text-[25px] text-[#575757] leading-snug">#Blockchain #Stablecoin</p>
              <p className="text-[25px] text-[#575757] leading-snug">#x402 #Claude_Code</p>
            </div>
          </div>

          {/* Copy Link */}
          <div className="py-6 shrink-0">
            <button
              onClick={copyLink}
              className="w-full bg-[#DCDCDC] rounded-[20px] py-3 text-base font-medium text-gray-700 hover:bg-[#c8c8c8] active:bg-[#b8b8b8] transition-colors cursor-pointer"
            >
              Copy Link
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

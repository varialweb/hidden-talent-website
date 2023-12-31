"use client"

import { useEffect, useState } from "react"

export default function BackToTop() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    setScrollY(window.scrollY)

    const button = document.querySelector('#top-button')

    document.addEventListener('scroll', event => {
      if (window.scrollY === 0) {
        button.style.display = 'static'
        button.style.boxShadow = "0 0 0 0 #0a0a0a33"
        return
      }

      if (Math.abs(window.scrollY - scrollY) > 1) {
        if (window.scrollY < scrollY) {
          button.style.display = 'block'
        } else {
          button.style.display = 'none'
        }

        if (window.scrollY === 0) {
          button.style.display = 'none'
        }
        
        setScrollY(window.scrollY)
      }
    }, { passive: true })
    
  }, [scrollY])
  return (
    <button
      id="top-button"
      onClick={() => {
        window.scrollTo(0, 0)
      }}
      className="fixed top-[120px] md:top-[160px] lg:top-[calc(100vh-58px)] right-4 lg:right-4 rounded-[8px] z-[999] p-2.5 border border-hidden-teal bg-white hidden"
    >
      <img src="/small-arrow-solid.svg" alt="back to top" width="24" className="rotate-90" />
    </button>
  )
}
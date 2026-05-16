"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "About Us", href: "#about" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-lg"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shraman_capital_logo_hd_2-MwqjKn04sZLTsrP7dGMolOp9AHpW87.svg"
              alt="Shraman Capital Logo"
              className="h-14 w-14 flex-shrink-0"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-serif font-bold text-primary leading-none block">SHRAMAN</span>
              <span className="text-xs tracking-[0.3em] font-serif font-bold text-primary">CAPITAL</span>
            </div>
          </Link>

          {/* Desktop Navigation — About + phone grouped right */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a href="tel:+918380997771" className="flex items-center gap-2 text-sm text-neutral-700 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              +91 8380997771
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://ekyc.motilaloswal.com/partner/mfd/?kzZWSRubKJveEvdPSlKyT2Wu8sMrWJCBeLW7vgOPP/MvViI3pMgXNVgrTzdoiAUz0Hk0yp8sa5qtINmHH36a2TJ1lvGloBNLz2pEeSB6hI5UtLpIrw9wmOe1LnfGFK7Cg99LyQzI7O4ec0qDMURDsQuhHxLP8jCer2X4I5P87es=" target="_blank" rel="noopener noreferrer">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-neutral-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-200 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-neutral-700 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-neutral-200">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="https://ekyc.motilaloswal.com/partner/mfd/?kzZWSRubKJveEvdPSlKyT2Wu8sMrWJCBeLW7vgOPP/MvViI3pMgXNVgrTzdoiAUz0Hk0yp8sa5qtINmHH36a2TJ1lvGloBNLz2pEeSB6hI5UtLpIrw9wmOe1LnfGFK7Cg99LyQzI7O4ec0qDMURDsQuhHxLP8jCer2X4I5P87es=" target="_blank" rel="noopener noreferrer">Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

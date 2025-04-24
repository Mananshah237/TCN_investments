"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface HeaderProps {
  onStartInvesting?: () => void
}

export default function Header({ onStartInvesting }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false)
    }

    // Get the target element
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      // Scroll to the element
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "What We Do", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent">
              TCN
            </span>
            <span className="text-lg font-medium bg-gradient-to-r from-sky-500 to-cobalt-500 bg-clip-text text-transparent">
              Investments
            </span>
          </Link>
        </motion.div>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className="text-sm font-medium text-navy-900 hover:text-sky-600 transition-colors relative group"
                onClick={(e) => handleAnchorClick(e, link.href)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-cobalt-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <Button
            className="bg-gradient-to-r from-navy-800 to-navy-700 hover:from-navy-700 hover:to-navy-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
            onClick={onStartInvesting}
          >
            Start Investing
          </Button>
        </motion.div>

        <button className="md:hidden text-navy-900" onClick={() => setIsOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-white md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b">
                <Link href="/" className="flex items-center gap-2">
                  <span className="text-xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent">
                    TCN
                  </span>
                  <span className="text-lg font-medium bg-gradient-to-r from-sky-500 to-cobalt-500 bg-clip-text text-transparent">
                    Investments
                  </span>
                </Link>
                <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6 text-navy-900" />
                </button>
              </div>
              <div className="flex flex-col p-6 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-lg font-medium text-navy-900 hover:text-sky-600 transition-colors py-2 block"
                      onClick={(e) => handleAnchorClick(e, link.href)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Button
                    className="w-full bg-gradient-to-r from-navy-800 to-navy-700 hover:from-navy-700 hover:to-navy-600 text-white shadow-md hover:shadow-lg transition-all duration-300 mt-4"
                    onClick={() => {
                      setIsOpen(false)
                      if (onStartInvesting) onStartInvesting()
                    }}
                  >
                    Start Investing
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

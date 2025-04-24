import Link from "next/link"
import { Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-navy-900 to-navy-800 py-16 text-white">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">TCN</span>
              <span className="text-lg font-medium bg-gradient-to-r from-sky-400 to-cobalt-400 bg-clip-text text-transparent">
                Investments
              </span>
            </div>
            <p className="mt-4 text-sm text-white/70">
              TCN Investments is a premier real estate investment firm specializing in identifying, acquiring, and
              managing high-value properties across key growth markets.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#about" className="text-sm text-white/70 hover:text-sky-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-white/70 hover:text-sky-400 transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-sm text-white/70 hover:text-sky-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-sm text-white/70 hover:text-sky-400 transition-colors">
                  Investment Process
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-white/70 hover:text-sky-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-sky-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-sky-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-sky-400 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white/70 hover:text-sky-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-white/70 hover:text-sky-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white/70 hover:text-sky-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} TCN Investments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

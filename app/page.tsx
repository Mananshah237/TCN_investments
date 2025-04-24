"use client"

import { useState } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Services from "@/components/sections/Services"
import Portfolio from "@/components/sections/Portfolio"
import Advantage from "@/components/sections/Advantage"
import Process from "@/components/sections/Process"
import Contact from "@/components/sections/Contact"
import Calculator from "@/components/sections/Calculator"
import InvestmentModal from "@/components/modals/InvestmentModal"
import ConsultationModal from "@/components/modals/ConsultationModal"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const [investmentModalOpen, setInvestmentModalOpen] = useState(false)
  const [consultationModalOpen, setConsultationModalOpen] = useState(false)

  const openInvestmentModal = () => {
    setInvestmentModalOpen(true)
  }

  const openConsultationModal = () => {
    setConsultationModalOpen(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Hero onStartInvesting={openInvestmentModal} onBookConsultation={openConsultationModal} />
        <About />
        <Services />
        <Portfolio onInvest={openInvestmentModal} />
        <Calculator />
        <Advantage />
        <Process />
        <Contact />
      </main>
      <Footer />

      <InvestmentModal isOpen={investmentModalOpen} onClose={() => setInvestmentModalOpen(false)} />
      <ConsultationModal isOpen={consultationModalOpen} onClose={() => setConsultationModalOpen(false)} />
      <Toaster />
    </div>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from "lucide-react"

export default function Calculator() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [initialInvestment, setInitialInvestment] = useState<string>("50000")
  const [investmentType, setInvestmentType] = useState<string>("residential")
  const [investmentTerm, setInvestmentTerm] = useState<string>("5")
  const [calculatedReturn, setCalculatedReturn] = useState<number | null>(null)
  const [isCalculating, setIsCalculating] = useState<boolean>(false)

  const calculateReturn = () => {
    setIsCalculating(true)

    // Simulate calculation delay
    setTimeout(() => {
      const investment = Number.parseFloat(initialInvestment) || 0
      let rate = 0

      // Different rates based on property type
      switch (investmentType) {
        case "residential":
          rate = 0.12 // 12% annual return
          break
        case "commercial":
          rate = 0.15 // 15% annual return
          break
        case "mixed":
          rate = 0.14 // 14% annual return
          break
        case "reit":
          rate = 0.1 // 10% annual return
          break
        default:
          rate = 0.12
      }

      const years = Number.parseInt(investmentTerm) || 5

      // Compound interest formula: A = P(1 + r)^t
      const futureValue = investment * Math.pow(1 + rate, years)
      const profit = futureValue - investment

      setCalculatedReturn(profit)
      setIsCalculating(false)
    }, 1000)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-navy-50 to-white">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Investment Calculator</h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-sky-500 to-cobalt-500"></div>
          <p className="mt-4 text-lg text-slate-700">Estimate your potential returns with TCN Investments.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl rounded-lg border border-navy-100 bg-white p-8 shadow-xl"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="initial-investment" className="text-sm font-medium text-navy-900">
                Initial Investment
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <Input
                  id="initial-investment"
                  type="number"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(e.target.value)}
                  className="pl-7"
                  min="10000"
                />
              </div>
              <p className="text-xs text-slate-500">Minimum: $10,000</p>
            </div>

            <div className="space-y-2">
              <label htmlFor="investment-type" className="text-sm font-medium text-navy-900">
                Property Type
              </label>
              <Select value={investmentType} onValueChange={setInvestmentType}>
                <SelectTrigger id="investment-type">
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential (12% avg)</SelectItem>
                  <SelectItem value="commercial">Commercial (15% avg)</SelectItem>
                  <SelectItem value="mixed">Mixed-Use (14% avg)</SelectItem>
                  <SelectItem value="reit">REIT (10% avg)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="investment-term" className="text-sm font-medium text-navy-900">
                Investment Term (Years)
              </label>
              <Select value={investmentTerm} onValueChange={setInvestmentTerm}>
                <SelectTrigger id="investment-term">
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Year</SelectItem>
                  <SelectItem value="3">3 Years</SelectItem>
                  <SelectItem value="5">5 Years</SelectItem>
                  <SelectItem value="10">10 Years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button
                onClick={calculateReturn}
                className="w-full bg-gradient-to-r from-navy-800 to-navy-700 hover:from-navy-700 hover:to-navy-600 text-white"
                disabled={isCalculating}
              >
                {isCalculating ? "Calculating..." : "Calculate Return"}
              </Button>
            </div>
          </div>

          {calculatedReturn !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-8 rounded-lg bg-gradient-to-r from-sky-50 to-cobalt-50 p-6"
            >
              <h3 className="text-lg font-semibold text-navy-900">Estimated Return</h3>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Initial Investment</p>
                  <p className="text-lg font-medium text-navy-900">
                    ${Number.parseFloat(initialInvestment).toLocaleString()}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-sky-500" />
                <div>
                  <p className="text-sm text-slate-600">Potential Profit</p>
                  <p className="text-lg font-medium text-navy-900">
                    ${calculatedReturn.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-sky-500" />
                <div>
                  <p className="text-sm text-slate-600">Future Value</p>
                  <p className="text-lg font-medium text-navy-900">
                    $
                    {(Number.parseFloat(initialInvestment) + calculatedReturn).toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button className="bg-gradient-to-r from-sky-500 to-cobalt-500 hover:from-sky-600 hover:to-cobalt-600 text-white">
                  Start Investing Now
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

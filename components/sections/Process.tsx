"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      title: "Discovery",
      description:
        "We begin with a comprehensive consultation to understand your investment goals, risk tolerance, and timeline.",
      icon: "🔍",
    },
    {
      title: "Strategy",
      description:
        "Our team develops a tailored investment strategy aligned with your objectives and current market conditions.",
      icon: "📊",
    },
    {
      title: "Acquisition",
      description: "We identify and secure high-potential properties, handling all aspects of the acquisition process.",
      icon: "🏢",
    },
    {
      title: "Growth",
      description:
        "Through active management and strategic improvements, we maximize property value and investment returns.",
      icon: "📈",
    },
  ]

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-navy-50 to-white">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Investment Process</h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-sky-500 to-cobalt-500"></div>
          <p className="mt-4 text-lg text-slate-700">
            Our streamlined investment process ensures clarity and confidence at every step.
          </p>
        </motion.div>
        <div className="mt-16">
          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-sky-200 via-cobalt-200 to-sky-200 rounded-full"></div>
            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex items-center">
                    <div className="absolute left-1/2 -translate-x-1/2 transform">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cobalt-500 text-xl text-white shadow-lg">
                        {step.icon}
                      </div>
                    </div>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-16 text-right" : "pl-16 text-left"}`}>
                      {index % 2 === 0 ? (
                        <>
                          <h3 className="text-xl font-semibold text-navy-900">{step.title}</h3>
                          <p className="mt-2 text-slate-700">{step.description}</p>
                        </>
                      ) : (
                        <div className="h-12" />
                      )}
                    </div>
                    <div className={`w-1/2 ${index % 2 === 1 ? "pr-16 text-right" : "pl-16 text-left"}`}>
                      {index % 2 === 1 ? (
                        <>
                          <h3 className="text-xl font-semibold text-navy-900">{step.title}</h3>
                          <p className="mt-2 text-slate-700">{step.description}</p>
                        </>
                      ) : (
                        <div className="h-12" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Button className="bg-gradient-to-r from-navy-800 to-navy-700 hover:from-navy-700 hover:to-navy-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

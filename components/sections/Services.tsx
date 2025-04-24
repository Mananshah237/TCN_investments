"use client"

import { Building2, DollarSign, Users, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: "Acquisition",
      description:
        "Strategic identification and acquisition of undervalued properties with high growth potential in prime markets.",
      icon: Building2,
    },
    {
      title: "Asset Management",
      description:
        "Comprehensive property management to optimize performance, increase value, and maximize returns on investment.",
      icon: DollarSign,
    },
    {
      title: "Investor Relations",
      description:
        "Transparent communication and reporting, ensuring our investors are informed and confident in their investments.",
      icon: Users,
    },
    {
      title: "Strategy",
      description:
        "Data-driven investment strategies tailored to market conditions and investor goals for optimal long-term growth.",
      icon: Clock,
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-navy-50 to-white">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">What We Do</h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-sky-500 to-cobalt-500"></div>
          <p className="mt-4 text-lg text-slate-700">
            We provide comprehensive real estate investment services, from acquisition to management, ensuring optimal
            returns for our investors.
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-100 to-cobalt-100">
                    <service.icon className="h-6 w-6 text-cobalt-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900">{service.title}</h3>
                  <p className="mt-2 text-slate-700">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

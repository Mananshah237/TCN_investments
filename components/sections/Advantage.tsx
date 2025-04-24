"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Advantage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "$250M+", label: "Portfolio Size" },
    { value: "19.2%", label: "Average Annual Return" },
  ]

  return (
    <section className="py-24 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Advantage</h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-sky-500 to-cobalt-500"></div>
        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-cobalt-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="mt-2 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mx-auto mt-16 max-w-3xl rounded-lg bg-white/10 backdrop-blur-sm p-8 shadow-xl"
        >
          <div className="text-center">
            <p className="text-xl font-medium italic">
              "TCN Investments has consistently delivered exceptional returns on our investments. Their market insight
              and strategic approach to property acquisition have made them an invaluable partner in our portfolio
              growth."
            </p>
            <div className="mt-4">
              <p className="font-semibold">Jonathan Reynolds</p>
              <p className="text-sm text-white/70">CEO, Reynolds Capital</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

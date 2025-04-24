"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container" ref={ref}>
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] overflow-hidden rounded-lg md:h-full shadow-xl"
          >
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Milan Parekh, CEO of TCN Investments"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent"></div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">About TCN Investments</h2>
              <div className="mt-2 h-1 w-20 bg-gradient-to-r from-sky-500 to-cobalt-500"></div>
            </div>
            <p className="text-lg text-slate-700">
              TCN Investments is a premier real estate investment firm specializing in identifying, acquiring, and
              managing high-value properties across key growth markets. Founded on principles of integrity,
              transparency, and strategic growth, we've built a reputation for delivering consistent returns to our
              investors.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-navy-800">Leadership</h3>
              <p className="text-slate-700">
                Under the visionary leadership of Milan Parekh, TCN Investments has grown from a boutique firm to a
                respected name in real estate investment. With over 15 years of experience in property acquisition and
                asset management, Milan brings unparalleled expertise and market insight to every investment
                opportunity.
              </p>
            </div>
            <Link href="/about">
              <Button className="w-fit bg-gradient-to-r from-navy-800 to-navy-700 hover:from-navy-700 hover:to-navy-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
                Learn More About Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

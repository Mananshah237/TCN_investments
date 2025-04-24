"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import PropertyDetailModal from "@/components/modals/PropertyDetailModal"

interface PortfolioProps {
  onInvest: () => void
}

export default function Portfolio({ onInvest }: PortfolioProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProperty, setSelectedProperty] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      title: "Skyline Tower",
      location: "Chicago, IL",
      year: "2021",
      roi: "18.5%",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Skyline Tower is a premium commercial property in downtown Chicago featuring 32 floors of Class A office space with panoramic views of Lake Michigan.",
      size: "120,000 sq ft",
      type: "Commercial Office",
      status: "Fully Leased",
    },
    {
      title: "Riverside Complex",
      location: "Austin, TX",
      year: "2020",
      roi: "22.3%",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Riverside Complex is a mixed-use development in Austin's thriving tech corridor, featuring retail spaces, luxury apartments, and modern office suites.",
      size: "85,000 sq ft",
      type: "Mixed-Use",
      status: "95% Occupancy",
    },
    {
      title: "Metropolitan Heights",
      location: "Miami, FL",
      year: "2022",
      roi: "16.7%",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Metropolitan Heights is a luxury residential tower in Miami's Brickell district, offering premium amenities and stunning ocean views.",
      size: "75,000 sq ft",
      type: "Luxury Residential",
      status: "Fully Occupied",
    },
    {
      title: "Parkview Residences",
      location: "Denver, CO",
      year: "2019",
      roi: "21.2%",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Parkview Residences is a modern apartment complex adjacent to Denver's City Park, featuring sustainable design and premium amenities.",
      size: "65,000 sq ft",
      type: "Residential",
      status: "Fully Occupied",
    },
    {
      title: "Harbor Point",
      location: "Seattle, WA",
      year: "2021",
      roi: "19.8%",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Harbor Point is a waterfront commercial development in Seattle's bustling port district, with retail spaces and premium office suites.",
      size: "95,000 sq ft",
      type: "Commercial",
      status: "90% Leased",
    },
    {
      title: "Sunset Plaza",
      location: "Phoenix, AZ",
      year: "2020",
      roi: "17.5%",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Sunset Plaza is a retail and entertainment complex in Phoenix featuring premium shopping, dining, and entertainment venues.",
      size: "110,000 sq ft",
      type: "Retail",
      status: "Fully Leased",
    },
  ]

  const openPropertyDetails = (property: any) => {
    setSelectedProperty(property)
    setIsModalOpen(true)
  }

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Our Portfolio</h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-sky-500 to-cobalt-500"></div>
          <p className="mt-4 text-lg text-slate-700">
            Explore our diverse portfolio of high-performing properties across key growth markets.
          </p>
        </motion.div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg transition-all duration-500 hover:shadow-xl cursor-pointer"
              onClick={() => openPropertyDetails(project)}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-800/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex items-center text-white/80">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Clock className="mr-1 h-4 w-4" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                </div>
                <div className="mt-3 inline-block rounded-full bg-gradient-to-r from-sky-500 to-cobalt-500 px-3 py-1 text-sm font-medium text-white">
                  ROI: {project.roi}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button
            className="bg-gradient-to-r from-navy-800 to-navy-700 hover:from-navy-700 hover:to-navy-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
            onClick={onInvest}
          >
            Start Investing Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {selectedProperty && (
        <PropertyDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          property={selectedProperty}
          onInvest={onInvest}
        />
      )}
    </section>
  )
}

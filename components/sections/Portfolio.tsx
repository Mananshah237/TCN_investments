"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import PropertyDetailModal from "@/components/modals/PropertyDetailModal"

interface PortfolioProps {
  onInvest: () => void
}

export default function Portfolio({ onInvest }: PortfolioProps) {
  const router = useRouter()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProperty, setSelectedProperty] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      title: "Bradfield Creek Townhomes",
      location: "Garland, TX",
      year: "N/A",
      roi: "N/A",
      image: "/images/bradfield-creek.jpg",
      description:
        "Bradfield Creek Townhomes is a 26-unit, garden-style apartment community offering two and three-bedroom units with spacious living areas.",
      size: "N/A",
      type: "Multifamily",
      status: "Fully Leased",
      address: "832 Courtenay Pl, Garland, TX 75040",
      link: "https://mbpcapital.com/project/bradfield-creek-townhomes/",
    },
    {
      title: "Hampton Court Apartments",
      location: "Garland, TX",
      year: "N/A",
      roi: "N/A",
      image: "/images/hampton-court.jpg",
      description:
        "Hampton Court Apartments offers two-bedroom units with amenities like hardwood floors and on-site parking, nestled in a well-established neighborhood.",
      size: "N/A",
      type: "Multifamily",
      status: "Available Units",
      address: "707 W Buckingham Rd, Garland, TX 75040",
      link: "https://www.livehamptoncourtapts.com/",
    },
    {
      title: "35 Veranda Lane",
      location: "Colleyville, TX",
      year: "N/A",
      roi: "N/A",
      image: "/images/35-veranda-lane.jpg",
      description:
        "A 5,208 SF professional office space located in the heart of Colleyville, suitable for medical, med spa, salon suite, or private office use.",
      size: "5,208 sq ft",
      type: "Commercial Office",
      status: "For Lease",
      address: "35 Veranda Ln, Colleyville, TX 76034",
      link: "https://www.loopnet.com/Listing/35-Veranda-Ln-Colleyville-TX/23654985/",
    },
    {
      title: "Gardens on Walnut",
      location: "Garland, TX",
      year: "N/A",
      roi: "N/A",
      image: "/images/gardens-on-walnut.jpg",
      description:
        "Gardens on Walnut offers unique one and two-bedroom floorplans at an affordable price, featuring amenities like two pools and a dog park.",
      size: "N/A",
      type: "Multifamily",
      status: "Available Units",
      address: "4209 W Walnut St, Garland, TX 75042",
      link: "https://gardensonwalnut.com/",
    },
    {
      title: "Rock Island Apartments",
      location: "Irving, TX",
      year: "N/A",
      roi: "N/A",
      image: "/images/rock-island.jpg",
      description:
        "Rock Island Apartments is a community located in Dallas County, offering recently renovated units with all utilities included.",
      size: "N/A",
      type: "Multifamily",
      status: "Available Units",
      address: "2002 Rock Island Rd, Irving, TX 75060",
      link: "https://www.rockislandirving.com/",
    },
    {
      title: "Richland Court Apartments",
      location: "Richland Hills, TX",
      year: "N/A",
      roi: "N/A",
      image: "/images/richland-court.jpg",
      description:
        "Richland Court Apartments offers one and two-bedroom floor plans with features like wood vinyl flooring and fully equipped kitchens.",
      size: "N/A",
      type: "Multifamily",
      status: "Available Units",
      address: "6626 Reeves St, Richland Hills, TX 76118",
      link: "https://www.richlandcourtapts.com/",
    },
    {
      title: "The Park at Hibiscus",
      location: "Waxahachie, TX",
      year: "N/A",
      roi: "N/A",
      image: "/images/park-at-hibiscus.jpg",
      description:
        "The Park at Hibiscus offers spacious two and three-bedroom duplex-style apartment homes with upgraded amenities to ensure comfort.",
      size: "N/A",
      type: "Multifamily",
      status: "Available Units",
      address: "819 Hibiscus Trail, Waxahachie, TX 75165",
      link: "https://www.theparkathibiscus.com/",
    },
    {
      title: "4841 Monroe Court",
      location: "Midlothian, TX",
      year: "N/A",
      roi: "N/A",
      image: "/images/4841-monroe-court.jpg",
      description:
        "A 2,429 sq ft single-family home with 3 bedrooms and 2.5 bathrooms, located in the Crystal Forest Estates subdivision.",
      size: "2,429 sq ft",
      type: "Single-Family Home",
      status: "Not for Sale",
      address: "4841 Monroe Ct, Midlothian, TX 76065",
      link: "https://www.redfin.com/TX/Midlothian/4841-Monroe-Ct-76065/home/33545782",
    },
    {
      title: "3311 Swan Lake Drive",
      location: "Midlothian, TX",
      year: "N/A",
      roi: "N/A",
      image: "/images/3311-swan-lake.jpg",
      description:
        "A 3,435 sq ft single-family home located on a 1.1-acre lot in the Shiloh Forest subdivision.",
      size: "3,435 sq ft",
      type: "Single-Family Home",
      status: "Not for Sale",
      address: "3311 Swan Lake Dr, Midlothian, TX 76065",
      link: "https://www.redfin.com/TX/Midlothian/3311-Swan-Lake-Dr-76065/home/33558458",
    },
    {
      title: "3510 Judy Court",
      location: "Midlothian, TX",
      year: "N/A",
      roi: "N/A",
      image: "/images/3510-judy-court.jpg",
      description:
        "A 3,435 sq ft single-family home on a 1.85-acre lot, located in the Shiloh Forest subdivision.",
      size: "3,435 sq ft",
      type: "Single-Family Home",
      status: "Not for Sale",
      address: "3510 Judy Ct, Midlothian, TX 76065",
      link: "https://www.redfin.com/TX/Midlothian/3510-Judy-Ct-76065/home/33559522",
    },
    {
      title: "806 Belclaire Circle",
      location: "Cedar Hill, TX",
      year: "N/A",
      roi: "N/A",
      image: "/images/806-belclaire.jpg",
      
    },
    {
        title: "929 Belclaire Circle",
        location: "Cedar Hill, TX",
        year: "N/A",
        roi: "N/A",
        image: "/images/929-belclaire.jpg",
        description:
          "A beautiful single-family home located in a quiet Cedar Hill neighborhood, offering space, privacy, and potential investment value.",
        size: "N/A",
        type: "Single-Family Home",
        status: "Not for Sale",
        address: "929 Belclaire Cir, Cedar Hill, TX 75104",
        link: "https://www.redfin.com/TX/Cedar-Hill/929-Belclaire-Cir-75104/home/33546174",
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

        {/* Only show the first 6 projects here */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project, index) => (
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
            onClick={() => router.push("/portfolio")}
          >
            View Full Collection
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

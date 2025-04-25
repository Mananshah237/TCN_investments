"use client"

import { properties } from "@/data/properties"
import Image from "next/image"
import { ExternalLink, MapPin, Home, Layers, DollarSign } from "lucide-react"

export default function FullPortfolioPage() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-navy-900 mb-4 tracking-tight">Our Collection</h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mb-12" />
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A curated showcase of properties that reflect TCN's commitment to excellence, performance, and future-ready investment.
          </p>
        </div>

        <div className="mt-20 space-y-20">
          {properties.map((property) => (
            <div
              key={property.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-3xl p-10 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Block */}
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={700}
                  height={500}
                  className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Block */}
              <div className="flex flex-col justify-between">
                <div>
                  {/* Title & Status */}
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-navy-900">{property.title}</h2>
                    <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-green-600 text-white font-semibold shadow">
                      {property.status}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-slate-600 text-sm mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 mt-4 leading-relaxed">{property.description}</p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-slate-800 mt-6 font-medium">
                    <div>
                      <Home className="h-4 w-4 inline-block mr-1 text-blue-500" />
                      <strong>Type:</strong><br />{property.type}
                    </div>
                    <div>
                      <Layers className="h-4 w-4 inline-block mr-1 text-purple-500" />
                      <strong>Size:</strong><br />{property.size}
                    </div>
                    <div>
                      <DollarSign className="h-4 w-4 inline-block mr-1 text-emerald-500" />
                      <strong>ROI:</strong><br />{property.roi}
                    </div>
                    <div>
                      <strong>Year:</strong><br />{property.year}
                    </div>
                    {property.address && (
                      <div className="col-span-full">
                        <strong>Address:</strong><br />{property.address}
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Link */}
                {property.link && (
                  <a
                    href={property.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 transition-colors group"
                  >
                    View Full Listing
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

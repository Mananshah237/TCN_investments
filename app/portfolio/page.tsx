"use client"

import { properties } from "@/data/properties"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export default function FullPortfolioPage() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#f9fafb] to-[#eef2f6] min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-navy-900 mb-6">Our Collection</h1>
        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mb-12" />

        <div className="space-y-20">
          {properties.map((property) => (
            <div
              key={property.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={700}
                  height={500}
                  className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-navy-900">{property.title}</h2>
                  <p className="text-slate-600 mt-3">{property.description}</p>
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 text-sm text-slate-700">
                    <div><strong>Location:</strong><br />{property.location}</div>
                    <div><strong>Year:</strong><br />{property.year}</div>
                    <div><strong>ROI:</strong><br />{property.roi}</div>
                    <div><strong>Type:</strong><br />{property.type}</div>
                    <div><strong>Status:</strong><br />{property.status}</div>
                    <div><strong>Size:</strong><br />{property.size}</div>
                    {property.address && (
                      <div className="col-span-full"><strong>Address:</strong><br />{property.address}</div>
                    )}
                  </div>
                </div>

                {property.link && (
                  <a
                    href={property.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center text-blue-600 font-medium hover:underline"
                  >
                    View Listing <ExternalLink className="ml-2 h-4 w-4" />
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

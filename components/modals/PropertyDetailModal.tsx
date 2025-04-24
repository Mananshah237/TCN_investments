"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MapPin, Calendar, DollarSign, Home, BarChart3, ArrowRight } from "lucide-react"

interface PropertyDetailModalProps {
  isOpen: boolean
  onClose: () => void
  property: {
    title: string
    location: string
    year: string
    roi: string
    image: string
    description?: string
    size?: string
    type?: string
    status?: string
  }
  onInvest: () => void
}

export default function PropertyDetailModal({ isOpen, onClose, property, onInvest }: PropertyDetailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[650px] p-0 overflow-hidden">
        <div className="relative h-[250px] w-full">
          <Image
            src={property.image || "/placeholder.svg?height=400&width=600"}
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="inline-block rounded-full bg-gradient-to-r from-sky-500 to-cobalt-500 px-3 py-1 text-sm font-medium text-white">
              ROI: {property.roi}
            </span>
          </div>
        </div>

        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-navy-900">{property.title}</DialogTitle>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center text-slate-600">
                <MapPin className="mr-1 h-4 w-4" />
                <span className="text-sm">{property.location}</span>
              </div>
              <div className="flex items-center text-slate-600">
                <Calendar className="mr-1 h-4 w-4" />
                <span className="text-sm">Acquired: {property.year}</span>
              </div>
            </div>
          </DialogHeader>

          <div className="mt-6">
            <p className="text-slate-700">
              {property.description ||
                `${property.title} is a premium investment property located in the heart of ${property.location}. 
                This property has consistently delivered strong returns since its acquisition in ${property.year}, 
                with a current ROI of ${property.roi}.`}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100">
                  <Home className="h-5 w-5 text-sky-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-slate-500">Property Type</p>
                  <p className="font-medium text-navy-900">{property.type || "Commercial"}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100">
                  <DollarSign className="h-5 w-5 text-sky-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-slate-500">Status</p>
                  <p className="font-medium text-navy-900">{property.status || "Fully Funded"}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100">
                  <BarChart3 className="h-5 w-5 text-sky-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-slate-500">Performance</p>
                  <p className="font-medium text-navy-900">{property.roi} Annual Return</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100">
                  <MapPin className="h-5 w-5 text-sky-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-slate-500">Size</p>
                  <p className="font-medium text-navy-900">{property.size || "25,000 sq ft"}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end space-x-3">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button
                className="bg-gradient-to-r from-sky-500 to-cobalt-500 hover:from-sky-600 hover:to-cobalt-600 text-white"
                onClick={() => {
                  onClose()
                  onInvest()
                }}
              >
                Invest in Similar Properties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

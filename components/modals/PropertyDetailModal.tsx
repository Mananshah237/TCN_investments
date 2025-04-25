"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface PropertyDetailModalProps {
  isOpen: boolean
  onClose: () => void
  property: {
    title: string
    location: string
    year: string
    roi: string
    image: string
    description: string
    size: string
    type: string
    status: string
    address?: string
    link?: string
  }
  onInvest: () => void
}

export default function PropertyDetailModal({
  isOpen,
  onClose,
  property,
  onInvest,
}: PropertyDetailModalProps) {
  if (!property) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{property.title}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src={property.image || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-3 text-sm text-slate-800">
            <p>{property.description}</p>
            <p><strong>Location:</strong> {property.location}</p>
            {property.address && <p><strong>Address:</strong> {property.address}</p>}
            <p><strong>Type:</strong> {property.type}</p>
            <p><strong>Status:</strong> {property.status}</p>
            <p><strong>Size:</strong> {property.size}</p>
            <p><strong>Year:</strong> {property.year}</p>
            <p><strong>ROI:</strong> {property.roi}</p>
            {property.link && (
              <a
                href={property.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline"
              >
                View Property <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            )}
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button onClick={onInvest} className="bg-navy-700 text-white">
            Invest in This Property
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

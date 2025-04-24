"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { X } from "lucide-react"

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const { toast } = useToast()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!date || !time || !name || !email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Consultation Scheduled",
      description: `Your consultation is confirmed for ${date.toLocaleDateString()} at ${time}. We'll send a confirmation to ${email}.`,
    })

    setLoading(false)
    setDate(undefined)
    setTime("")
    setName("")
    setEmail("")
    setPhone("")
    onClose()
  }

  // Disable past dates
  const disabledDays = { before: new Date() }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px] max-h-[90vh] overflow-y-auto">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-navy-900">Book a Consultation</DialogTitle>
          <DialogDescription className="text-slate-600">
            Schedule a one-on-one consultation with our investment advisors.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-navy-900">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Smith" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-navy-900">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-navy-900">
              Phone Number
            </label>
            <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(123) 456-7890" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-navy-900">
              Select Date <span className="text-red-500">*</span>
            </label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={disabledDays}
              className="border rounded-md mx-auto"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="time" className="text-sm font-medium text-navy-900">
              Select Time <span className="text-red-500">*</span>
            </label>
            <Select value={time} onValueChange={setTime}>
              <SelectTrigger id="time">
                <SelectValue placeholder="Select a time slot" />
              </SelectTrigger>
              <SelectContent>
                {availableTimes.map((timeSlot) => (
                  <SelectItem key={timeSlot} value={timeSlot}>
                    {timeSlot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-sky-500 to-cobalt-500 hover:from-sky-600 hover:to-cobalt-600 text-white"
              disabled={loading}
            >
              {loading ? "Scheduling..." : "Book Consultation"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

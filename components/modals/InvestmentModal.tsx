"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

interface InvestmentModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function InvestmentModal({ isOpen, onClose }: InvestmentModalProps) {
  const { toast } = useToast()
  const [investmentType, setInvestmentType] = useState<string>("")
  const [amount, setAmount] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!investmentType || !amount) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Investment Request Submitted",
      description: `Your ${investmentType} investment request for $${amount} has been received. A TCN advisor will contact you shortly.`,
    })

    setLoading(false)
    setInvestmentType("")
    setAmount("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-navy-900">Start Investing</DialogTitle>
          <DialogDescription className="text-slate-600">
            Choose your investment type and amount to get started with TCN Investments.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <label htmlFor="investment-type" className="text-sm font-medium text-navy-900">
              Investment Type
            </label>
            <Select value={investmentType} onValueChange={setInvestmentType}>
              <SelectTrigger id="investment-type" className="w-full">
                <SelectValue placeholder="Select investment type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential Properties</SelectItem>
                <SelectItem value="commercial">Commercial Properties</SelectItem>
                <SelectItem value="mixed">Mixed-Use Development</SelectItem>
                <SelectItem value="reit">Real Estate Investment Trust</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="amount" className="text-sm font-medium text-navy-900">
              Investment Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <Input
                id="amount"
                type="number"
                placeholder="25,000"
                className="pl-7"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="10000"
              />
            </div>
            <p className="text-xs text-slate-500">Minimum investment: $10,000</p>
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
              {loading ? "Processing..." : "Submit Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

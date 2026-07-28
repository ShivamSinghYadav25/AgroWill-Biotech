'use client'

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const industryOptions = [
  'Pharmaceutical',
  'Nutraceutical',
  'Wellness Brand',
  'Ayurvedic Manufacturer',
  'Food Supplements',
  'Research Institution',
  'Distribution / Export',
  'Other',
]

const quantityOptions = ['Sample (under 1 kg)', '1 - 25 kg', '25 - 100 kg', '100 kg - 1 MT', '1 MT+']

const selectClasses =
  'h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-xs focus:border-ring focus:ring-2 focus:ring-ring/40 focus:outline-none'

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-cream p-10 text-center">
        <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
        <h2 className="font-heading text-xl font-bold text-primary">Thank you for your inquiry</h2>
        <p className="max-w-md leading-relaxed text-muted-foreground">
          Our team will review your requirement and respond with specifications, pricing and lead
          times shortly.
        </p>
        <Button
          variant="outline"
          className="border-primary/25 bg-background text-primary hover:bg-secondary"
          onClick={() => setSubmitted(false)}
        >
          Send another inquiry
        </Button>
      </div>
    )
  }

  return (
    <form
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <h2 className="font-heading text-xl font-bold tracking-tight text-primary">Send an inquiry</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Fill in the details below and our team will get back to you.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" name="fullName" required placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Company Name</Label>
          <Input id="company" name="company" placeholder="Company / brand" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@company.com" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="whatsapp">WhatsApp Number</Label>
          <Input id="whatsapp" name="whatsapp" type="tel" placeholder="+91 00000 00000" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="country">Country</Label>
          <Input id="country" name="country" required placeholder="Country" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="industry">Select Industry</Label>
          <select id="industry" name="industry" required defaultValue="" className={selectClasses}>
            <option value="" disabled>
              Choose your industry
            </option>
            {industryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="quantity">Estimated Quantity</Label>
          <select id="quantity" name="quantity" defaultValue="" className={selectClasses}>
            <option value="" disabled>
              Select quantity range
            </option>
            {quantityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="requirement">Your Requirement</Label>
          <Textarea
            id="requirement"
            name="requirement"
            rows={5}
            required
            placeholder="Product format, specifications, packaging and timeline"
          />
        </div>
      </div>

      <Button type="submit" className="mt-6 w-full bg-primary text-primary-foreground sm:w-auto">
        <Send className="size-4" />
        Send Inquiry
      </Button>
    </form>
  )
}

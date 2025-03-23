"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

const BillingPage = () => {
  const [isSaving, setIsSaving] = useState(false)

  const handleSaveSettings = () => {
    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
    }, 1500)
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Billing Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="plan">Current Plan</Label>
              <Input id="plan" value="Premium" className="col-span-2" disabled />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value="example@example.com" className="col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="notifications">Notifications</Label>
              <Checkbox id="notifications" defaultChecked className="col-span-2" />
            </div>
            <Button onClick={handleSaveSettings} disabled={isSaving}>
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default BillingPage


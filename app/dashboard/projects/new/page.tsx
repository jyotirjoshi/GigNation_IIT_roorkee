"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Plus, Trash, Shield } from "lucide-react"
import Link from "next/link"

export default function NewProjectPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [milestones, setMilestones] = useState([{ title: "", description: "", amount: "", dueDate: "" }])

  const addMilestone = () => {
    setMilestones([...milestones, { title: "", description: "", amount: "", dueDate: "" }])
  }

  const removeMilestone = (index: number) => {
    if (milestones.length > 1) {
      setMilestones(milestones.filter((_, i) => i !== index))
    }
  }

  const updateMilestone = (index: number, field: string, value: string) => {
    const updatedMilestones = [...milestones]
    updatedMilestones[index] = { ...updatedMilestones[index], [field]: value }
    setMilestones(updatedMilestones)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate project creation
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard/projects")
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/projects">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h2 className="text-3xl font-bold tracking-tight">Create New Project</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>Enter the basic information about your project</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Project Title</Label>
                <Input id="title" placeholder="E.g., Website Redesign, Mobile App Development" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="client">Client</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a client" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">+ Add New Client</SelectItem>
                    <SelectItem value="acme">Acme Inc.</SelectItem>
                    <SelectItem value="techstart">TechStart</SelectItem>
                    <SelectItem value="greenlife">GreenLife</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Project Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the project, its goals, and requirements"
                  rows={4}
                  required
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input id="dueDate" type="date" required />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Milestone-Based Payment</CardTitle>
              <CardDescription>
                Break down your project into milestones with specific deliverables and payments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="space-y-4">
                  {index > 0 && <Separator className="my-6" />}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Milestone {index + 1}</h3>
                    {milestones.length > 1 && (
                      <Button type="button" variant="ghost" size="icon" onClick={() => removeMilestone(index)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`milestone-${index}-title`}>Title</Label>
                    <Input
                      id={`milestone-${index}-title`}
                      placeholder="E.g., Wireframes & Mockups, Frontend Development"
                      value={milestone.title}
                      onChange={(e) => updateMilestone(index, "title", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`milestone-${index}-description`}>Description & Deliverables</Label>
                    <Textarea
                      id={`milestone-${index}-description`}
                      placeholder="Describe what will be delivered in this milestone"
                      rows={3}
                      value={milestone.description}
                      onChange={(e) => updateMilestone(index, "description", e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor={`milestone-${index}-amount`}>Amount</Label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                          $
                        </span>
                        <Input
                          id={`milestone-${index}-amount`}
                          placeholder="0.00"
                          className="pl-7"
                          value={milestone.amount}
                          onChange={(e) => updateMilestone(index, "amount", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`milestone-${index}-dueDate`}>Due Date</Label>
                      <Input
                        id={`milestone-${index}-dueDate`}
                        type="date"
                        value={milestone.dueDate}
                        onChange={(e) => updateMilestone(index, "dueDate", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}

              <Button type="button" variant="outline" className="w-full" onClick={addMilestone}>
                <Plus className="mr-2 h-4 w-4" />
                Add Another Milestone
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Security</CardTitle>
              <CardDescription>
                Funds will be securely held in escrow until each milestone is completed and approved
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md bg-muted p-4">
                <div className="flex items-start gap-4">
                  <Shield className="mt-0.5 h-5 w-5 text-primary" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Secure Milestone Payments</p>
                    <p className="text-sm text-muted-foreground">
                      When you create this project, the client will be required to fund the first milestone before work
                      begins. Funds will be held securely in escrow and released to you upon milestone completion and
                      client approval.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/dashboard/projects">Cancel</Link>
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Creating Project..." : "Create Project"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </div>
  )
}


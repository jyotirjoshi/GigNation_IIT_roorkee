import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, FileText, MessageSquare, Shield } from "lucide-react"
import Link from "next/link"

export default function DisputesPage() {
  // Mock data - in a real app, this would come from an API
  const activeDisputes = [
    {
      id: "1",
      title: "Payment Release Dispute",
      project: "E-commerce Website Redesign",
      client: "Acme Inc.",
      status: "Under Review",
      description: "Dispute regarding the release of payment for the Frontend Implementation milestone.",
      dateOpened: "Mar 28, 2025",
      lastUpdated: "Mar 30, 2025",
      amount: "$1,200",
      messages: 5,
    },
  ]

  const resolvedDisputes = [
    {
      id: "2",
      title: "Work Quality Dispute",
      project: "Marketing Campaign Assets",
      client: "SportGear",
      status: "Resolved",
      resolution: "In favor of freelancer",
      description: "Dispute regarding the quality of delivered social media graphics.",
      dateOpened: "Feb 15, 2025",
      dateResolved: "Feb 20, 2025",
      amount: "$800",
    },
    {
      id: "3",
      title: "Scope Change Dispute",
      project: "Corporate Website Redesign",
      client: "Finance Pro",
      status: "Resolved",
      resolution: "Compromise",
      description: "Dispute regarding additional work requested outside the original project scope.",
      dateOpened: "Jan 25, 2025",
      dateResolved: "Feb 5, 2025",
      amount: "$1,500",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Disputes</h2>
          <p className="text-muted-foreground">Manage and resolve payment and work quality disputes</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/help/dispute-process">
            <Shield className="mr-2 h-4 w-4" />
            Dispute Resolution Process
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Disputes</TabsTrigger>
          <TabsTrigger value="resolved">Resolved Disputes</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          {activeDisputes.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Shield className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-center text-muted-foreground">You don't have any active disputes. That's great!</p>
              </CardContent>
            </Card>
          ) : (
            activeDisputes.map((dispute) => (
              <Card key={dispute.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{dispute.title}</CardTitle>
                      <CardDescription>
                        Project: {dispute.project} • Client: {dispute.client}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                    >
                      {dispute.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{dispute.description}</p>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Date Opened</p>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm font-medium">{dispute.dateOpened}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Last Updated</p>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm font-medium">{dispute.lastUpdated}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Amount in Dispute</p>
                      <p className="text-sm font-medium">{dispute.amount}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Messages</p>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm font-medium">{dispute.messages}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline" asChild>
                    <Link href={`/dashboard/disputes/${dispute.id}/evidence`}>
                      <FileText className="mr-2 h-4 w-4" />
                      Submit Evidence
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href={`/dashboard/disputes/${dispute.id}`}>
                      View Dispute
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </TabsContent>
        <TabsContent value="resolved" className="space-y-4">
          {resolvedDisputes.map((dispute) => (
            <Card key={dispute.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{dispute.title}</CardTitle>
                    <CardDescription>
                      Project: {dispute.project} • Client: {dispute.client}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    >
                      {dispute.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{dispute.resolution}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{dispute.description}</p>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Date Opened</p>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-medium">{dispute.dateOpened}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Date Resolved</p>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-medium">{dispute.dateResolved}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Amount</p>
                    <p className="text-sm font-medium">{dispute.amount}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" asChild>
                  <Link href={`/dashboard/disputes/${dispute.id}`}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, CheckCircle, FileText, Plus } from "lucide-react"
import Link from "next/link"

export default function ProposalsPage() {
  // Mock data - in a real app, this would come from an API
  const activeProposals = [
    {
      id: "1",
      projectTitle: "E-commerce Platform Development",
      client: "RetailTech Inc.",
      description:
        "Development of a full-featured e-commerce platform with inventory management, payment processing, and customer accounts.",
      budget: "$8,000 - $12,000",
      deadline: "2 months",
      submittedDate: "Mar 28, 2025",
      status: "Under Review",
      coverLetter:
        "I'm excited about the opportunity to work on your e-commerce platform. With my 5 years of experience building similar platforms using React, Next.js, and various payment gateways, I'm confident I can deliver a high-quality solution that meets all your requirements.",
      proposedAmount: "$10,500",
      proposedTimeline: "8 weeks",
    },
    {
      id: "2",
      projectTitle: "Mobile App UI/UX Redesign",
      client: "HealthApp",
      description:
        "Redesign of an existing health tracking mobile application to improve user experience and modernize the interface.",
      budget: "$3,000 - $5,000",
      deadline: "3 weeks",
      submittedDate: "Mar 25, 2025",
      status: "Under Review",
      coverLetter:
        "I've reviewed your current app and identified several areas for improvement in the user flow and visual design. My proposal includes a complete redesign of the main dashboard, tracking screens, and settings pages with a focus on accessibility and ease of use.",
      proposedAmount: "$4,200",
      proposedTimeline: "3 weeks",
    },
  ]

  const archivedProposals = [
    {
      id: "3",
      projectTitle: "Corporate Website Redesign",
      client: "Finance Pro",
      description: "Complete redesign of corporate website with modern design and improved content structure.",
      budget: "$4,000 - $6,000",
      deadline: "1 month",
      submittedDate: "Feb 15, 2025",
      status: "Accepted",
      completedDate: "Feb 20, 2025",
      proposedAmount: "$5,500",
      proposedTimeline: "4 weeks",
    },
    {
      id: "4",
      projectTitle: "Social Media Dashboard",
      client: "MarketingPlus",
      description:
        "Development of a dashboard to track and analyze social media performance across multiple platforms.",
      budget: "$2,500 - $4,000",
      deadline: "3 weeks",
      submittedDate: "Feb 10, 2025",
      status: "Declined",
      completedDate: "Feb 12, 2025",
      proposedAmount: "$3,800",
      proposedTimeline: "3 weeks",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">My Proposals</h2>
          <p className="text-muted-foreground">Track and manage your submitted project proposals</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/projects/browse">
            <Plus className="mr-2 h-4 w-4" />
            Find New Projects
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Proposals</TabsTrigger>
          <TabsTrigger value="archived">Archived Proposals</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          {activeProposals.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-center text-muted-foreground">
                  You don't have any active proposals. Start bidding on projects to grow your business!
                </p>
                <Button className="mt-4" asChild>
                  <Link href="/dashboard/projects/browse">Browse Projects</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            activeProposals.map((proposal) => (
              <Card key={proposal.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{proposal.projectTitle}</CardTitle>
                      <CardDescription>Client: {proposal.client}</CardDescription>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                    >
                      {proposal.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm">{proposal.description}</p>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Proposed Amount</p>
                        <p className="font-medium">{proposal.proposedAmount}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Timeline</p>
                        <p className="font-medium">{proposal.proposedTimeline}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Client Budget</p>
                        <p className="font-medium">{proposal.budget}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Submitted</p>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <p className="font-medium">{proposal.submittedDate}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md border p-3">
                      <h3 className="text-sm font-medium mb-2">Cover Letter</h3>
                      <p className="text-sm text-muted-foreground">{proposal.coverLetter}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline" asChild>
                    <Link href={`/dashboard/proposals/${proposal.id}/edit`}>Edit Proposal</Link>
                  </Button>
                  <Button asChild>
                    <Link href={`/dashboard/proposals/${proposal.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </TabsContent>
        <TabsContent value="archived" className="space-y-4">
          {archivedProposals.map((proposal) => (
            <Card key={proposal.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{proposal.projectTitle}</CardTitle>
                    <CardDescription>Client: {proposal.client}</CardDescription>
                  </div>
                  <Badge
                    variant={proposal.status === "Accepted" ? "outline" : "secondary"}
                    className={
                      proposal.status === "Accepted"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
                    }
                  >
                    {proposal.status === "Accepted" && <CheckCircle className="mr-1 h-3 w-3" />}
                    {proposal.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">{proposal.description}</p>

                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Proposed Amount</p>
                      <p className="font-medium">{proposal.proposedAmount}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Timeline</p>
                      <p className="font-medium">{proposal.proposedTimeline}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Client Budget</p>
                      <p className="font-medium">{proposal.budget}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Submitted</p>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <p className="font-medium">{proposal.submittedDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" asChild>
                  <Link href={`/dashboard/proposals/${proposal.id}`}>
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


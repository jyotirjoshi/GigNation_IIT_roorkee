import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight, CheckCircle, Clock, DollarSign, FileText, Shield } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  // Mock data - in a real app, this would come from an API
  const stats = [
    {
      title: "Active Projects",
      value: "5",
      description: "2 awaiting approval",
      icon: <FileText className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "Pending Milestones",
      value: "3",
      description: "$2,450 in escrow",
      icon: <Clock className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "Total Earnings",
      value: "$12,580",
      description: "Last 30 days",
      icon: <DollarSign className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "Active Disputes",
      value: "1",
      description: "Awaiting resolution",
      icon: <Shield className="h-5 w-5 text-muted-foreground" />,
    },
  ]

  const recentProjects = [
    {
      id: "1",
      title: "E-commerce Website Redesign",
      client: "Acme Inc.",
      status: "In Progress",
      nextMilestone: "Frontend Implementation",
      dueDate: "Apr 15, 2025",
      amount: "$1,200",
    },
    {
      id: "2",
      title: "Mobile App Development",
      client: "TechStart",
      status: "In Progress",
      nextMilestone: "User Authentication",
      dueDate: "Apr 10, 2025",
      amount: "$2,500",
    },
    {
      id: "3",
      title: "Brand Identity Design",
      client: "GreenLife",
      status: "Awaiting Approval",
      nextMilestone: "Logo Finalization",
      dueDate: "Apr 5, 2025",
      amount: "$800",
    },
  ]

  const recentMilestones = [
    {
      id: "1",
      project: "E-commerce Website Redesign",
      title: "Wireframes & Mockups",
      status: "Completed",
      date: "Mar 28, 2025",
      amount: "$500",
    },
    {
      id: "2",
      project: "Mobile App Development",
      title: "Project Setup & Architecture",
      status: "Completed",
      date: "Mar 25, 2025",
      amount: "$800",
    },
    {
      id: "3",
      project: "Brand Identity Design",
      title: "Brand Research & Concepts",
      status: "Awaiting Approval",
      date: "Mar 30, 2025",
      amount: "$400",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your freelance activity.</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/projects/new">
            Create New Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="projects">Recent Projects</TabsTrigger>
          <TabsTrigger value="milestones">Recent Milestones</TabsTrigger>
        </TabsList>
        <TabsContent value="projects" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recentProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-1 text-lg">{project.title}</CardTitle>
                  <CardDescription className="flex items-center justify-between">
                    <span>{project.client}</span>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        project.status === "In Progress"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Next Milestone:</span>
                      <span className="font-medium">{project.nextMilestone}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Due Date:</span>
                      <span className="font-medium">{project.dueDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-medium">{project.amount}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/dashboard/projects/${project.id}`}>
                        View Details
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/dashboard/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="milestones" className="space-y-4">
          <div className="rounded-md border">
            <div className="grid grid-cols-5 border-b p-4 font-medium">
              <div className="col-span-2">Milestone</div>
              <div>Status</div>
              <div>Date</div>
              <div className="text-right">Amount</div>
            </div>
            {recentMilestones.map((milestone) => (
              <div key={milestone.id} className="grid grid-cols-5 items-center p-4">
                <div className="col-span-2">
                  <div className="font-medium">{milestone.title}</div>
                  <div className="text-sm text-muted-foreground">{milestone.project}</div>
                </div>
                <div>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                      milestone.status === "Completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                    }`}
                  >
                    {milestone.status === "Completed" && <CheckCircle className="h-3 w-3" />}
                    {milestone.status}
                  </span>
                </div>
                <div>{milestone.date}</div>
                <div className="text-right font-medium">{milestone.amount}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/dashboard/milestones">
                View All Milestones
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


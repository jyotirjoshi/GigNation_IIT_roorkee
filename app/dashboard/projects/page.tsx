import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Clock, FileText, Plus } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  // Mock data - in a real app, this would come from an API
  const activeProjects = [
    {
      id: "1",
      title: "E-commerce Website Redesign",
      client: "Acme Inc.",
      description:
        "Redesign of an existing e-commerce website with a focus on user experience and conversion optimization.",
      status: "In Progress",
      progress: 65,
      milestones: [
        { title: "Wireframes & Mockups", status: "Completed", amount: "$500" },
        { title: "Frontend Implementation", status: "In Progress", amount: "$1,200" },
        { title: "Backend Integration", status: "Pending", amount: "$1,500" },
      ],
      totalAmount: "$3,200",
      dueDate: "Apr 15, 2025",
    },
    {
      id: "2",
      title: "Mobile App Development",
      client: "TechStart",
      description: "Development of a cross-platform mobile application for task management and team collaboration.",
      status: "In Progress",
      progress: 40,
      milestones: [
        { title: "Project Setup & Architecture", status: "Completed", amount: "$800" },
        { title: "User Authentication", status: "In Progress", amount: "$1,200" },
        { title: "Core Features", status: "Pending", amount: "$2,500" },
        { title: "Testing & Deployment", status: "Pending", amount: "$1,500" },
      ],
      totalAmount: "$6,000",
      dueDate: "May 20, 2025",
    },
    {
      id: "3",
      title: "Brand Identity Design",
      client: "GreenLife",
      description:
        "Creation of a complete brand identity including logo, color palette, typography, and brand guidelines.",
      status: "Awaiting Approval",
      progress: 90,
      milestones: [
        { title: "Brand Research & Concepts", status: "Completed", amount: "$400" },
        { title: "Logo Finalization", status: "Awaiting Approval", amount: "$800" },
        { title: "Brand Guidelines", status: "Pending", amount: "$600" },
      ],
      totalAmount: "$1,800",
      dueDate: "Apr 5, 2025",
    },
  ]

  const completedProjects = [
    {
      id: "4",
      title: "Corporate Website Redesign",
      client: "Finance Pro",
      description: "Complete redesign of corporate website with modern design and improved content structure.",
      status: "Completed",
      completedDate: "Mar 10, 2025",
      totalAmount: "$4,500",
    },
    {
      id: "5",
      title: "Marketing Campaign Assets",
      client: "SportGear",
      description:
        "Design of digital marketing assets including social media graphics, email templates, and landing pages.",
      status: "Completed",
      completedDate: "Feb 28, 2025",
      totalAmount: "$2,200",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">Manage your active and completed projects</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/projects/new">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Projects</TabsTrigger>
          <TabsTrigger value="completed">Completed Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          {activeProjects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.client}</CardDescription>
                  </div>
                  <Badge variant={project.status === "In Progress" ? "default" : "outline"}>{project.status}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>

                  <div className="rounded-md border">
                    <div className="grid grid-cols-3 border-b p-3 text-sm font-medium">
                      <div>Milestone</div>
                      <div>Status</div>
                      <div className="text-right">Amount</div>
                    </div>
                    {project.milestones.map((milestone, i) => (
                      <div key={i} className="grid grid-cols-3 items-center p-3 text-sm">
                        <div>{milestone.title}</div>
                        <div>
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                              milestone.status === "Completed"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                : milestone.status === "In Progress"
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                  : milestone.status === "Awaiting Approval"
                                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                                    : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
                            }`}
                          >
                            {milestone.status === "Completed" && <CheckCircle className="h-3 w-3" />}
                            {milestone.status === "In Progress" && <Clock className="h-3 w-3" />}
                            {milestone.status}
                          </span>
                        </div>
                        <div className="text-right font-medium">{milestone.amount}</div>
                      </div>
                    ))}
                    <div className="grid grid-cols-3 items-center border-t p-3 text-sm">
                      <div className="font-medium">Total</div>
                      <div></div>
                      <div className="text-right font-bold">{project.totalAmount}</div>
                    </div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                      <span>
                        Due: <span className="font-medium">{project.dueDate}</span>
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FileText className="mr-1 h-4 w-4 text-muted-foreground" />
                      <span>{project.milestones.length} Milestones</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" asChild>
                  <Link href={`/dashboard/projects/${project.id}/milestones`}>Manage Milestones</Link>
                </Button>
                <Button asChild>
                  <Link href={`/dashboard/projects/${project.id}`}>
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          {completedProjects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.client}</CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800/30"
                  >
                    Completed
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                    <span>
                      Completed: <span className="font-medium">{project.completedDate}</span>
                    </span>
                  </div>
                  <div className="font-medium">Total Amount: {project.totalAmount}</div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" asChild>
                  <Link href={`/dashboard/projects/${project.id}`}>
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


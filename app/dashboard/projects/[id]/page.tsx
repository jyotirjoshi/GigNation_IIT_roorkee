import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Download,
  FileText,
  MessageSquare,
  MoreHorizontal,
  Paperclip,
  Upload,
} from "lucide-react"
import Link from "next/link"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // Mock data - in a real app, this would come from an API based on the ID
  const project = {
    id: params.id,
    title: "E-commerce Website Redesign",
    client: "Acme Inc.",
    description:
      "Redesign of an existing e-commerce website with a focus on user experience and conversion optimization. The project includes wireframing, UI design, frontend development, and backend integration.",
    status: "In Progress",
    progress: 65,
    startDate: "Feb 15, 2025",
    dueDate: "Apr 15, 2025",
    totalAmount: "$3,200",
    milestones: [
      {
        id: "m1",
        title: "Wireframes & Mockups",
        status: "Completed",
        amount: "$500",
        dueDate: "Mar 1, 2025",
        completedDate: "Feb 28, 2025",
        description: "Create wireframes and high-fidelity mockups for all key pages of the website.",
        deliverables: [
          { name: "Homepage Wireframe", type: "pdf" },
          { name: "Product Page Mockup", type: "png" },
          { name: "Checkout Flow", type: "pdf" },
        ],
      },
      {
        id: "m2",
        title: "Frontend Implementation",
        status: "In Progress",
        amount: "$1,200",
        dueDate: "Mar 30, 2025",
        description: "Implement the frontend of the website using React and Next.js based on the approved designs.",
        deliverables: [
          { name: "Homepage Implementation", type: "code" },
          { name: "Product Page Implementation", type: "code" },
        ],
      },
      {
        id: "m3",
        title: "Backend Integration",
        status: "Pending",
        amount: "$1,500",
        dueDate: "Apr 15, 2025",
        description: "Integrate the frontend with the backend API and implement all required functionality.",
        deliverables: [
          { name: "API Integration", type: "code" },
          { name: "User Authentication", type: "code" },
          { name: "Payment Processing", type: "code" },
        ],
      },
    ],
    team: [
      { name: "John Doe", role: "Project Manager", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Jane Smith", role: "Designer", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Mike Johnson", role: "Developer", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    messages: [
      {
        id: "msg1",
        sender: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40",
        content: "I've uploaded the latest mockups for review. Please let me know if you have any feedback.",
        timestamp: "Mar 25, 2025 • 10:23 AM",
        attachments: [{ name: "updated-mockups.zip", size: "4.2 MB" }],
      },
      {
        id: "msg2",
        sender: "Client",
        avatar: "/placeholder.svg?height=40&width=40",
        content: "The mockups look great! I have a few minor suggestions for the product page layout.",
        timestamp: "Mar 25, 2025 • 2:45 PM",
        attachments: [],
      },
      {
        id: "msg3",
        sender: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40",
        content: "Thanks for the feedback! I'll make those adjustments and share an updated version tomorrow.",
        timestamp: "Mar 25, 2025 • 3:12 PM",
        attachments: [],
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/projects">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{project.title}</h2>
            <p className="text-muted-foreground">Client: {project.client}</p>
          </div>
        </div>
        <Badge variant={project.status === "In Progress" ? "default" : "outline"} className="ml-0 md:ml-2">
          {project.status}
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Start Date</p>
              <p className="font-medium">{project.startDate}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Due Date</p>
              <p className="font-medium">{project.dueDate}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Amount</p>
              <p className="font-medium">{project.totalAmount}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Progress</p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${project.progress}%` }} />
                </div>
                <span className="text-sm font-medium">{project.progress}%</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2">Project Team</h3>
            <div className="flex flex-wrap gap-4">
              {project.team.map((member, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="milestones" className="space-y-4">
        <TabsList>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="milestones" className="space-y-4">
          {project.milestones.map((milestone) => (
            <Card key={milestone.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{milestone.title}</CardTitle>
                    <CardDescription>Due: {milestone.dueDate}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{milestone.amount}</span>
                    <Badge
                      variant={
                        milestone.status === "Completed"
                          ? "outline"
                          : milestone.status === "In Progress"
                            ? "default"
                            : "secondary"
                      }
                      className={
                        milestone.status === "Completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800/30"
                          : ""
                      }
                    >
                      {milestone.status === "Completed" && <CheckCircle className="mr-1 h-3 w-3" />}
                      {milestone.status === "In Progress" && <Clock className="mr-1 h-3 w-3" />}
                      {milestone.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{milestone.description}</p>

                {milestone.deliverables && milestone.deliverables.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Deliverables</h4>
                    <div className="rounded-md border">
                      {milestone.deliverables.map((deliverable, i) => (
                        <div key={i} className="flex items-center justify-between p-3 text-sm border-b last:border-0">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>{deliverable.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {deliverable.type}
                            </Badge>
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {milestone.status === "In Progress" && (
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline">
                      <Paperclip className="mr-2 h-4 w-4" />
                      Add Files
                    </Button>
                    <Button>
                      <Upload className="mr-2 h-4 w-4" />
                      Submit for Approval
                    </Button>
                  </div>
                )}

                {milestone.status === "Completed" && (
                  <div className="mt-4 flex items-center justify-end gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Completed on {milestone.completedDate}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="messages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Messages</CardTitle>
              <CardDescription>Communication between you and the client</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {project.messages.map((message) => (
                  <div key={message.id} className="flex gap-4">
                    <Avatar>
                      <AvatarImage src={message.avatar} alt={message.sender} />
                      <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{message.sender}</div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm">{message.content}</p>

                      {message.attachments && message.attachments.length > 0 && (
                        <div className="mt-2 rounded-md border p-2">
                          {message.attachments.map((attachment, i) => (
                            <div key={i} className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <Paperclip className="h-4 w-4 text-muted-foreground" />
                                <span>{attachment.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">{attachment.size}</span>
                                <Button variant="ghost" size="icon">
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Paperclip className="mr-2 h-4 w-4" />
                  Attach Files
                </Button>
                <Button className="flex-1">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


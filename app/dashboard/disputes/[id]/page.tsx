"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Calendar, Download, MessageSquare, Paperclip, Upload } from "lucide-react"

export default function DisputeDetailPage({ params }: { params: { id: string } }) {
  const [newMessage, setNewMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Mock data - in a real app, this would come from an API based on the ID
  const dispute = {
    id: params.id,
    title: "Payment Release Dispute",
    project: "E-commerce Website Redesign",
    projectId: "1",
    client: "Acme Inc.",
    status: "Under Review",
    description:
      "Dispute regarding the release of payment for the Frontend Implementation milestone. The client is claiming that some of the requirements were not met, but I believe all deliverables were completed according to the specifications.",
    dateOpened: "Mar 28, 2025",
    lastUpdated: "Mar 30, 2025",
    amount: "$1,200",
    milestone: {
      title: "Frontend Implementation",
      description: "Implement the frontend of the website using React and Next.js based on the approved designs.",
      dueDate: "Mar 30, 2025",
    },
    messages: [
      {
        id: "msg1",
        sender: "John Doe",
        role: "Freelancer",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
          "I'm opening this dispute because the milestone payment hasn't been released even though all deliverables were completed according to the specifications. I've attached screenshots of the completed work and the original requirements for reference.",
        timestamp: "Mar 28, 2025 • 10:23 AM",
        attachments: [
          { name: "completed-work-screenshots.zip", size: "4.2 MB" },
          { name: "original-requirements.pdf", size: "1.8 MB" },
        ],
      },
      {
        id: "msg2",
        sender: "Client",
        role: "Employer",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
          "I'm withholding payment because several key features are not functioning as expected. The mobile responsiveness has issues and the checkout flow doesn't work properly on Safari browsers.",
        timestamp: "Mar 28, 2025 • 2:45 PM",
        attachments: [{ name: "issue-screenshots.zip", size: "3.5 MB" }],
      },
      {
        id: "msg3",
        sender: "John Doe",
        role: "Freelancer",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
          "I've reviewed the issues you mentioned. The mobile responsiveness was implemented according to the breakpoints we agreed upon in the requirements. The Safari browser compatibility wasn't mentioned in the original requirements. I'm willing to fix these issues, but they should be considered additional work beyond the original scope.",
        timestamp: "Mar 29, 2025 • 9:12 AM",
        attachments: [],
      },
      {
        id: "msg4",
        sender: "Dispute Manager",
        role: "Admin",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
          "Thank you for providing the details. I've reviewed the original project requirements and the submitted work. I'll need both parties to provide additional information to help resolve this dispute. Please submit any relevant documentation or evidence within the next 48 hours.",
        timestamp: "Mar 30, 2025 • 11:30 AM",
        attachments: [],
      },
    ],
    evidence: [
      {
        id: "ev1",
        title: "Original Project Requirements",
        description: "The agreed-upon requirements document for the Frontend Implementation milestone.",
        submittedBy: "John Doe",
        submittedAt: "Mar 28, 2025",
        fileType: "pdf",
        fileSize: "1.8 MB",
      },
      {
        id: "ev2",
        title: "Completed Work Screenshots",
        description: "Screenshots showing the completed implementation of all required features.",
        submittedBy: "John Doe",
        submittedAt: "Mar 28, 2025",
        fileType: "zip",
        fileSize: "4.2 MB",
      },
      {
        id: "ev3",
        title: "Issue Screenshots",
        description: "Screenshots showing the issues with mobile responsiveness and Safari compatibility.",
        submittedBy: "Client",
        submittedAt: "Mar 28, 2025",
        fileType: "zip",
        fileSize: "3.5 MB",
      },
    ],
  }

  const handleSubmitMessage = () => {
    if (!newMessage.trim()) return

    setIsSubmitting(true)

    // Simulate message submission
    setTimeout(() => {
      setNewMessage("")
      setIsSubmitting(false)
      // In a real app, you would add the new message to the list
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/disputes">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{dispute.title}</h2>
            <p className="text-muted-foreground">
              Project:{" "}
              <Link href={`/dashboard/projects/${dispute.projectId}`} className="hover:underline">
                {dispute.project}
              </Link>{" "}
              • Client: {dispute.client}
            </p>
          </div>
        </div>
        <Badge
          variant="secondary"
          className="ml-0 md:ml-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
        >
          {dispute.status}
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Dispute Overview</CardTitle>
          <CardDescription>{dispute.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Date Opened</p>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <p className="font-medium">{dispute.dateOpened}</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Last Updated</p>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <p className="font-medium">{dispute.lastUpdated}</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Amount in Dispute</p>
              <p className="font-medium">{dispute.amount}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Milestone</p>
              <p className="font-medium">{dispute.milestone.title}</p>
            </div>
          </div>

          <div className="mt-6 rounded-md border p-4">
            <h3 className="text-sm font-medium mb-2">Milestone Details</h3>
            <p className="text-sm mb-2">{dispute.milestone.description}</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Due: {dispute.milestone.dueDate}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="messages" className="space-y-4">
        <TabsList>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="evidence">Evidence</TabsTrigger>
        </TabsList>
        <TabsContent value="messages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dispute Messages</CardTitle>
              <CardDescription>Communication between all parties regarding this dispute</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {dispute.messages.map((message) => (
                  <div key={message.id} className="flex gap-4">
                    <Avatar>
                      <AvatarImage src={message.avatar} alt={message.sender} />
                      <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="font-medium">{message.sender}</div>
                        <Badge variant="outline" className="text-xs">
                          {message.role}
                        </Badge>
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

                      <div className="text-xs text-muted-foreground">{message.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <Textarea
                  placeholder="Type your message here..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  rows={4}
                />
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Paperclip className="mr-2 h-4 w-4" />
                    Attach Files
                  </Button>
                  <Button
                    className="flex-1"
                    onClick={handleSubmitMessage}
                    disabled={!newMessage.trim() || isSubmitting}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="evidence" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dispute Evidence</CardTitle>
              <CardDescription>Documentation and evidence submitted by all parties</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dispute.evidence.map((item) => (
                  <div key={item.id} className="rounded-md border p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Badge variant="outline" className="uppercase">
                        {item.fileType}
                      </Badge>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <div className="text-muted-foreground">
                        Submitted by {item.submittedBy} on {item.submittedAt}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">{item.fileSize}</span>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button className="w-full">
                  <Upload className="mr-2 h-4 w-4" />
                  Submit New Evidence
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resolution Timeline</CardTitle>
              <CardDescription>Expected timeline for dispute resolution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Evidence Collection</p>
                    <p className="text-sm text-muted-foreground">
                      Both parties submit relevant documentation (In Progress)
                    </p>
                  </div>
                </div>
                <div className="ml-4 h-6 w-px bg-border"></div>
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Review by Dispute Manager</p>
                    <p className="text-sm text-muted-foreground">
                      Our team reviews all submitted evidence (Expected: Apr 2, 2025)
                    </p>
                  </div>
                </div>
                <div className="ml-4 h-6 w-px bg-border"></div>
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Proposed Resolution</p>
                    <p className="text-sm text-muted-foreground">
                      A resolution is proposed to both parties (Expected: Apr 4, 2025)
                    </p>
                  </div>
                </div>
                <div className="ml-4 h-6 w-px bg-border"></div>
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    4
                  </div>
                  <div>
                    <p className="font-medium">Final Decision</p>
                    <p className="text-sm text-muted-foreground">
                      Final resolution and fund distribution (Expected: Apr 6, 2025)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


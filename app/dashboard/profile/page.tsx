"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Edit, Plus, Star, Upload, X } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  // Mock user data - in a real app, this would come from an API
  const user = {
    name: "John Doe",
    title: "Full Stack Developer",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    avatar: "/placeholder.svg?height=128&width=128",
    bio: "Full stack developer with 5+ years of experience specializing in React, Next.js, and Node.js. I've worked on a variety of projects from e-commerce platforms to SaaS applications, focusing on creating performant and user-friendly experiences.",
    hourlyRate: "$65",
    availability: "Part-time (20hrs/week)",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "UI/UX Design",
      "RESTful APIs",
    ],
    languages: [
      { name: "English", proficiency: "Native" },
      { name: "Spanish", proficiency: "Intermediate" },
    ],
    education: [
      {
        institution: "University of California, Berkeley",
        degree: "B.S. Computer Science",
        years: "2015 - 2019",
      },
    ],
    experience: [
      {
        company: "TechCorp",
        position: "Senior Frontend Developer",
        years: "2021 - Present",
        description:
          "Lead frontend development for multiple client projects, implementing modern React applications with a focus on performance and accessibility.",
      },
      {
        company: "WebSolutions",
        position: "Full Stack Developer",
        years: "2019 - 2021",
        description:
          "Developed and maintained full stack applications using React, Node.js, and MongoDB. Collaborated with design and product teams to implement new features and improve user experience.",
      },
    ],
    portfolio: [
      {
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform built with Next.js, Stripe, and a headless CMS.",
        image: "/placeholder.svg?height=200&width=300",
        tags: ["Next.js", "Stripe", "Tailwind CSS"],
      },
      {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team features.",
        image: "/placeholder.svg?height=200&width=300",
        tags: ["React", "Firebase", "Material UI"],
      },
      {
        title: "Healthcare Dashboard",
        description: "An analytics dashboard for healthcare providers to track patient data and outcomes.",
        image: "/placeholder.svg?height=200&width=300",
        tags: ["React", "D3.js", "Node.js"],
      },
    ],
    reviews: [
      {
        client: "Acme Inc.",
        project: "E-commerce Website Redesign",
        rating: 5,
        comment:
          "John did an excellent job redesigning our e-commerce website. He was professional, responsive, and delivered high-quality work ahead of schedule. We'll definitely work with him again.",
        date: "Mar 15, 2025",
      },
      {
        client: "TechStart",
        project: "Mobile App Development",
        rating: 4,
        comment:
          "Great work on our mobile app. John was easy to communicate with and implemented all the features we requested. The only reason for 4 stars instead of 5 is that we had a few minor bugs that needed fixing after delivery.",
        date: "Feb 28, 2025",
      },
    ],
  }

  const handleSaveProfile = () => {
    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setIsEditing(false)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">My Profile</h2>
          <p className="text-muted-foreground">Manage your profile information and portfolio</p>
        </div>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button onClick={handleSaveProfile} disabled={isSaving}>
              <CheckCircle className="mr-2 h-4 w-4" />
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        )}
      </div>

      <Card>
        <CardHeader className="relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/10 to-primary/5 rounded-t-lg"></div>
          <div className="relative flex flex-col md:flex-row gap-4 items-start md:items-end pt-16">
            <Avatar className="h-24 w-24 border-4 border-background">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="text-2xl">{user.name}</CardTitle>
              <CardDescription className="text-lg">{user.title}</CardDescription>
            </div>
            {isEditing && (
              <Button variant="outline" size="sm">
                <Upload className="mr-2 h-4 w-4" />
                Change Photo
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {isEditing ? (
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue={user.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input id="title" defaultValue={user.title} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user.email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue={user.phone} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue={user.location} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hourlyRate">Hourly Rate</Label>
                  <Input id="hourlyRate" defaultValue={user.hourlyRate} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" rows={4} defaultValue={user.bio} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Select defaultValue={user.availability}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time (40hrs/week)">Full-time (40hrs/week)</SelectItem>
                      <SelectItem value="Part-time (20hrs/week)">Part-time (20hrs/week)</SelectItem>
                      <SelectItem value="Limited (10hrs/week)">Limited (10hrs/week)</SelectItem>
                      <SelectItem value="Not Available">Not Available</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium mb-2">Contact Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span>{user.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone:</span>
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span>{user.location}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Professional Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hourly Rate:</span>
                    <span>{user.hourlyRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability:</span>
                    <span>{user.availability}</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-lg font-medium mb-2">Bio</h3>
                <p className="text-muted-foreground">{user.bio}</p>
              </div>
            </div>
          )}

          <Separator />

          <div>
            <h3 className="text-lg font-medium mb-4">Skills</h3>
            {isEditing ? (
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="flex items-center gap-1 pl-2">
                      {skill}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-5 w-5 ml-1 text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                  <Button variant="outline" size="sm" className="gap-1">
                    <Plus className="h-4 w-4" />
                    Add Skill
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill, i) => (
                  <Badge key={i} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <Separator />

          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="languages">Languages</TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="space-y-4 mt-4">
              {isEditing ? (
                <div className="space-y-4">
                  {user.experience.map((exp, i) => (
                    <Card key={i}>
                      <CardHeader className="p-4">
                        <div className="flex justify-between">
                          <div>
                            <Input defaultValue={exp.position} className="font-medium text-base mb-1" />
                            <Input defaultValue={exp.company} className="text-muted-foreground text-sm" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Input defaultValue={exp.years} className="w-40 text-sm text-muted-foreground" />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-muted-foreground hover:text-destructive"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <Textarea defaultValue={exp.description} rows={3} />
                      </CardContent>
                    </Card>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Experience
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {user.experience.map((exp, i) => (
                    <Card key={i}>
                      <CardHeader className="p-4">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">{exp.position}</h4>
                            <p className="text-sm text-muted-foreground">{exp.company}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{exp.years}</p>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm">{exp.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
            <TabsContent value="education" className="space-y-4 mt-4">
              {isEditing ? (
                <div className="space-y-4">
                  {user.education.map((edu, i) => (
                    <Card key={i}>
                      <CardHeader className="p-4">
                        <div className="flex justify-between">
                          <div>
                            <Input defaultValue={edu.degree} className="font-medium text-base mb-1" />
                            <Input defaultValue={edu.institution} className="text-muted-foreground text-sm" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Input defaultValue={edu.years} className="w-40 text-sm text-muted-foreground" />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-muted-foreground hover:text-destructive"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Education
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {user.education.map((edu, i) => (
                    <Card key={i}>
                      <CardHeader className="p-4">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">{edu.degree}</h4>
                            <p className="text-sm text-muted-foreground">{edu.institution}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{edu.years}</p>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
            <TabsContent value="languages" className="space-y-4 mt-4">
              {isEditing ? (
                <div className="space-y-4">
                  {user.languages.map((lang, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <Input defaultValue={lang.name} className="flex-1" />
                      <Select defaultValue={lang.proficiency}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select proficiency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Native">Native</SelectItem>
                          <SelectItem value="Fluent">Fluent</SelectItem>
                          <SelectItem value="Advanced">Advanced</SelectItem>
                          <SelectItem value="Intermediate">Intermediate</SelectItem>
                          <SelectItem value="Basic">Basic</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Language
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  {user.languages.map((lang, i) => (
                    <div key={i} className="flex justify-between items-center p-2 rounded-md border">
                      <span>{lang.name}</span>
                      <Badge variant="outline">{lang.proficiency}</Badge>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Portfolio</CardTitle>
            {isEditing && (
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Project
              </Button>
            )}
          </div>
          <CardDescription>Showcase your best work to potential clients</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {user.portfolio.map((project, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <Badge key={j} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                {isEditing && (
                  <CardFooter className="p-4 pt-0 flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      Remove
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Client Reviews</CardTitle>
          <CardDescription>Feedback from clients you've worked with</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {user.reviews.map((review, i) => (
              <Card key={i}>
                <CardHeader className="p-4">
                  <div className="flex justify-between">
                    <div>
                      <CardTitle className="text-base">{review.client}</CardTitle>
                      <CardDescription>{review.project}</CardDescription>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`h-4 w-4 ${
                            j < review.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm">{review.comment}</p>
                  <p className="text-xs text-muted-foreground mt-2">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


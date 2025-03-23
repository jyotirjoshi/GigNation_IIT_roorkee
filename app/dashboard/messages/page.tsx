"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Paperclip, Search, Send } from "lucide-react"

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string>("1")
  const [searchQuery, setSearchQuery] = useState("")
  const [newMessage, setNewMessage] = useState("")

  // Mock data - in a real app, this would come from an API
  const conversations = [
    {
      id: "1",
      name: "Acme Inc.",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I've reviewed the latest mockups and they look great!",
      timestamp: "10:23 AM",
      unread: 2,
      project: "E-commerce Website Redesign",
      isOnline: true,
    },
    {
      id: "2",
      name: "TechStart",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "When can we expect the first milestone to be completed?",
      timestamp: "Yesterday",
      unread: 0,
      project: "Mobile App Development",
      isOnline: false,
    },
    {
      id: "3",
      name: "GreenLife",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "The logo concepts look promising. I'd like to discuss a few tweaks.",
      timestamp: "Mar 28",
      unread: 0,
      project: "Brand Identity Design",
      isOnline: true,
    },
    {
      id: "4",
      name: "Finance Pro",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thank you for completing the project ahead of schedule!",
      timestamp: "Mar 25",
      unread: 0,
      project: "Corporate Website Redesign",
      isOnline: false,
    },
  ]

  const messages = {
    "1": [
      {
        id: "msg1",
        sender: "Client",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
          "Hi there! I wanted to check in on the progress of the e-commerce website redesign. How are things coming along?",
        timestamp: "Mar 29, 2025 • 9:45 AM",
        isMe: false,
      },
      {
        id: "msg2",
        sender: "Me",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
          "Hello! I'm making good progress on the redesign. I've completed the wireframes for all the key pages and I'm now working on the high-fidelity mockups.",
        timestamp: "Mar 29, 2025 • 10:12 AM",
        isMe: true,
      },
      {
        id: "msg3",
        sender: "Client",
        avatar: "/placeholder.svg?height=40&width=40",
        content: "That sounds great! When do you think you'll have the mockups ready for review?",
        timestamp: "Mar 29, 2025 • 10:18 AM",
        isMe: false,
      },
      {
        id: "msg4",
        sender: "Me",
        avatar: "/placeholder.svg?height=40&width=40",
        content: "I should have them ready by tomorrow afternoon. I'll send them over as soon as they're done.",
        timestamp: "Mar 29, 2025 • 10:25 AM",
        isMe: true,
      },
      {
        id: "msg5",
        sender: "Client",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
          "Perfect! I'm looking forward to seeing them. Do you need any additional information from me in the meantime?",
        timestamp: "Mar 29, 2025 • 10:30 AM",
        isMe: false,
      },
      {
        id: "msg6",
        sender: "Me",
        avatar: "/placeholder.svg?height=40&width=40",
        content: "I think I have everything I need for now. If anything comes up, I'll let you know right away.",
        timestamp: "Mar 29, 2025 • 10:35 AM",
        isMe: true,
      },
      {
        id: "msg7",
        sender: "Client",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
          "I've reviewed the latest mockups and they look great! I especially like the new product page layout. Just a few minor tweaks to the checkout flow and I think we'll be good to go.",
        timestamp: "Today • 10:23 AM",
        isMe: false,
      },
    ],
    "2": [
      {
        id: "msg1",
        sender: "Client",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
          "Hello! I'm checking in about the mobile app development project. When can we expect the first milestone to be completed?",
        timestamp: "Yesterday • 3:45 PM",
        isMe: false,
      },
    ],
    "3": [
      {
        id: "msg1",
        sender: "Client",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
          "The logo concepts look promising. I'd like to discuss a few tweaks to the color palette and typography.",
        timestamp: "Mar 28, 2025 • 2:15 PM",
        isMe: false,
      },
    ],
    "4": [
      {
        id: "msg1",
        sender: "Client",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
          "Thank you for completing the project ahead of schedule! The website looks fantastic and our team is very happy with the results.",
        timestamp: "Mar 25, 2025 • 11:30 AM",
        isMe: false,
      },
    ],
  }

  const filteredConversations = conversations.filter(
    (conversation) =>
      conversation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conversation.project.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const currentMessages = messages[selectedConversation as keyof typeof messages] || []
  const currentConversation = conversations.find((c) => c.id === selectedConversation)

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    // In a real app, you would send the message to the API
    setNewMessage("")
  }

  return (
    <div className="h-[calc(100vh-9rem)] flex flex-col">
      <div className="mb-4">
        <h2 className="text-3xl font-bold tracking-tight">Messages</h2>
        <p className="text-muted-foreground">Communicate with clients and team members</p>
      </div>

      <div className="flex flex-1 overflow-hidden rounded-lg border">
        {/* Conversation List */}
        <div className="w-full max-w-xs border-r">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search conversations..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="h-[calc(100vh-15rem)] overflow-y-auto">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-muted/50 ${
                  selectedConversation === conversation.id ? "bg-muted" : ""
                }`}
                onClick={() => setSelectedConversation(conversation.id)}
              >
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={conversation.avatar} alt={conversation.name} />
                    <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {conversation.isOnline && (
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background"></span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium truncate">{conversation.name}</p>
                    <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                  <p className="text-xs text-muted-foreground mt-1">Project: {conversation.project}</p>
                </div>
                {conversation.unread > 0 && <Badge className="ml-auto">{conversation.unread}</Badge>}
              </div>
            ))}
          </div>
        </div>

        {/* Message Area */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Conversation Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={currentConversation?.avatar} alt={currentConversation?.name} />
                    <AvatarFallback>{currentConversation?.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{currentConversation?.name}</p>
                    <p className="text-xs text-muted-foreground">Project: {currentConversation?.project}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {currentConversation?.isOnline ? (
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    >
                      Online
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400">
                      Offline
                    </Badge>
                  )}
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {currentMessages.map((message) => (
                    <div key={message.id} className={`flex gap-3 ${message.isMe ? "justify-end" : ""}`}>
                      {!message.isMe && (
                        <Avatar>
                          <AvatarImage src={message.avatar} alt={message.sender} />
                          <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`max-w-[70%] ${message.isMe ? "bg-primary text-primary-foreground" : "bg-muted"} rounded-lg p-3`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                      </div>
                      {message.isMe && (
                        <Avatar>
                          <AvatarImage src={message.avatar} alt={message.sender} />
                          <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Type your message here..."
                    className="min-h-[80px]"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <Button variant="outline" size="icon">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground">Select a conversation to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


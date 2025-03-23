import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Shield, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Shield className="h-6 w-6 text-primary" />
            <span>GigNation</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Secure & Transparent Freelance Marketplace
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our platform ensures fair payments, efficient work verification, and seamless dispute resolution for
                    freelancers and employers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1.5">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-1">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-md space-y-4 p-6 bg-background/80 backdrop-blur-sm rounded-lg border shadow-lg">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Project Milestones</h3>
                        <p className="text-sm text-muted-foreground">
                          Funds are securely held in escrow until work is verified
                        </p>
                      </div>
                      <div className="space-y-3">
                        {[
                          { name: "Initial Design", status: "Completed", amount: "$500" },
                          { name: "Frontend Development", status: "In Progress", amount: "$1,200" },
                          { name: "Backend Integration", status: "Pending", amount: "$1,500" },
                        ].map((milestone, i) => (
                          <div key={i} className="flex items-center justify-between p-3 rounded-lg border">
                            <div className="flex items-center gap-3">
                              <CheckCircle
                                className={`h-5 w-5 ${milestone.status === "Completed" ? "text-green-500" : "text-gray-300"}`}
                              />
                              <div>
                                <p className="font-medium">{milestone.name}</p>
                                <p className="text-xs text-muted-foreground">{milestone.status}</p>
                              </div>
                            </div>
                            <p className="font-semibold">{milestone.amount}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Core Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform addresses key issues such as trust, payment delays, and work disputes
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              {[
                {
                  title: "Milestone-Based Payments",
                  description:
                    "Set payment milestones linked to deliverables with funds held in escrow until work is verified",
                  icon: <Shield className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Work Verification System",
                  description: "Submit and review work with feedback options and automated verification methods",
                  icon: <CheckCircle className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Dispute Resolution",
                  description: "Raise disputes on work quality or payments with a dedicated resolution system",
                  icon: <Users className="h-10 w-10 text-primary" />,
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center space-y-4 rounded-lg border p-6 bg-background shadow-sm"
                >
                  {feature.icon}
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform simplifies the freelance workflow for both freelancers and employers
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12">
              {[
                {
                  step: "1",
                  title: "Create a Project",
                  description: "Employers post projects with clear requirements and set milestone-based payments",
                },
                {
                  step: "2",
                  title: "Find Talent or Projects",
                  description: "Freelancers apply to projects or employers invite freelancers directly",
                },
                {
                  step: "3",
                  title: "Secure Milestone Payments",
                  description: "Funds are securely held in escrow until work is completed and verified",
                },
                {
                  step: "4",
                  title: "Submit & Verify Work",
                  description: "Freelancers submit work for each milestone and employers verify completion",
                },
                {
                  step: "5",
                  title: "Release Payments",
                  description: "Payments are automatically released upon approval or after dispute resolution",
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start rounded-lg p-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {step.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Transparent Pricing</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Simple fee structure with no hidden costs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 bg-background shadow-sm">
                <h3 className="text-xl font-bold">For Freelancers</h3>
                <div className="text-4xl font-bold">5%</div>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Only pay when you get paid. No upfront costs or monthly fees.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>No monthly subscription</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Secure payment protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Dispute resolution included</span>
                  </li>
                </ul>
                <Link href="/signup?type=freelancer">
                  <Button className="w-full">Sign Up as Freelancer</Button>
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 bg-background shadow-sm">
                <h3 className="text-xl font-bold">For Employers</h3>
                <div className="text-4xl font-bold">3%</div>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Small fee on top of project payments. Find the best talent for your projects.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>No monthly subscription</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Verified freelancer profiles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Work quality guarantee</span>
                  </li>
                </ul>
                <Link href="/signup?type=employer">
                  <Button className="w-full">Sign Up as Employer</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} GigNation. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-gray-500 hover:underline underline-offset-4 dark:text-gray-400">
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:underline underline-offset-4 dark:text-gray-400"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-500 hover:underline underline-offset-4 dark:text-gray-400"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


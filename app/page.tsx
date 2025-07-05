import Link from "next/link"
import Image from "next/image"
import {
  Leaf,
  Users,
  Sprout,
  Sun,
  ClipboardList,
  Carrot,
  Handshake,
  Network,
  ClipboardCheck,
  PackageCheck,
  Download,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CryptoTransitionTownPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm border-b">
        <Link href="#" className="flex items-center justify-center gap-2" prefetch={false}>
          <Sun className="h-6 w-6 text-yellow-500" />
          <span className="text-xl font-bold">The Solara Project</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#framework" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Framework
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#toolkit" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Toolkit
          </Link>
          <Link href="#roadmap" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Roadmap
          </Link>
          <Button>Get the Blueprint</Button>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  A Blueprint for a Solarpunk Future.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  The Solara Project is a showcase and a guide for existing towns to accelerate their transition to a
                  cooperative, self-sustaining, and vibrant local economy.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#roadmap"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Start Your Transition
                </Link>
                <Link
                  href="/blueprint.pdf" // Example link to a downloadable resource
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download the Blueprint
                </Link>
              </div>
            </div>
            <Image
              src="/utopian-solarpunk-city.png"
              width="600"
              height="600"
              alt="A vibrant solarpunk city showcasing community and technology in harmony with nature."
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </section>

        <section id="framework" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">The Solarpunk Framework</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Core Principles for Transition</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  This framework provides the foundational pillars for any community aiming to build local resilience
                  and self-sufficiency.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              <div className="grid gap-1 text-center">
                <Sprout className="h-10 w-10 mx-auto text-green-500" />
                <h3 className="text-lg font-bold">Reclaim Your Food System</h3>
                <p className="text-sm text-muted-foreground">
                  Prioritize local food production through community farms, gardens, and sustainable agricultural
                  practices to ensure food security.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <Users className="h-10 w-10 mx-auto text-blue-500" />
                <h3 className="text-lg font-bold">Empower Local Action</h3>
                <p className="text-sm text-muted-foreground">
                  Foster a culture where initiatives are driven by community members, ensuring solutions are tailored to
                  local needs and passions.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <Handshake className="h-10 w-10 mx-auto text-purple-500" />
                <h3 className="text-lg font-bold">Build a Cooperative Structure</h3>
                <p className="text-sm text-muted-foreground">
                  Implement transparent, community-led governance models for fair decision-making and resource
                  management.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects to Replicate</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  These are proven, high-impact initiatives that any community can adapt and launch to begin their
                  transition journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card>
                <CardHeader>
                  <Carrot className="w-8 h-8 text-orange-500 mb-2" />
                  <CardTitle>Community Farm & Gardens</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Start with shared plots to grow food, build skills, and foster community connection.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Sun className="w-8 h-8 text-yellow-500 mb-2" />
                  <CardTitle>Renewable Energy Co-op</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Pool resources to invest in shared solar or wind infrastructure for community buildings.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 text-purple-500 mb-2" />
                  <CardTitle>Skillshare Workshops</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Organize events where residents teach each other practical skills like farming, repair, and crafts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="toolkit" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">The Digital Toolkit</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tools for Transparent Cooperation</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Leverage simple, effective digital tools to enhance communication, coordination, and transparency in
                  your community's cooperative efforts.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              <div className="grid gap-1 text-center">
                <ClipboardCheck className="h-10 w-10 mx-auto text-teal-500" />
                <h3 className="text-lg font-bold">Contribution Logs</h3>
                <p className="text-sm text-muted-foreground">
                  Use shared documents or simple apps to track volunteer hours and resource contributions, ensuring
                  fairness and recognition.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <PackageCheck className="h-10 w-10 mx-auto text-amber-500" />
                <h3 className="text-lg font-bold">Resource Coordination</h3>
                <p className="text-sm text-muted-foreground">
                  Manage shared tools, spaces, and harvests with scheduling software or shared calendars to maximize
                  their use.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <Network className="h-10 w-10 mx-auto text-sky-500" />
                <h3 className="text-lg font-bold">Knowledge Hubs</h3>
                <p className="text-sm text-muted-foreground">
                  Create a community wiki or shared drive to store practical knowledge, meeting notes, and project plans
                  for all to access.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Town's Transition Roadmap</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A step-by-step guide to initiating and structuring a cooperative transition in your own community.
                </p>
              </div>
              <div className="mx-auto grid max-w-4xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">1. Form a Core Group</h3>
                  <p className="text-sm text-muted-foreground">
                    Gather a small, dedicated team of passionate individuals to champion the transition process.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <ClipboardList className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">2. Create Working Groups</h3>
                  <p className="text-sm text-muted-foreground">
                    Establish focused groups for key areas like food, energy, and education to drive specific actions.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">3. Launch a Pilot Project</h3>
                  <p className="text-sm text-muted-foreground">
                    Start with a visible, high-impact project like a community garden to build momentum and engagement.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">4. Grow & Iterate</h3>
                  <p className="text-sm text-muted-foreground">
                    Host regular community assemblies to share progress, gather feedback, and plan future initiatives
                    together.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/blueprint.pdf"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <Download className="mr-2 h-5 w-5" /> Get the Full Blueprint
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2025 The Solara Project. A Blueprint for Localized Futures.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Open Source License
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

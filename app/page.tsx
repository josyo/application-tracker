import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";
import TabsWithImage from "@/components/ui/tabs-with-image";

export default function Home() {
  return (
    // Removed min-h-screen from here so it doesn't clash with the layout body
    <div className="w-full bg-white"> 
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full px-4 py-20 md:py-32 flex justify-center">
          {/* This wrapper forces total horizontal centering */}
          <div className="w-full max-w-4xl text-center flex flex-col items-center mx-auto">
            <h1 className="text-black mb-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight w-full text-center">
              Welcome to CareerForge
            </h1>
            <p className="text-muted-foreground mb-10 text-lg sm:text-xl max-w-2xl text-center mx-auto">
              Capture, organize, and manage your job applications with ease.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 w-full mx-auto">
              <Link href="/sign-up" className="flex justify-center w-full sm:w-auto">
                <Button size="lg" className="h-12 px-8 font-medium w-auto justify-center">
                  Start for free<ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground text-center w-full">
                Free for life, No credit card required
              </p>
            </div>
          </div>
        </section>

        {/* Tabs with Images Section */}
        <section className="w-full flex justify-center">
          <TabsWithImage />
        </section>

        {/* Features section */}
        <section className="border-t bg-white py-24 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 mx-auto">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">Organize Your Job Applications</h3>
                <p className="text-muted-foreground">
                  Create custom boards and columns to track your job applications at every stage of the process. Stay organized and never miss a deadline.
                </p>
              </div>
              
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">Track Your Job Search Progress</h3>
                <p className="text-muted-foreground">
                  Monitor your job search performance with visual kanban boards and insightful analytics. Identify trends, optimize your strategy, and increase your chances of landing your dream job.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">Get Stay Organized</h3>
                <p className="text-muted-foreground">
                  Never miss an important deadline or follow-up again. Set reminders, add notes, and keep all your job application information in one place for easy access and organization.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
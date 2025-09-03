"use client";
import HomePage from "@/components/home";
import About from "@/components/about";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
    <HomePage />
    <About />
    <Projects />
    </div>
  )
}

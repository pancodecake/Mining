import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Mining from "@/components/Mining";

export default function Home() {
  return (
    <>
      <Hero />
      <Mining/>
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  )
}

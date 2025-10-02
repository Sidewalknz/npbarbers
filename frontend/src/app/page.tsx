"use client";

import Hero from "../components/Hero";
import Divider from "@/components/Divider";
import Services from "@/components/Services";
import Divider2 from "@/components/Divider2";
import About from "@/components/About";
import Socials from "@/components/Socials";
import BookNow from "@/components/BookNow";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Divider />
      <Services />
      <Divider2 />
      <About />
      <Socials />
      <BookNow />
    </main>
  );
}

// page.js
"use client";

import Header from "./components/layout/header";
import FirstSection from "./components/layout/firstSection";
import SecondSection from "./components/layout/secondSection";
import ThirdSection from "./components/layout/thirdSection";
import FourthSection from "./components/layout/fourthSection";
import FifthSection from "./components/layout/fifthSection";
import SixthSection from "./components/layout/sixthSection";
import FadeInSection from "./components/layout/fadeInSection";
import dynamic from "next/dynamic";

// Dynamically import Footer with SSR disabled
const Footer = dynamic(() => import("./components/layout/footer"), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <FadeInSection><FirstSection /></FadeInSection>
      <FadeInSection><SecondSection /></FadeInSection>
      <FadeInSection><ThirdSection /></FadeInSection>
      <FadeInSection><FourthSection /></FadeInSection>
      <FadeInSection><FifthSection /></FadeInSection>
      <FadeInSection><SixthSection /></FadeInSection>
      
      {/* Render Footer only on the client */}
      <Footer />
    </>
  );
}

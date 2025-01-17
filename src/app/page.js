"use client";

import Header from "./components/layout/header";
import FirstSection from "./components/layout/firstSection";
import SecondSection from "./components/layout/secondSection";
import ThirdSection from "./components/layout/thirdSection";
import FourthSection from "./components/layout/fourthSection";
import FifthSection from "./components/layout/fifthSection";
import SixthSection from "./components/layout/sixthSection";
import Footer from "./components/layout/footer";
import FadeInSection from "./components/layout/fadeInSection";

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
      <Footer />
    </>
  );
}

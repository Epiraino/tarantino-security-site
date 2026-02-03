import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesPreview from "@/components/sections/ServicesPreview";
import HowItWorks from "@/components/sections/HowItWorks";
import ServiceArea from "@/components/sections/ServiceArea";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <HowItWorks />
      <ServiceArea />
      <Testimonials />
      <FinalCTA />
    </Layout>
  );
};

export default Index;

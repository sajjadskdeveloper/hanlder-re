import Hero from '../components/Hero';
// import PropertiesSection from '../components/PropertiesSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PortfolioSection />
      <AboutSection />
      {/* <PropertiesSection /> */}
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

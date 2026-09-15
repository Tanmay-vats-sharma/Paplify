import LandingNavbar from '../components/landing/LandingNavbar'
import HeroSection from '../components/landing/HeroSection'
import WorkflowSection from '../components/landing/WorkflowSection'
import FeaturesSection from '../components/landing/FeaturesSection'
import TemplatesSection from '../components/landing/TemplatesSection'
import DocumentTypesSection from '../components/landing/DocumentTypesSection'
import FAQSection from '../components/landing/FAQSection'
import CTASection from '../components/landing/CTASection'
import LandingFooter from '../components/landing/LandingFooter'

function Landing() {
  return (
    <div className="landing-page">
      <LandingNavbar />

      <main>
        <HeroSection />
        <WorkflowSection />
        <FeaturesSection />
        <TemplatesSection />
        <DocumentTypesSection />
        <FAQSection />
        <CTASection />
      </main>

      <LandingFooter />
    </div>
  )
}

export default Landing
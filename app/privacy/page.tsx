import type { Metadata } from "next"
import LegalPage from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy | Custom Wear Industry",
  description: "How Custom Wear Industry collects, uses, and protects customer information.",
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="We respect the trust behind every inquiry, order, and collaboration. This policy explains what information we collect, why we use it, and the safeguards we apply."
      sections={[
        { heading: "Scope and data controller", body: "This policy applies to information processed by Custom Wear Industry LLC through this website, our inquiries, and our customer relationships. Custom Wear Industry LLC is the data controller for the personal information described here." },
        { heading: "Information we collect", body: "We may collect your name, email address, phone number, company details, project requirements, and information submitted through our forms. We also receive basic technical information such as browser type and pages visited." },
        { heading: "How we use information", body: "We use submitted information to respond to inquiries, prepare manufacturing discussions, provide requested services, improve the website, prevent abuse, and meet legal obligations. We do not sell customer information." },
        { heading: "Security and retention", body: "We use reasonable administrative, technical, and organizational safeguards to protect information from unauthorized access, alteration, or disclosure. We retain information only as long as needed for the purpose collected, an active business relationship, or applicable legal requirements." },
        { heading: "Your choices", body: "You may request access to, correction of, or deletion of your personal information by contacting info@customwearindustry.com. You may also ask us to stop using your information for a particular purpose, subject to legal and operational requirements." },
        { heading: "Business contact", body: "Custom Wear Industry LLC\n1309 COFFEEN AVE STE 20511, SHERIDAN, WY, 82801-5777-997, USA\nPhone: +1 3075007462" },
      ]}
    />
  )
}

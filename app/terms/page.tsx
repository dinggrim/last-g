import type { Metadata } from "next"
import LegalPage from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms and Conditions | Custom Wear Industry",
  description: "Terms governing use of the Custom Wear Industry website and services.",
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      intro="These terms govern your use of the Custom Wear Industry website and your interactions with our manufacturing services."
      sections={[
        { heading: "Website use", body: "Use this website lawfully and do not attempt to disrupt, probe, scrape, or gain unauthorized access to any part of the service." },
        { heading: "User responsibilities", body: "You are responsible for the accuracy of information you submit and for reviewing specifications, quotes, approvals, and production details before authorizing work." },
        { heading: "Intellectual property", body: "Website content, branding, designs, text, graphics, and other materials belong to Custom Wear Industry LLC or their respective owners and may not be copied or reused without permission." },
        { heading: "Limitation of liability", body: "To the fullest extent permitted by law, Custom Wear Industry LLC is not liable for indirect, incidental, special, or consequential losses arising from website use or delays beyond our reasonable control." },
        { heading: "Business contact", body: "Custom Wear Industry LLC\n1309 COFFEEN AVE STE 20511, SHERIDAN, WY, 82801-5777-997, USA\nPhone: +1 3075007462" },
      ]}
    />
  )
}

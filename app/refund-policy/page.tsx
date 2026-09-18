import type { Metadata } from "next"
import LegalPage from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Return and Refund Policy | Custom Wear Industry",
  description: "Return eligibility, timeframes, exclusions, and refund processing for Custom Wear Industry orders.",
}

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Return and Refund Policy"
      intro="We want every approved order to meet the agreed specifications. This policy explains when returns or refunds may be available and how to request support."
      sections={[
        { heading: "Policy summary", body: "This policy applies to products purchased directly from Custom Wear Industry LLC. Because many products are custom-made or produced to approved specifications, review all order details before production begins. This policy does not limit non-waivable rights provided by applicable law." },
        { heading: "Eligibility and 30-day return window", body: "Contact us within 30 calendar days after delivery. Eligible items must be unused, unwashed, unaltered, in original condition, and accompanied by the order number and proof of purchase. Report damaged, defective, incomplete, or incorrect items as soon as possible with photographs of the packaging and item." },
        { heading: "Non-returnable items", body: "Custom, personalized, embroidered, printed, altered, made-to-measure, or made-to-order products are not returnable for change of mind, sizing preference, or color preference after approval. Samples, clearance items, worn or washed items, items without original packaging, and items damaged through misuse are also non-returnable, except where defective or incorrectly shipped." },
        { heading: "How to initiate a return", body: "1. Email info@customwearindustry.com within the applicable window with your name, order number, contact information, reason, and photos.\n2. Wait for written authorization and instructions before shipping anything.\n3. Package the approved item securely using the carrier and address provided.\n4. Send us the tracking number. Unauthorized returns may be delayed or rejected." },
        { heading: "Inspection, shipping, and exchanges", body: "We inspect approved returns after receipt. If the return results from our error or a verified defect, we will provide return-shipping instructions and may reimburse reasonable approved shipping costs. For other approved returns, return shipping is the customer’s responsibility. Exchanges depend on availability." },
        { heading: "Refund processing timeline", body: "We will notify you after inspection whether the request is approved. Approved refunds are sent to the original payment method within 5–10 business days after approval. Your bank or card issuer may require additional processing time." },
        { heading: "Business contact", body: "Custom Wear Industry LLC\n1309 COFFEEN AVE STE 20511, SHERIDAN, WY, 82801-5777-997, USA\nPhone: +1 3075007462\nEmail: info@customwearindustry.com" },
      ]}
    />
  )
}

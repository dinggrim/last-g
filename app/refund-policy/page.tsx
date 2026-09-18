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
        { heading: "Eligibility and return window", body: "Contact us within 14 calendar days of delivery if an item arrives damaged, defective, or materially different from the approved order. Custom or made-to-order goods must be reported promptly with photographs and order details." },
        { heading: "Non-returnable items", body: "Personalized, altered, worn, washed, or otherwise used items are not eligible for return unless they arrived defective or incorrect. Samples, clearance items, and items damaged after delivery are also non-returnable." },
        { heading: "How to request a return", body: "1. Email info@customwearindustry.com with your order number, name, contact details, reason for the request, and clear photographs.\n2. Wait for written approval and return instructions.\n3. Package approved items securely and use the instructed shipping method.\n4. Share tracking information when the shipment is dispatched." },
        { heading: "Refund processing", body: "After inspection, we will notify you whether the request is approved. Approved refunds are issued to the original payment method within 5–10 business days after approval. Shipping charges are refundable only when the return is caused by our error or a verified defect." },
        { heading: "Business contact", body: "Custom Wear Industry LLC\n1309 COFFEEN AVE STE 20511, SHERIDAN, WY, 82801-5777-997, USA\nPhone: +1 3075007462" },
      ]}
    />
  )
}

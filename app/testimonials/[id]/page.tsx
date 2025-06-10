import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import TestimonialDetails from "@/components/testimonial-details"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const testimonials = {
  "1": {
    name: "Emily Johnson",
    country: "USA",
    brand: "FitLife Athletics",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    shortReview: "Outstanding quality and service. Our athletic wear line exceeded expectations.",
    fullTestimonial:
      "Working with Custom Wear Industry has been an absolute game-changer for our brand. Their attention to detail, quality control, and ability to meet tight deadlines is unmatched. Our athletic wear line not only met but exceeded our expectations. The team was professional throughout the entire process, from initial sampling to final delivery. I highly recommend them to any brand looking for reliable manufacturing partners.",
    projectDetails:
      "Athletic wear line including moisture-wicking t-shirts, compression leggings, and performance hoodies for a fitness startup.",
    orderSize: "500 pieces",
    timeline: "Completed in 18 days",
  },
  "2": {
    name: "James Mitchell",
    country: "UK",
    brand: "Urban Edge Clothing",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    shortReview: "Perfect partner for our streetwear brand. Quality and creativity combined.",
    fullTestimonial:
      "Custom Wear Industry understood our vision for urban streetwear perfectly. They helped us bring our designs to life with exceptional quality fabrics and precise manufacturing. The communication was excellent throughout the process, and they were flexible with our design changes. Our customers love the final products, and we've seen a significant increase in repeat orders since switching to Custom Wear Industry.",
    projectDetails:
      "Streetwear collection including oversized hoodies, graphic tees, and joggers with custom prints and embroidery.",
    orderSize: "750 pieces",
    timeline: "Completed in 22 days",
  },
  "3": {
    name: "Sarah Chen",
    country: "Canada",
    brand: "EcoWear Sustainable",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    shortReview: "Committed to sustainability and quality. Exactly what our eco-brand needed.",
    fullTestimonial:
      "As a sustainable fashion brand, finding a manufacturer that shares our values was crucial. Custom Wear Industry not only provided eco-friendly fabric options but also implemented sustainable practices throughout the production process. The quality of their organic cotton and recycled polyester garments is outstanding. They've become an integral part of our supply chain.",
    projectDetails:
      "Sustainable clothing line featuring organic cotton t-shirts, recycled polyester activewear, and eco-friendly packaging.",
    orderSize: "300 pieces",
    timeline: "Completed in 20 days",
  },
  "4": {
    name: "Michael Rodriguez",
    country: "Spain",
    brand: "Corporate Solutions Ltd",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5,
    shortReview: "Professional uniforms that represent our brand perfectly. Excellent service.",
    fullTestimonial:
      "We needed high-quality corporate uniforms for our hospitality chain, and Custom Wear Industry delivered beyond our expectations. The polo shirts and formal wear they produced maintain their shape and color even after multiple washes. Their attention to detail in embroidery and branding was impeccable. Our staff looks professional and feels comfortable in their uniforms.",
    projectDetails:
      "Corporate uniform collection including polo shirts, dress shirts, and formal trousers for a hospitality chain.",
    orderSize: "1200 pieces",
    timeline: "Completed in 25 days",
  },
  "5": {
    name: "Lisa Thompson",
    country: "Australia",
    brand: "ActiveLife Sports",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 5,
    shortReview: "Reliable partner for our sports team uniforms. Quality that performs.",
    fullTestimonial:
      "Custom Wear Industry has been manufacturing our sports team uniforms for over two years now. The quality is consistently excellent, and they always meet our tight deadlines for tournament seasons. The moisture-wicking fabrics perform exceptionally well during intense games, and the custom team branding looks professional. Our athletes love wearing these uniforms.",
    projectDetails:
      "Sports team uniforms including jerseys, shorts, and warm-up suits with custom team logos and player numbers.",
    orderSize: "400 pieces",
    timeline: "Completed in 16 days",
  },
  "6": {
    name: "David Kim",
    country: "South Korea",
    brand: "TechStart Apparel",
    photo: "https://randomuser.me/api/portraits/men/6.jpg",
    rating: 5,
    shortReview: "Perfect for startup needs. Flexible minimums and great quality.",
    fullTestimonial:
      "As a tech startup launching our first apparel line, we needed a manufacturer who could work with smaller quantities without compromising on quality. Custom Wear Industry was perfect for our needs. They offered flexible minimum order quantities and provided excellent guidance throughout the design process. The final products exceeded our expectations and helped establish our brand in the market.",
    projectDetails:
      "Tech startup apparel line including branded hoodies, t-shirts, and accessories for company merchandise and retail.",
    orderSize: "200 pieces",
    timeline: "Completed in 14 days",
  },
}

type TestimonialPageProps = {
  params: { id: string }
}

export async function generateMetadata({ params }: TestimonialPageProps): Promise<Metadata> {
  const testimonial = testimonials[params.id as keyof typeof testimonials]

  if (!testimonial) {
    return {
      title: "Testimonial Not Found | Custom Wear Industry",
    }
  }

  return {
    title: `${testimonial.name} Review | Client Testimonials | Custom Wear Industry`,
    description: `Read ${testimonial.name}'s detailed review of our custom clothing manufacturing services for ${testimonial.brand}.`,
  }
}

export default function TestimonialPage({ params }: TestimonialPageProps) {
  const testimonial = testimonials[params.id as keyof typeof testimonials]

  if (!testimonial) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navbar />
      <div className="pt-20">
        <TestimonialDetails testimonial={testimonial} />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

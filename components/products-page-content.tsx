"use client"
import React, { useState } from "react"
import Image from "next/image"
import { Card } from "./ui/card"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle
} from "./ui/dialog"
import { useRouter } from "next/navigation"

const products = [
  {
    codename: "S-19: Shadowfiber Shell",
    simpleName: "Tactical Tech Hoodie",
    tagline: "Street-level stealth wear",
    tier: "ELITE OPS MODULE",
    status: "🔒 RESTRICTED ACCESS",
    image: "/images/products/1.png", // replace with actual filename if needed
    description: "Advanced stealth shell for urban operations. Adaptive fiber blend, signal-dampening, and zero-trace seams. Designed for field agents requiring maximum discretion.",
  },
  {
    codename: "X-88: Velocity Frame",
    simpleName: "Operator Tracksuit",
    tagline: "Training & recon operations",
    tier: "ELITE OPS MODULE",
    status: "🔒 RESTRICTED ACCESS",
    image: "/images/products/2.png",
    description: "Engineered for speed and agility. Lightweight exo-fabric, kinetic support zones, and rapid-cool mesh. Trusted by recon units and advanced trainers.",
  },
  {
    codename: "C-34: Core-Lock Skin",
    simpleName: "Compression Layer Top",
    tagline: "High-mobility performance layer",
    tier: "ELITE OPS MODULE",
    status: "🔒 RESTRICTED ACCESS",
    image: "/images/products/3.png",
    description: "Compression-mapped for muscle support and movement. Core-lock technology for stability under pressure. Used in high-mobility ops.",
  },
  {
    codename: "Z-41: Civilian Phasecoat",
    simpleName: "Urban Cloak Jacket",
    tagline: "Outerwear with civilian cover + military edge",
    tier: "ELITE OPS MODULE",
    status: "🔒 RESTRICTED ACCESS",
    image: "/images/products/4.png",
    description: "Blends into civilian environments while providing tactical protection. Phase-shift lining and covert utility pockets.",
  },
  {
    codename: "U-29: Deep Cache Trousers",
    simpleName: "Modular Utility Pants",
    tagline: "Functional loadout bottoms with sleek finish",
    tier: "ELITE OPS MODULE",
    status: "🔒 RESTRICTED ACCESS",
    image: "/images/products/5.png",
    description: "Multi-compartment trousers for secure carry. Reinforced seams, stealth zippers, and adaptive fit for all missions.",
  },
  {
    codename: "G-77: Nullfield Top",
    simpleName: "Ghost-Layer Overshirt",
    tagline: "Disappearing silhouette / social camouflage",
    tier: "ELITE OPS MODULE",
    status: "🔒 RESTRICTED ACCESS",
    image: "/images/products/6.png",
    description: "Nullfield tech disrupts visual and digital tracking. Social camouflage patterning for blending in any crowd.",
  },
  {
    codename: "E-12: DailyDrip Cotton Tee",
    simpleName: "Basic Tactical Tee",
    tagline: "Everyday softness, undetected comfort",
    tier: "ESSENTIAL SHADOWS MODULE",
    status: "🔒 RESTRICTED ACCESS",
    image: "/images/products/7.png",
    description: "Ultra-soft, breathable cotton blend. Designed for all-day wear with zero profile. Invisible seams and comfort mapping.",
  },
  {
    codename: "R-09: CoreCloud Everyday Hoodie",
    simpleName: "Casual Shadow Hoodie",
    tagline: "Weightless warmth for low-profile moves",
    tier: "ESSENTIAL SHADOWS MODULE",
    status: "🔒 RESTRICTED ACCESS",
    image: "/images/products/8.png",
    description: "Cloud-fleece insulation, anti-static lining, and deep concealment pockets. For downtime or covert movement.",
  },
  {
    codename: "L-55: StreetEase Lounge Joggers",
    simpleName: "Lounge Tech Joggers",
    tagline: "Tactical downtime wear",
    tier: "ESSENTIAL SHADOWS MODULE",
    status: "🔒 RESTRICTED ACCESS",
    image: "/images/products/9.png",
    description: "Relaxed fit, tactical pocketing, and motion-flex zones. Engineered for recovery and readiness.",
  },
  {
    codename: "C-22: ModTone Casual Polo",
    simpleName: "Covert Casual Polo",
    tagline: "Undercover polish meets civilian tone",
    tier: "ESSENTIAL SHADOWS MODULE",
    status: "🔒 RESTRICTED ACCESS",
    image: "/images/products/10.png",
    description: "Polished look, covert comfort. Moisture-wicking, anti-wrinkle, and signal-dampening thread.",
  },
  {
    codename: "V-10: FlexZone Athletic Shorts",
    simpleName: "Tactical Active Shorts",
    tagline: "Fast exits. Clean form. Flex built-in.",
    tier: "ESSENTIAL SHADOWS MODULE",
    status: "🔒 RESTRICTED ACCESS",
    image: "/images/products/11.png",
    description: "Adaptive stretch, secure fit, and quick-dry mesh. For rapid movement and low-drag performance.",
  },
  {
    codename: "T-66: UrbanShell Track Jacket",
    simpleName: "UrbanShell Track Jacket",
    tagline: "Surface-ready. Ghost-light structure",
    tier: "ESSENTIAL SHADOWS MODULE",
    status: "🔒 RESTRICTED ACCESS",
    image: "/images/products/12.png",
    description: "Lightweight, wind-resistant, and ghost-light reflective. Urban-ready for all conditions.",
  },
]

export default function ProductsPageContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const router = useRouter();
  return (
    <section className="section-padding bg-black">
      <div className="container-responsive">
        <div className="text-center section-margin">
          <h2 className="text-section-title font-bold mb-4 sm:mb-6">
            INTEL MODULES
          </h2>
          <p className="text-body md:text-lg text-gray-300 max-w-2xl mx-auto mb-2">Classified Wearable Systems Archive</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {products.map((product, idx) => (
            <Dialog key={product.codename} open={openIndex === idx} onOpenChange={v => setOpenIndex(v ? idx : null)}>
              <DialogTrigger asChild>
                <Card className="group overflow-hidden bg-black/70 border-[#C0C0C0]/30 hover:border-[#DC2626] transition-all duration-500 card-hover cursor-pointer">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.codename}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ border: '2px solid red', background: '#222' }}
                      onError={e => { e.currentTarget.src = '/images/products/fallback.png'; }}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-base font-bold mb-1">{product.codename}</h3>
                      <p className="text-xs text-gray-300 mb-1">{product.simpleName}</p>
                      <span className="text-xs text-gray-400 block mb-1">{product.tagline}</span>
                      <span className="text-xs font-semibold text-[#DC2626] bg-[#DC2626]/10 px-2 py-1 rounded mr-2">{product.tier}</span>
                      <span className="text-xs text-red-400 bg-red-900/30 px-2 py-1 rounded">{product.status}</span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col items-start">
                    <button className="mt-2 px-4 py-2 bg-[#DC2626] text-white rounded font-semibold text-xs tracking-wider hover:bg-[#b91c1c] transition">REQUEST ACCESS</button>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl w-full bg-black border-[#DC2626] overflow-y-auto max-h-[90vh] p-0">
                <DialogTitle className="sr-only">{product.codename}</DialogTitle>
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-1/2 aspect-square bg-black">
                    <Image src={product.image} alt={product.codename} fill className="object-cover rounded-t md:rounded-l md:rounded-tr-none" />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{product.codename}</h3>
                      <p className="text-lg text-gray-300 mb-2">{product.simpleName}</p>
                      <div className="mb-2">
                        <span className="text-xs font-semibold text-[#DC2626] bg-[#DC2626]/10 px-2 py-1 rounded mr-2">{product.tier}</span>
                        <span className="text-xs text-red-400 bg-red-900/30 px-2 py-1 rounded">{product.status}</span>
                      </div>
                      <p className="text-gray-400 mb-4">{product.tagline}</p>
                      <p className="text-gray-400 mb-4">{product.description}</p>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                      <button
                        className="w-full px-4 py-2 bg-[#DC2626] text-white rounded font-bold text-base tracking-wider hover:bg-[#b91c1c] transition"
                        onClick={() => {
                          setOpenIndex(null);
                          router.push("/elite-application");
                        }}
                      >
                        DEPLOY REQUEST
                      </button>
                      <DialogClose asChild>
                        <button className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded font-semibold text-sm tracking-wider hover:bg-gray-700 transition">RETURN TO MODULE INDEX</button>
                      </DialogClose>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}

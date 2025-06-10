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

const portfolioItems = [
  {
    codename: "Drop-7: Civilian Shadowwear",
    image: "/images/portfolio/Drop-7 Civilian Shadowwear.jpg",
    modalCopy: `Conceived for agents navigating civilian zones under full observational threat. The Shadowwear series is equipped with photonic dampeners, motion-mapped seams, and low-echo fabrics to minimize trace feedback in public spaces.  \nBuilt for everyday infiltration with maximum street silence.`,
    tags: "⚙️ Urban Camouflage | Low Light Absorption | Civilian Integration",
    fileHeader: "[DROP-7 FILE ACCESS GRANTED]"
  },
  {
    codename: "Unit-23: Corporate Infiltration Suit",
    image: "/images/portfolio/Unit-23 Corporate Infiltration Suit.jpg",
    modalCopy: `Originally commissioned for high-rise corporate extractions. Constructed from carbon-weave threads with IR masking and authority-deflection tapering. Feels like a tailored suit. Functions like armor.  \nExecutive-level evasion on demand.`,
    tags: "⚙️ Executive Cloaking | Threat-Level Compression | Floor-49 Access Certified",
    fileHeader: "[UNIT-23 DOSSIER OPENED]"
  },
  {
    codename: "Prototype-ZX: Velocity Layer",
    image: "/images/portfolio/Prototype-ZX Velocity Layer.jpg",
    modalCopy: `This unapproved experimental sprintwear was field-tested in restricted metro tunnels. Equipped with bio-feedback sleeves, power-circuit compression, and thermal dispersal veins.  \nDesigned for operatives who never stop running—and never get caught.`,
    tags: "⚙️ Biofeedback Tech | Speed Class A | Signal-Jammer Filament",
    fileHeader: "[PROTOTYPE ZX — STATUS: UNSTABLE]"
  },
  {
    codename: "Echo-Therm: Deep Ops Tracksuit",
    image: "/images/portfolio/Echo-Therm Deep Ops Tracksuit.jpg",
    modalCopy: `A deep operations suit for thermal fluctuation zones. Adaptive weave modulates body heat to mask infrared signatures. Balanced for endurance in concrete corridors, wet zones, and sewer channel networks.  \nDesigned with zero-sound joints.`,
    tags: "⚙️ IR Diffusion Layer | Waterborne Movement | Long-Haul Readiness",
    fileHeader: "[ECHO-THERM ACCESS FILE 17A-B]"
  },
  {
    codename: "Classified Threadline: MedOps Revision 4",
    image: "/images/portfolio/Classified Threadline MedOps Revision 4.jpg",
    modalCopy: `Fourth-gen MedOps unitwear for trauma response in hostile sectors. Treated with bio-seal coating and nerve-channel expansion zones. Clean seams. Zero drag.  \nManufactured under lockdown protocols for hostile recovery conditions.`,
    tags: "⚙️ Sterile Weave | Multi-Role Capacity | Restricted Distribution",
    fileHeader: "[CLASSIFIED FILE: MEDOPS R4]"
  },
  {
    codename: "Drop-X: Street Intelligence Uniform",
    image: "/images/portfolio/Drop-X Street Intelligence Uniform.jpg",
    modalCopy: `Untraceable opswear for night-based fieldwork across layered city zones. A faceless presence designed for silent networking, message drops, and neural packet delivery.  \nThreads react to ambient signals—shifting tone under certain frequencies.`,
    tags: "⚙️ Signal-Aware Fabric | Stealth Profile Sync | Zone-6 Compliant",
    fileHeader: "[DROP-X DECODED — LIMITED ACCESS]"
  },
]

export default function PortfolioPageContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <section className="section-padding bg-black">
      <div className="container-responsive">
        <div className="text-center section-margin">
          <h2 className="text-section-title font-bold mb-4 sm:mb-6">
            The <span className="text-[#FF3C3C]">Classified</span> Portfolio
          </h2>
          <p className="text-body md:text-lg text-gray-300 max-w-2xl mx-auto mb-2">Six covert projects. Zero public record.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {portfolioItems.map((item, idx) => (
            <Dialog key={item.codename} open={openIndex === idx} onOpenChange={v => setOpenIndex(v ? idx : null)}>
              <DialogTrigger asChild>
                <Card className="group overflow-hidden bg-black/70 border-[#FF3C3C]/20 hover:border-[#FF3C3C] transition-all duration-500 card-hover cursor-pointer">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.codename}
                      fill
                      className="object-cover group-hover:blur-sm group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-[#FF3C3C] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-base font-mono font-bold tracking-widest drop-shadow-md">{item.codename}</h3>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl w-full bg-black/95 border-[#FF3C3C] shadow-2xl backdrop-blur-md overflow-y-auto max-h-[90vh] p-0 animate-glitchy-modal">
                <DialogTitle className="font-mono text-[#FF3C3C] text-xl px-6 pt-6 pb-2 tracking-widest border-b border-[#FF3C3C]/30">{item.codename}</DialogTitle>
                <div className="p-6 flex flex-col gap-4 font-mono text-[#FF3C3C]">
                  <div className="text-xs mb-2 tracking-widest opacity-80">{item.fileHeader}</div>
                  <div className="relative w-full aspect-square bg-black rounded-lg overflow-hidden border border-[#FF3C3C]/30">
                    <Image src={item.image} alt={item.codename} fill className="object-cover rounded-lg" />
                    {/* Optionally animate scanlines or glitchy edges here */}
                  </div>
                  <div className="text-base text-[#e0e0e0] font-mono whitespace-pre-line leading-relaxed mt-2">{item.modalCopy}</div>
                  <div className="text-xs text-[#FF3C3C] font-mono mt-2">{item.tags}</div>
                </div>
                <div className="flex flex-col gap-2 px-6 pb-6 mt-2">
                  <DialogClose asChild>
                    <button className="w-full px-4 py-2 bg-[#FF3C3C]/10 text-[#FF3C3C] rounded font-bold text-base tracking-wider border border-[#FF3C3C]/40 hover:bg-[#FF3C3C]/20 transition">🔐 Collapse File</button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
      <style>{`
        .animate-glitchy-modal {
          animation: glitchy-modal 0.5s cubic-bezier(.4,2.2,.6,.9);
          box-shadow: 0 0 24px 0 #FF3C3C44, 0 0 2px 1px #FF3C3C;
        }
        @keyframes glitchy-modal {
          0% { filter: blur(8px) brightness(0.5); opacity: 0; box-shadow: 0 0 48px 0 #FF3C3C88; }
          60% { filter: blur(2px) brightness(1.2); opacity: 1; box-shadow: 0 0 32px 0 #FF3C3C66; }
          80% { filter: blur(0.5px) brightness(1); box-shadow: 0 0 16px 0 #FF3C3C44; }
          100% { filter: none; box-shadow: 0 0 8px 0 #FF3C3C22; }
        }
        /* Custom scrollbar accent for modal */
        .max-w-2xl::-webkit-scrollbar-thumb {
          background: #FF3C3C;
        }
        .max-w-2xl::-webkit-scrollbar-track {
          background: #222;
        }
      `}</style>
    </section>
  )
}

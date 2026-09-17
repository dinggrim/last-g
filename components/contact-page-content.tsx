"use client"

import { FormEvent, useState } from "react"
import { Mail, MessageCircle, Phone, MapPin, CheckCircle2 } from "lucide-react"

const businessAddress = "1309 COFFEEN AVE STE 20511, SHERIDAN, WY, 82801-5777-997, USA"
const phoneNumber = "+1 3075007462"

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = String(form.get("subject") || "Website inquiry")
    const body = `Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`
    window.location.href = `mailto:info@customwearindustry.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 py-32">
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-12 tracking-tight">GET IN <span className="text-[#DC2626]">TOUCH</span></h1>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">Ready to start your custom clothing project? Contact us today.</p>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[1fr_0.8fr]">
            <form onSubmit={handleSubmit} className="bg-black/70 border-2 border-[#C0C0C0]/30 p-8 md:p-12 industrial-shadow">
              <h2 className="text-3xl font-bold text-white mb-3">Send a Brief</h2>
              <p className="text-gray-400 mb-8">Tell us what you are building. Our team responds within 24 hours.</p>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="text-sm text-gray-300">Name<input required name="name" type="text" className="mt-2 w-full bg-gray-950 border border-gray-700 p-3 text-white focus:border-[#DC2626] outline-none" /></label>
                <label className="text-sm text-gray-300">Email<input required name="email" type="email" className="mt-2 w-full bg-gray-950 border border-gray-700 p-3 text-white focus:border-[#DC2626] outline-none" /></label>
              </div>
              <label className="block text-sm text-gray-300 mt-6">Subject<input required name="subject" type="text" className="mt-2 w-full bg-gray-950 border border-gray-700 p-3 text-white focus:border-[#DC2626] outline-none" /></label>
              <label className="block text-sm text-gray-300 mt-6">Message<textarea required name="message" rows={6} className="mt-2 w-full bg-gray-950 border border-gray-700 p-3 text-white focus:border-[#DC2626] outline-none resize-y" /></label>
              <button type="submit" className="mt-6 bg-[#DC2626] px-6 py-3 text-white font-bold tracking-wider hover:bg-[#b91c1c] transition">SEND MESSAGE</button>
              {submitted && <p role="status" className="mt-4 flex items-center gap-2 text-green-400"><CheckCircle2 className="size-4" /> Your email client is ready to send the brief.</p>}
            </form>

            <div className="flex flex-col gap-6">
              <a href="mailto:info@customwearindustry.com" className="group bg-black/70 border-2 border-[#C0C0C0]/30 p-8 hover:border-[#DC2626] transition-all industrial-shadow"><Mail className="size-10 text-[#DC2626] mb-4" /><h3 className="text-xl font-bold text-white">Email</h3><p className="text-gray-300 mt-2">info@customwearindustry.com</p></a>
              <a href={`tel:${phoneNumber.replace(/\s/g, "")}`} className="group bg-black/70 border-2 border-[#C0C0C0]/30 p-8 hover:border-[#DC2626] transition-all industrial-shadow"><Phone className="size-10 text-[#DC2626] mb-4" /><h3 className="text-xl font-bold text-white">Phone</h3><p className="text-gray-300 mt-2">{phoneNumber}</p></a>
              <div className="bg-black/70 border-2 border-[#C0C0C0]/30 p-8 industrial-shadow"><MapPin className="size-10 text-[#DC2626] mb-4" /><h3 className="text-xl font-bold text-white">Registered office</h3><p className="text-gray-300 mt-2">{businessAddress}</p><a href={`tel:${phoneNumber.replace(/\s/g, "")}`} className="mt-4 inline-block text-white hover:text-[#DC2626]">{phoneNumber}</a></div>
              <a href="https://wa.me/13075007462" target="_blank" rel="noopener noreferrer" className="group bg-black/70 border-2 border-[#C0C0C0]/30 p-8 hover:border-[#DC2626] transition-all industrial-shadow"><MessageCircle className="size-10 text-[#DC2626] mb-4" /><h3 className="text-xl font-bold text-white">WhatsApp</h3><p className="text-gray-300 mt-2">Message our team directly</p></a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export { businessAddress, phoneNumber }

// Contact form submissions use the visitor's mail client so no message content is stored by the website.
// A server-side inbox integration can be added later without changing the form fields.

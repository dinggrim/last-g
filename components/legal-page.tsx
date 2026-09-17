import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: { heading: string; body: string }[] }) {
  return <div className="min-h-screen bg-black text-white"><Navbar /><main className="pt-32"><article className="max-w-4xl mx-auto px-6 py-20"><p className="text-[#DC2626] font-mono tracking-[0.25em] mb-5">CUSTOM WEAR INDUSTRY</p><h1 className="text-5xl md:text-7xl font-black mb-8">{title}</h1><p className="text-xl text-gray-300 leading-relaxed mb-16">{intro}</p><div className="flex flex-col gap-12">{sections.map((section) => <section key={section.heading}><h2 className="text-2xl font-bold mb-4">{section.heading}</h2><p className="text-gray-400 leading-relaxed whitespace-pre-line">{section.body}</p></section>)}</div></article></main><Footer /></div>
}

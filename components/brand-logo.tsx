export default function BrandLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img src="/logo-cw.png" alt="CW Logo" className="h-14 w-auto sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36 mx-auto" />
    </div>
  )
}

const partners = [
  {
    name: "ICICI Prudential",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ICICI-Fm0r5Y9Zmjl5etdDUtlZCVbwUsmuuF.jpg",
  },
  {
    name: "HDFC Mutual Fund",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HDFC-Mutual-Fund-Hkh2B6kDhco244qSZD1X1RIlf9N5hv.jpg",
  },
  {
    name: "Tata Mutual Fund",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tata%20mutual%20fund_20250115142613_original_image_19-Auk4Vm7urIZ81NPDaa8KhLOIveaQqY.webp",
  },
  {
    name: "Bandhan Mutual Fund",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/125868-bandhan-oJkdAn74oghGc5CZM9dvg9Q0H9Rfte.jpg",
  },
  {
    name: "Motilal Oswal",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2681b4cb25909e89ce65f0fdab750e50-TaK0qMZIy7fWMxMdWbYhehIGAszfj8.webp",
  },
  {
    name: "Axis Mutual Fund",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axis-rCSL8smBMN9wb1zJ0tbO96MmXvyPuc.avif",
  },
  {
    name: "Mirae Asset",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mirae%20aseet-KCBEUkqALJ1d8ueMVDZ0o1iZLTbfxZ.jpg",
  },
  {
    name: "Kotak Mutual Fund",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kotak%20-wi6O8GSnaqZ6NSBoMFzkl6aOs0mUmZ.jpg",
  },
  {
    name: "PPFAS",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PPFAS-JxRkEyADTRsfh6BblFukVVhv84tRwG.png",
  },
  {
    name: "Edelweiss Mutual Fund",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edeilweiss%20-3rbmLhU42sbhBctWxRBA2NCQmP1SO4.png",
  },
]

export function PartnersSection() {
  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-12 sm:mb-16">
          <span className="text-primary">Our Trusted</span>{" "}
          <span className="text-foreground">Mutual Fund Partners</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-lg p-3 sm:p-4 flex items-center justify-center h-16 sm:h-20 transition-transform hover:scale-105 shadow-sm"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="object-contain max-h-10 sm:max-h-12 w-auto"
                style={{ maxWidth: "100%" }}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-foreground/50 mt-10 text-sm">
          And many more trusted fund houses to diversify your portfolio
        </p>
      </div>
    </section>
  )
}

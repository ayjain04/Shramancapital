import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

const team = [
  { 
    name: "CA Sanjay Rathore", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sanjay%20rathore%20phhoto-tOpedd8tnKZxlJgqNWwhhzcNBHGdrE.png"
  },
  { 
    name: "CA Deepali Rathore", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Deepali%20rathore-hpp0grJ4D0KFO0d6HKBqFZ7W2ABoCl.png"
  },
  { 
    name: "CA Aayush Jain", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aayush%20Jain%20photo-vu4xb8mrOVGFU4p42lDjDRsaBQX9Fa.png"
  },
]

export function AboutFooter() {
  return (
    <section id="about" className="bg-primary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* About Us Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-center mb-12 sm:mb-16">
          <span className="text-accent">About Us</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Vision Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6">
              A wealth manager in everyone&apos;s pocket
            </p>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              India is a nation of great savers, not-so-great investors. Only 3% of Indians invest in
              mutual funds today.
            </p>

            <p className="font-bold text-foreground mb-6">We are changing that</p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Shraman Capital aims to empower every Indian with the right investment decisions to
              create long term wealth and achieve their financial freedom.
            </p>

            <p className="text-muted-foreground font-medium mb-8">Our passionate and expert team</p>

            {/* Team */}
            <div className="flex justify-center gap-6 sm:gap-10">
              {team.map((member, index) => (
                <div key={member.name} className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover object-top ${index === 0 ? 'scale-[1.2]' : 'scale-110'}`}
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">
                    {member.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="flex flex-col justify-center gap-10 text-white">
            {/* Email */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-center lg:text-left">EMAIL</h4>
              <a
                href="mailto:shramancapital@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors w-full justify-center lg:w-auto lg:justify-start"
              >
                <Mail className="h-5 w-5" />
                shramancapital@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-center lg:text-left">PHONE</h4>
              <a
                href="tel:+918380997771"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors w-full justify-center lg:w-auto lg:justify-start"
              >
                <Phone className="h-5 w-5" />
                +91 8380997771
              </a>
            </div>

            {/* Address */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-center lg:text-left">ADDRESS</h4>
              <div className="flex items-start gap-3 text-white/80 justify-center lg:justify-start">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <div className="text-center lg:text-left">
                  <p className="font-semibold text-white">Shraman Capital</p>
                  <p>411, Landmark Centre,</p>
                  <p>Opposite ICICI Bank Pune Satara Road,</p>
                  <p>Pune - 411009</p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm font-medium text-white/70">
              <Link href="#" className="hover:text-white transition-colors">
                PRIVACY
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                TERMS
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                CONTACT
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          &copy; {new Date().getFullYear()} Shraman Capital. All rights reserved.
        </div>
      </div>
    </section>
  )
}

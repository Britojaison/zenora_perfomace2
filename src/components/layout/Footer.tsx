import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* RERA Bar */}
      <div className="bg-[#f0ebe3] py-8 text-center px-6 border-t border-cream/70">
        <p className="font-display italic font-light text-forest text-xl mb-1">RERA NUMBER</p>
        <p className="font-sans text-earth text-sm font-medium">TNRERA/11/BLG/0013/2026</p>
        <a
          href="https://rera.tn.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-wine text-xs hover:underline transition-colors mt-0.5 inline-block"
        >
          https://rera.tn.gov.in/
        </a>
      </div>

      {/* Main Light Luxury Footer */}
      <div className="bg-[#faf6f0] text-forest border-t border-cream/60">
        <div className="max-w-screen-xl mx-auto px-6 md:px-20 pt-16 pb-10">
          <div className="grid md:grid-cols-3 gap-12 mb-14">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/zenora_logo_dark.svg" alt="Zenora" className="h-10 w-auto mb-5" />
              <p className="font-sans text-earth text-sm leading-relaxed max-w-xs">
                A luxury villa community in Goldwins, Coimbatore. Elevation without compromise.
              </p>
              <div className="flex gap-2.5 items-center mt-5">
                <a
                  href="https://www.facebook.com/people/Zenvistas-Realty-Ventures/61577722516155/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-taupe/30 bg-white/70 text-forest hover:bg-wine hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3.3 0-5 1.7-5 5v2z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/zenora_by_zenvistas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-taupe/30 bg-white/70 text-forest hover:bg-wine hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=919789003828&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-taupe/30 bg-white/70 text-forest hover:bg-[#25D366] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a
                  href="https://www.threads.net/@zenora_by_zenvistas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Threads"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-taupe/30 bg-white/70 text-forest hover:bg-[#0e0c0b] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-wine font-medium mb-1">Navigate</p>
              {[
                { name: "Residences", href: "/#residences" },
                { name: "Amenities", href: "/#amenities" },
                { name: "Gallery", href: "/#gallery" },
                { name: "Location", href: "/#location" },
                { name: "Contact", href: "/#contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-sans text-earth hover:text-wine text-xs transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-wine font-medium mb-1">Contact</p>
              <a
                href="https://api.whatsapp.com/send/?phone=919789003828&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-wine text-xs hover:underline flex items-center gap-1.5"
              >
                WhatsApp: +91 97890 03828
              </a>
              <a href="tel:+918870044213" className="font-sans text-wine text-xs hover:underline">
                Phone: +91 88700 44213
              </a>
              <a href="mailto:info@zenvistas.co.in" className="font-sans text-wine text-xs hover:underline">
                info@zenvistas.co.in
              </a>
              <a href="https://zenoravillas.in" className="font-sans text-wine text-xs hover:underline">
                zenoravillas.in
              </a>
              <p className="font-sans text-earth text-sm leading-relaxed mt-1">
                Goldwins, Coimbatore
                <br />
                Tamil Nadu, India
              </p>
            </div>
          </div>

          <div className="border-t border-cream/70 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-taupe text-[11px]">© {new Date().getFullYear()} ZenVistas. All rights reserved.</p>
            <div className="flex gap-6 flex-wrap justify-center">
              <Link
                href="/terms-and-conditions"
                className="font-sans text-taupe text-[11px] hover:text-forest transition-colors"
              >
                Terms and Conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="font-sans text-taupe text-[11px] hover:text-forest transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="font-sans text-taupe text-[11px] hover:text-forest transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

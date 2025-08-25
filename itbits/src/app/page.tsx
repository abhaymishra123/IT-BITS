import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      {/* Top Contact Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
      <div className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 py-2 font-medium">{/* whenever want commont properties add a header div*/}
          {/* Left Contact */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:itbits227@gmail.com"
              className="flex items-center gap-2 hover:underline"
            >
              ✉️ itbits227@gmail.com
            </a>
            <span className="flex items-center gap-2">
              🇮🇳 +91 8000560694
            </span>
            <span className="flex items-center gap-2">
              🇮🇳 +91 9887142637
            </span>
          </div>

          {/* Right Contact */}
          <div className="flex items-center gap-4">
            <span>🇮🇳 SUPPORT: +91 8000560694</span>
            <a
              href="/marketplace"
              className="px-3 py-1 border rounded hover:bg-gray-800"
            >
              MARKETPLACE
            </a>
            <a
              href="/login"
              className="px-3 py-1 border rounded hover:bg-gray-800"
            >
              CLIENT LOGIN
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/hero-web-design.png" // replace with your logo file in /public
              alt="Bits of IT Logo"
              width={220} // match screenshot size
              height={60}
              priority
            />
          </div>

          {/* Navigation */}
          {/* Navigation (SEO-Friendly) */}
<nav
  className="flex items-center gap-8 text-gray-800 font-bold relative"
  role="navigation"
  aria-label="Main Navigation"
>
  {/* Services with dropdown */}
  <div className="group relative">
    <a
      href="/services"
      className="hover:text-blue-600"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Services
    </a>
    <ul className="absolute left-0 mt-2 hidden w-56 rounded-lg bg-white shadow-lg group-hover:block">
      <li>
        <a
          href="/services/web-design"
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
        >
          Web Design
        </a>
      </li>
      <li>
        <a
          href="/services/web-development"
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
        >
          Web Development
        </a>
      </li>
      <li>
        <a
          href="/services/seo"
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
        >
          SEO Optimization
        </a>
      </li>
    </ul>
  </div>

  {/* Pricing with dropdown */}
  <div className="group relative">
    <a
      href="/pricing"
      className="hover:text-blue-600"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Pricing
    </a>
    <ul className="absolute left-0 mt-2 hidden w-56 rounded-lg bg-white shadow-lg group-hover:block">
      <li>
        <a
          href="/pricing/basic"
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
        >
          Basic Plan
        </a>
      </li>
      <li>
        <a
          href="/pricing/pro"
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
        >
          Pro Plan
        </a>
      </li>
      <li>
        <a
          href="/pricing/enterprise"
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
        >
          Enterprise
        </a>
      </li>
    </ul>
  </div>

  {/* Direct links */}
  <a href="/why-choose-us" className="hover:text-blue-600">
    Why Choose Us
  </a>
  <a href="/company" className="hover:text-blue-600">
    Company
  </a>

  {/* CTA */}
  <a
    href="/quote"
    className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 shadow"
  >
    Get Custom Quote →
  </a>
</nav>

        </div>
      </header>
      </div>
      {/* Hero Section */}
      {/* Hero Section */}
{/* Hero Section */}
<section
  className="relative bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg flex items-center justify-center text-center px-6 min-h-screen"
  style={{ backgroundImage: "url('/hero-bg.png')" }} // ensure hero-bg.png is in /public
>
  <div>
    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
      End-to-End Website <br />
      <span className="text-blue-300">
        Design & Development Services
      </span>
    </h1>
    <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto drop-shadow">
      IT BITS helps businesses build SEO-friendly, mobile-responsive,
      and high-performance websites that maximize online visibility
      and revenue.
    </p>
    <div className="mt-6 flex gap-4 justify-center">
      <a
        href="/contact"
        className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
      >
        Get a Free Consultation
      </a>
      <a
        href="/services"
        className="px-6 py-3 rounded-2xl border border-white text-white font-medium hover:bg-white/20 transition"
      >
        Explore Services
      </a>
    </div>
  </div>
</section>


    </main>
  );
}

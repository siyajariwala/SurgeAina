import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* PAGE BACKGROUND */}
      <main className="bg-stone-50 text-stone-900">

        {/* HERO */}
        <header className="bg-gradient-to-r from-stone-900 to-amber-900 text-amber-50 py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-4">
              <Link to="/" aria-label="Home" className="shrink-0">
                <img
                  src="/surgeaina.png"
                  alt="Surge Aina logo"
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                />
              </Link>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Explore Surge Aina
              </h1>
            </div>

            <p className="mt-3 text-3xl md:text-2xl max-w-3xl mx-auto text-center opacity-90">
              Because tech should understand you
            </p>
          </div>
        </header>

        {/* OUR STORY */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-amber-950">Our Story</h2>
                <p className="text-stone-700 text-lg mb-4">
                Surge Aina is a purpose-driven tech company that empowers creators and professionals through innovative digital solutions. Our latest creation, FindVirtual.me, is an intelligent platform that lets creators, designers, and professionals build stunning portfolio websites without any coding. We believe in making a beautiful web presence accessible to everyone - because your creativity should not be limited by technical barriers.
                </p>
                
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="AI neural network visualization"
                  className="w-full rounded-xl shadow-xl aspect-[16/10] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16 bg-gradient-to-b from-white to-stone-50 border-t border-stone-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-amber-950">Why Choose Us?</h2>
            

           <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
  {/* Card */}
  <div className="group relative rounded-2xl bg-amber-950 text-stone-100 p-6
                  shadow-md ring-1 ring-stone-700/60 hover:-translate-y-0.5
                  hover:ring-amber-500/60 transition">
    <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl
                    bg-gradient-to-r from-amber-500 to-orange-500
                    opacity-70 group-hover:opacity-100" />
    <h3 className="text-lg font-semibold text-stone-200 mb-2">From Idea to Impact in Record Time.</h3>
    <p className="text-stone-300 leading-relaxed">
      While others are stuck in endless planning meetings, we're already building your MVP. Our intelligent design process delivers startup speed with enterprise quality - cutting development time by 40% without sacrificing results.
    </p>
  </div>
<div className="group relative rounded-2xl bg-amber-950 text-stone-100 p-6
                  shadow-md ring-1 ring-stone-700/60 hover:-translate-y-0.5
                  hover:ring-amber-500/60 transition">
    <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl
                    bg-gradient-to-r from-amber-500 to-orange-500
                    opacity-70 group-hover:opacity-100" />
    <h3 className="text-lg font-semibold text-stone-200 mb-2">Human-Centered Tech That Actually Makes Sense.</h3>
    <p className="text-stone-300 leading-relaxed">
      We don't just code - we create digital experiences that connect. Every solution is designed for real people, real problems, and real results. Technology should serve people, not confuse them.
</p>  </div>

  <div className="group relative rounded-2xl bg-amber-950 text-stone-100 p-6
                  shadow-md ring-1 ring-stone-700/60 hover:-translate-y-0.5
                  hover:ring-amber-500/60 transition">
    <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl
                    bg-gradient-to-r from-amber-500 to-orange-500
                    opacity-70 group-hover:opacity-100" />
    <h3 className="text-lg font-semibold text-stone-200 mb-2">Proven Innovation - We Built FindVirtual.me.</h3>
    <p className="text-stone-300 leading-relaxed">
      We don't just talk about empowering users - we've done it. Our portfolio platform is already transforming how professionals showcase their work online. When you work with us, you're working with proven innovators.
</p>
    
  </div>

  <div className="group relative rounded-2xl bg-amber-950 text-stone-100 p-6
                  shadow-md ring-1 ring-stone-700/60 hover:-translate-y-0.5
                  hover:ring-amber-500/60 transition">
    <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl
                    bg-gradient-to-r from-amber-500 to-orange-500
                    opacity-70 group-hover:opacity-100" />
    <h3 className="text-lg font-semibold text-stone-200 mb-2">Full-Stack Meets Business Strategy</h3>
    <p className="text-stone-300 leading-relaxed">
      Get developers who understand both technical complexity AND your business goals. We're not just coders - we're growth partners who build solutions designed to scale with you. Choose us for maximum value.
      </p>
  </div>

  
</div>

            <div className="text-center mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-xl bg-amber-950 px-5 py-3 text-white shadow hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600/50"
              >
                Get Connected
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

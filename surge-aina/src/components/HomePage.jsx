import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <section className="relative w-screen min-h-screen overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* TEXT → move to the RIGHT on lg */}
        <div className="bg-gradient-to-r  from-stone-950 to-amber-950 text-white flex items-center
                        lg:order-2 lg:col-start-2 lg:row-start-1">
          <div className="w-full max-w-none px-6 lg:px-16 py-16">
            <h1 className="text-5xl font-bold leading-tight mb-2 border-t-4 border-b-4 border-yellow-100 py-4">
              <span className="text-yellow-100">Welcome to </span><br />
              <span className="bg-clip-text text-9xl text-transparent bg-gradient-to-r from-orange-100 to-orange-200">
                Surge
              </span>{" "}
              <span className="text-yellow-100 text-9xl">Aina</span>
            </h1>
            <p className="mt-4 text-sm/6 text-white/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Experience the future with us.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center rounded-xl bg-amber-100 px-5 py-3 text-amber-950 shadow hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600/50 mt-6"
            >
              Get Connected
            </Link>
          </div>
        </div>

        {/* VIDEO → move to the LEFT on lg */}
        <div className="relative lg:order-1 lg:col-start-1 lg:row-start-1">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/Video.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* flip the edge gradient since the text is on the right now */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent pointer-events-none hidden lg:block" />
        </div>
      </div>
    </section>
  );
}

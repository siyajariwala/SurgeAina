import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <main className="hero">
      <div className="hero__content">
        {/* Left: Video */}
        <div className="hero__media">
          <video src="/Video.mp4" autoPlay loop muted playsInline />
        </div>

        {/* Right: Text */}
        <div className="hero__text">
           <h1 className="hero__title">
            <span>Welcome</span>
            <span>to</span>
            <span>Surge Aina</span>
          </h1>

          {/* Subtitle */}
          <p className="hero__subtitle">Lorem ipsum dolor sit amet.</p>

          {/* CTA */}
          <div className="hero__cta">
            <Link to="/about" className="btn btn--primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

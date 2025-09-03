import "./AboutPage.css";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* HEADER: left = image, right = text */}
      <header className="about-header">
        <div className="hdr-left">
          <Link to="/" aria-label="Home">
            <img src="/surgeaina.png" alt="Surge Aina logo" className="hdr-image" />
          </Link>
        </div>

        <div className="hdr-right">
          <h1 className="hdr-title">Explore Surge Aina</h1>
        
        </div>
      </header>
{/* HERO IMAGE BOX */}
      <section className="hero-box">
        <img src="/surgeaina.png" alt="Hero" className="hero-img" />
      </section>

      <section className="tagline-box">
        <p className="tagline-text"> Because Tech Should Understand You.</p>
      </section>
      {/* MAIN CONTENT (placeholder) */}
      <main className="about-content">
        <h2>Why Choose Us?</h2>
        <p>This is where your About content will go.</p>
        <div className="card-container">
    <div className="card">
      <h3 className="card-title">Lorem ipsum.</h3>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</p>
    </div>
    <div className="card">
      <h3 className="card-title">Lorem ipsum.</h3>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</p>
    </div>
    <div className="card">
      <h3 className="card-title">Lorem ipsum.</h3>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</p>
    </div>
  </div>
  
  <div className="btn-wrapper">
  <Link to="/contact" className="btn btn--primary">
    Get Connected
  </Link>
</div>
      </main>
    </div>
  );
}

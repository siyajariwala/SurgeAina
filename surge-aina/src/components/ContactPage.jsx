import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Left = image */}
      <aside className="contact-left">
        <img src="/surgeaina.png" alt="Get in touch" className="contact-img" />
      </aside>

      {/* Right = form */}
      <section className="contact-right">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-sub">
          We’d love to hear from you. Fill out the form and we’ll get back soon.
        </p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="field">
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" placeholder="Jane Doe" required />
          </div>

          <div className="field">
            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" placeholder="jane@example.com" required />
          </div>

          <div className="field">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="6" placeholder="Tell us a bit more..." required />
          </div>

          <button type="submit" className="btn btn--primary">Send Message</button>
        </form>
      </section>
    </div>
  );
}

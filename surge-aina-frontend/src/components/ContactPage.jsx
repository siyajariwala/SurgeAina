import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  
  const [formFields, setFormFields] = useState({
    fullName: '',
    email: '',
    message: '',
    mobileNumber: ''
  });

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const USER_TEMPLATE_ID= import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields(prev => ({
      ...prev,
      [name]: value
    }));
  };

  async function handleSubmit(e) {
  e.preventDefault();
  setSending(true);
  setStatus(null);

  const form = e.currentTarget;
  const fd = new FormData(form);

  // Common data
  const commonData = {
    name: fd.get("fullName"),              
    user_email: fd.get("email"),                
    message: fd.get("message"),            
    mobile: fd.get("mobileNumber") || "",  
    title: "Surge Aina Enquiry",          
    time: new Date().toLocaleString(),    
  };

  try {
    // EMAIL 1: To your company (notification that someone contacted)
    const companyParams = {
      ...commonData,
      to_email: "your-company@example.com",  // Your company email
      email: fd.get("email"),  // User's email (for reply-to)
    };
    
    await emailjs.send(
      SERVICE_ID, 
      TEMPLATE_ID,           // Company template: "New inquiry received"
      companyParams, 
      { publicKey: PUBLIC_KEY }
    );
    
    // EMAIL 2: To user (confirmation of what they sent)
    const userParams = {
      ...commonData,
      to_email: fd.get("email"),     // User's email
      email: fd.get("email"),        // User's email
    };
    
    await emailjs.send(
      SERVICE_ID, 
      USER_TEMPLATE_ID,      // User template: "Your message received"
      userParams, 
      { publicKey: PUBLIC_KEY }
    );
    
    setStatus({ 
      ok: true, 
      msg: "Message sent! Check your email for confirmation." 
    });
    form.reset();
    
  } catch (err) {
    console.error(err);
    setStatus({ 
      ok: false, 
      msg: "Failed to send. Please try again." 
    });
  } finally {
    setSending(false);
  }
}
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-amber-50">
        <section className="relative max-w-7xl mx-auto px-4 py-16 bg-amber-50 rounded-xl shadow-sm">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
              Enquire About Our <span className="text-amber-950">Services</span>
            </h1>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you begin your journey. Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              {/* left column (unchanged) */}
              <div className="md:w-1/3 bg-gradient-to-br from-amber-950 to-amber-800 p-10 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Why Enquire With Us?</h2>
                  <ul className="space-y-4">
                    {[
                      "Expert guidance from industry professionals",
                      "Lorem ipsum dolor sit amet",
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                      "Quick response to all enquiries",
                    ].map((t) => (
                      <li key={t} className="flex items-start">
                        <svg className="h-6 w-6 text-red-200 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-2">Need assistance?</h3>
                  <p className="text-red-100 mb-2">Call us at +1 xxx xxxxxxx</p>
                  <p className="text-sm text-red-200">Our team is available 10AM - 6PM, Monday to Saturday</p>
                </div>
              </div>

              {/* right column — form */}
              <div className="md:w-2/3 p-10">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formFields.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-amber-950 focus:border-amber-950"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formFields.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-amber-950 focus:border-amber-950"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formFields.mobileNumber}
                        onChange={handleInputChange}
                        placeholder="+91 9876543210"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-amber-950 focus:border-amber-950"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formFields.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your interests and goals..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-amber-950 focus:border-amber-950"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3 px-6 bg-amber-950 text-white font-medium rounded-lg shadow-sm hover:bg-amber-900 transition disabled:opacity-60"
                  >
                    {sending ? "Sending..." : "Submit Enquiry"}
                  </button>

                  {status && status.ok && (
                    <div className="mt-3 p-3 rounded-xl bg-orange-50 ">
                      <p className="text-sm font-bold text-black text-center drop-shadow-lg">
                        🌟 {status.msg} 🌟
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
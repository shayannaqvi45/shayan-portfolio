import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import emailjs from "emailjs-com";
import { portfolioData } from "../data/portfolioData";
import { emailjsConfig } from "../config/emailjs";

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    permission: false
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }
    if (!formData.permission) {
      setStatus({ type: "error", message: "Please agree to the contact permission check." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    // If EmailJS config is not customized yet, simulate a success response to keep it working
    if (emailjsConfig.serviceId === "YOUR_SERVICE_ID" || emailjsConfig.publicKey === "YOUR_PUBLIC_KEY") {
      setTimeout(() => {
        setLoading(false);
        setStatus({
          type: "success",
          message: "Message simulated successfully! Setup your EmailJS keys in src/config/emailjs.js to send actual emails."
        });
        setFormData({ firstName: "", lastName: "", email: "", message: "", permission: false });
      }, 1500);
      return;
    }

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      message: formData.message
    };

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      )
      .then(
        () => {
          setLoading(false);
          setStatus({ type: "success", message: "Your message has been sent successfully!" });
          setFormData({ firstName: "", lastName: "", email: "", message: "", permission: false });
        },
        (error) => {
          setLoading(false);
          setStatus({
            type: "error",
            message: `Failed to send email: ${error.text || "Unknown error occurred"}`
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Column: Get in Touch Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-[#ff2a2a] text-xs font-mono tracking-widest uppercase mb-3 block">
                Let's Talk
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-8">
                Get In Touch
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8">
                Have an exciting project, internship opportunity, or just want to chat? Drop me a message and let's build something amazing together!
              </p>
            </div>

            {/* Direct Info Blocks */}
            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 text-white/70 hover:text-[#ff2a2a] transition-colors group"
                data-hover="true"
              >
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl group-hover:border-[#ff2a2a]/30 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-white/40 block">Email Me</span>
                  <span className="text-xs sm:text-sm font-semibold">{personalInfo.email}</span>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 text-white/70 hover:text-[#ff2a2a] transition-colors group"
                data-hover="true"
              >
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl group-hover:border-[#ff2a2a]/30 transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-white/40 block">Call Me</span>
                  <span className="text-xs sm:text-sm font-semibold">{personalInfo.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white/70">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-white/40 block">Location</span>
                  <span className="text-xs sm:text-sm font-semibold">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Solid Red Form Block */}
          <div className="lg:col-span-8 flex justify-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-[#ff2a2a] w-full p-8 md:p-12 text-white flex flex-col justify-between rounded-3xl shadow-[0_20px_50px_rgba(255,42,42,0.2)]"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-white/75 block mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Shayan"
                      required
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/30 font-medium rounded-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-white/75 block mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Naqvi"
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/30 font-medium rounded-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-white/75 block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. shayan@example.com"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/30 font-medium rounded-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-white/75 block mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/30 font-medium resize-none rounded-none"
                  />
                </div>

                {/* Consent Permission Check */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="permission"
                    name="permission"
                    checked={formData.permission}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer"
                  />
                  <label
                    htmlFor="permission"
                    className="text-xs text-white/90 leading-snug cursor-pointer select-none"
                  >
                    I give permission to contact me at this email address regarding my inquiry.
                  </label>
                </div>

                {/* Status Bar */}
                {status.message && (
                  <div
                    className={`p-4 rounded-xl border text-sm font-semibold tracking-wide flex items-center justify-between ${
                      status.type === "success"
                        ? "bg-green-600 border-green-500 text-white shadow-[0_0_20px_rgba(22,163,74,0.4)]"
                        : "bg-red-800 border-red-700 text-white"
                    }`}
                  >
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center justify-center gap-2 font-bold uppercase tracking-widest py-4 rounded-xl transition-all duration-300 border border-white bg-white text-[#ff2a2a] hover:bg-transparent hover:text-white ${
                    loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                  }`}
                  data-hover="true"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

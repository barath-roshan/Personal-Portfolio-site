import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Send,
  ExternalLink,
  CheckCircle,
  XCircle,
} from "lucide-react";

const SERVICE_ID  = "service_1kkx83b";
const TEMPLATE_ID = "template_z92pwvf";
const PUBLIC_KEY  = "SsKioPoDzsl8zdbDS";

export default function Contact() {
  const [form, setForm] = useState({ from_name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.from_name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      setForm({ from_name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const contactInfo = [
    { icon: Mail,   label: "Email",    value: "barathroshan2006@gmail.com", href: "mailto:barathroshan2006@gmail.com" },
    { icon: Phone,  label: "Phone",    value: "+91 9159222256",             href: "tel:+919159222256" },
    { icon: MapPin, label: "Location", value: "Coimbatore, Tamil Nadu, India", href: "https://maps.google.com/?q=Coimbatore,India" },
  ];

  const socialLinks = [
    { icon: Github,   label: "GitHub",   href: "https://github.com/barath-roshan",        username: "@barath-roshan" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/barath-roshan",    username: "/in/barath-roshan" },
    { icon: Code2,    label: "LeetCode", href: "https://leetcode.com/barath_2222",         username: "@barath_2222" },
  ];

  const inputStyle = {
    borderColor: "rgba(0,0,0,0.1)",
    backgroundColor: "rgba(255,255,255,0.8)",
  };

  return (
    <section id="contact" className="py-20 relative" style={{ background: "transparent", zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#b0ff44] to-[#9aef2a] bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: "#b0ff44" }} />
          <p className="text-lg max-w-3xl mx-auto text-gray-400">
            Ready to collaborate on innovative AI projects or discuss cutting-edge solutions? Let's turn ideas into reality together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-8 text-white">Get In Touch</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border hover:shadow-lg transition-all duration-300 group"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(176,255,68,0.15)" }}
                  whileHover={{ borderColor: "rgba(176,255,68,0.5)", backgroundColor: "rgba(176,255,68,0.05)" }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "rgba(176,255,68,0.1)" }}>
                    <contact.icon size={20} style={{ color: "#b0ff44" }} />
                  </div>
                  <div>
                    <div className="font-medium text-white">{contact.label}</div>
                    <div className="text-gray-400">{contact.value}</div>
                  </div>
                  <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "#b0ff44" }} />
                </motion.a>
              ))}
            </div>

            <h4 className="text-xl font-bold mb-6 text-white">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-4 rounded-2xl border hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(176,255,68,0.15)" }}
                  whileHover={{ borderColor: "rgba(176,255,68,0.5)", backgroundColor: "rgba(176,255,68,0.05)", scale: 1.05 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "rgba(176,255,68,0.1)" }}>
                    <social.icon size={20} style={{ color: "#b0ff44" }} />
                  </div>
                  <div className="font-medium text-sm text-white">{social.label}</div>
                  <div className="text-xs text-gray-400">{social.username}</div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="p-8 rounded-3xl border" style={{ backgroundColor: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.13)" }}>
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Name</label>
                    <input
                      type="text"
                      name="from_name"
                      value={form.from_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all duration-300"
                      style={inputStyle}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all duration-300"
                      style={inputStyle}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all duration-300"
                    style={inputStyle}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Message</label>
                  <textarea
                    rows={6}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                    style={inputStyle}
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                {/* Status feedback */}
                {status === "success" && (
                  <div className="flex items-center gap-2 text-sm" style={{ color: "#b0ff44" }}>
                    <CheckCircle size={16} />
                    Message sent! I'll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-red-400">
                    <XCircle size={16} />
                    Something went wrong. Please try again.
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
                  style={{ backgroundColor: "#b0ff44", color: "#0a0a0a" }}
                  whileHover={{ backgroundColor: "#9aef2a" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t text-center"
          style={{ borderColor: "rgba(176,255,68,0.2)" }}
        >
          <div className="text-2xl font-bold font-mono mb-2 text-white">
            BARATH<span style={{ color: "#b0ff44" }}>.AI</span>
          </div>
          <p className="text-gray-500">
            ©2026 Barath Roshan S. Building the future with AI, one algorithm at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

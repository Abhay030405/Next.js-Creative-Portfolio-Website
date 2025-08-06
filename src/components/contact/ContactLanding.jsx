"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function ContactLanding() {
  const [showCallForm, setShowCallForm] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", content: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [confirmation, setConfirmation] = useState("");

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const errs = {};
    if (!form.name || form.name.length < 2) errs.name = "Name required";
    if (!form.phone || !/^\d{10}$/.test(form.phone)) errs.phone = "Valid phone required";
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.content || form.content.length < 10) errs.content = "Please describe the context";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    // Send email via EmailJS
    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      {
        to_email: "officialabhay030405@gmail.com",
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        message: form.content,
        subject: `Call Booking Request from ${form.name}`,
        custom_message: `You have a new call booking request!\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nContext: ${form.content}`,
      },
      {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate: { throttle: 5000 },
      }
    ).then(
      () => {
        setShowCallForm(false); // Close form immediately
        setConfirmation("Call booked! You will be notified on your email.");
        setTimeout(() => {
          setSubmitted(false);
          setForm({ name: "", phone: "", email: "", content: "" });
          setConfirmation("");
        }, 2500);
      },
      () => {
        setConfirmation("There was an error booking your call. Please try again later.");
        setSubmitted(false);
      }
    );
  };

  return (
    <section
      className={`relative w-full flex flex-col items-center justify-center py-16 bg-transparent transition-all duration-300 ${showCallForm ? 'min-h-screen' : 'min-h-0 h-[100vh] overflow-hidden'}`}
    >
      <div className="mb-12 flex flex-col items-center">
        <motion.h1
          className="font-bold text-4xl sm:text-5xl md:text-6xl text-accent text-center mb-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 16 }}
        >
          Let's chat about your project
        </motion.h1>
        <motion.p
          className="text-muted text-lg text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Have an idea? Let's bring it to life together.
        </motion.p>
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Chat Card */}
        <motion.div
          className="rounded-2xl p-8 flex flex-col justify-between shadow-xl bg-white/5 backdrop-blur-md border border-accent/30 hover:bg-white/10 transition-all duration-200"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 80, damping: 16 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-2">Quick Chat</h2>
          <p className="text-muted mb-6">Got a quick question? Drop me a message and I'll get back to you within 24 hours.</p>
          <a
            href="mailto:officialabhay030405@gmail.com"
            className="mt-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent/80 text-background font-semibold text-lg shadow-lg hover:bg-accent transition-all duration-150">
              <span>Send Message</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L15 22L11 13L2 9L22 2Z" /></svg>
            </button>
          </a>
        </motion.div>
        {/* Schedule Call Card */}
        <motion.div
          className="rounded-2xl p-8 flex flex-col justify-between shadow-xl bg-white/5 backdrop-blur-lg border border-accent/30 hover:bg-white/10 transition-all duration-200"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 80, damping: 16 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-2">Schedule Call</h2>
          <p className="text-muted mb-6">Let's have a detailed discussion about your project and requirements.</p>
          <button
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent/80 text-background font-semibold text-lg shadow-lg hover:bg-accent transition-all duration-150 mt-auto"
            onClick={() => setShowCallForm((v) => !v)}
          >
            <span>Book a Call</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3M16 7V3M3 11H21M5 19H19M17 11V19M7 11V19" /></svg>
          </button>
        </motion.div>
        {/* Download CV Card */}
        <motion.div
          className="rounded-2xl p-8 flex flex-col justify-between shadow-xl bg-white/5 backdrop-blur-md border border-accent/30 hover:bg-white/10 transition-all duration-200"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 80, damping: 16 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-2">Download CV</h2>
          <p className="text-muted mb-6">Get a detailed look at my skills, experience, and achievements.</p>
          <a href="/resume.pdf" download className="mt-auto">
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent/80 text-background font-semibold text-lg shadow-lg hover:bg-accent transition-all duration-150">
              <span>Download CV</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            </button>
          </a>
        </motion.div>
      </div>
      {/* Book a Call Form */}
      <AnimatePresence>
        {showCallForm && (
          <motion.form
            key="callform"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            onSubmit={handleSubmit}
            className="mt-12 w-full max-w-lg mx-auto bg-white/10 border border-accent/30 rounded-2xl shadow-2xl p-8 backdrop-blur-md flex flex-col gap-4 relative"
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-xl text-accent hover:text-foreground"
              onClick={() => setShowCallForm(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-foreground mb-2">Book a Call</h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleInput}
              className="w-full p-3 rounded-md bg-white/5 border border-accent/20 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
            {errors.name && <span className="text-accent text-xs">{errors.name}</span>}
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={handleInput}
              className="w-full p-3 rounded-md bg-white/5 border border-accent/20 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
            {errors.phone && <span className="text-accent text-xs">{errors.phone}</span>}
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              value={form.email}
              onChange={handleInput}
              className="w-full p-3 rounded-md bg-white/5 border border-accent/20 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
            {errors.email && <span className="text-accent text-xs">{errors.email}</span>}
            <textarea
              name="content"
              placeholder="What would you like to discuss?"
              value={form.content}
              onChange={handleInput}
              className="w-full p-3 rounded-md bg-white/5 border border-accent/20 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 min-h-[100px]"
            />
            {errors.content && <span className="text-accent text-xs">{errors.content}</span>}
            <button
              type="submit"
              className="mt-4 px-8 py-3 rounded-full bg-accent/80 text-background font-semibold text-lg shadow-lg hover:bg-accent transition-all duration-150"
              disabled={submitted}
            >
              {submitted ? "Submitted!" : "Book Call"}
            </button>
            {confirmation && (
              <div className="mt-4 text-center text-accent font-semibold animate-pulse">{confirmation}</div>
            )}
          </motion.form>
        )}
      </AnimatePresence>
      {/* Anchor for form scroll */}
      <div id="contact-form" className="mt-16 w-full flex justify-center">
        {/* You can place your actual contact form here if you want it below the cards */}
      </div>
    </section>
  );
} 
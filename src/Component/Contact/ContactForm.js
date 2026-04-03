"use client";

import { useState } from "react";
import { IconCheckCircle, IconWarning, IconWhatsApp, IconSpinner } from "@/Component/Icons";

const INITIAL = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [waLink, setWaLink] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setWaLink(data.waLink || "");
        setForm(INITIAL);
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  // ── Success State ──────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="w-full max-w-2xl bg-white rounded-xl shadow p-4 sm:p-8 mx-4 sm:mx-auto flex flex-col items-center gap-4 text-center">
        <IconCheckCircle className="w-16 h-16 text-green-500" />
        <h2 className="text-2xl font-bold text-gray-800">Message Sent!</h2>
        <p className="text-gray-600">
          Thank you for reaching out. The Iriseagle team will get back to you within 24 hours.
        </p>
        {waLink && (
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
          >
            <IconWhatsApp className="w-5 h-5" />
            Also message us on WhatsApp
          </a>
        )}
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-red-600 hover:underline mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow p-4 sm:p-8 mx-4 sm:mx-auto">
      <p className="text-gray-700 mb-6 text-center">
        Have questions or need assistance? Reach out to the Iriseagle team and we&apos;ll get back to you promptly.
      </p>

      {/* Error Banner */}
      {status === "error" && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-5 text-sm">
          <IconWarning className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        {/* Full Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-semibold text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
            Phone Number <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+234 800 000 0000"
            className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm font-semibold text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about the vehicle you're interested in, or how we can help you..."
            required
            className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex items-center justify-center gap-2 mt-1 bg-red-700 hover:bg-red-800 disabled:bg-red-400 text-white font-semibold py-3 rounded-lg shadow transition-colors duration-200"
        >
          {status === "loading" ? (
            <>
              <IconSpinner className="w-5 h-5 animate-spin" />
              Sending…
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-sm text-gray-600 border-t pt-6">
        <div>
          <p className="font-semibold text-gray-800">Email</p>
          <a href="mailto:info@iriseagle.com" className="hover:text-red-600 transition">
            info@iriseagle.com
          </a>
        </div>
        <div>
          <p className="font-semibold text-gray-800">Phone</p>
          <a href="tel:+2348166576670" className="hover:text-red-600 transition">
            +234 805 402 9416
          </a>
        </div>
        <div>
          <p className="font-semibold text-gray-800">Address</p>
          <p>Flat 2 Jibia Street, Area 2, Abuja</p>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="mt-6 flex justify-center">
        <a
          href="https://wa.me/2348166576670"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow transition-colors duration-200"
          aria-label="Chat on WhatsApp"
        >
          <IconWhatsApp className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

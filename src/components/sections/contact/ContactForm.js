"use client";

import { useState } from "react";
import {
  IconCheckCircle,
  IconWarning,
  IconWhatsApp,
  IconSpinner,
} from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import Input, { Field, Textarea } from "@/components/ui/Input";

const INITIAL = { name: "", email: "", phone: "", message: "" };

const contactDetails = [
  { label: "Email", value: "info@iriseagle.com", href: "mailto:info@iriseagle.com" },
  { label: "Phone", value: "+234 805 402 9416", href: "tel:+2348166576670" },
  { label: "Address", value: "Flat 2 Jibia Street, Area 2, Abuja" },
];

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle");
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

  if (status === "success") {
    return (
      <div className="w-full max-w-2xl bg-white rounded-xl shadow p-4 sm:p-8 mx-4 sm:mx-auto flex flex-col items-center gap-4 text-center">
        <IconCheckCircle className="w-16 h-16 text-green-500" />
        <h2 className="text-2xl font-bold text-gray-800">Message Sent!</h2>
        <p className="text-gray-600">
          Thank you for reaching out. The Iriseagle team will get back to you within 24 hours.
        </p>
        {waLink && (
          <Button href={waLink} external variant="whatsapp" size="md">
            <IconWhatsApp className="w-5 h-5" />
            Also message us on WhatsApp
          </Button>
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

  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow p-4 sm:p-8 mx-4 sm:mx-auto">
      <p className="text-gray-700 mb-6 text-center">
        Have questions or need assistance? Reach out to the Iriseagle team and
        we&apos;ll get back to you promptly.
      </p>

      {status === "error" && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-5 text-sm">
          <IconWarning className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        <Field label="Full Name" htmlFor="name" required>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </Field>

        <Field label="Email Address" htmlFor="email" required>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </Field>

        <Field label="Phone Number" htmlFor="phone" optionalLabel="optional">
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+234 800 000 0000"
          />
        </Field>

        <Field label="Message" htmlFor="message" required>
          <Textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about the vehicle you're interested in, or how we can help you..."
            required
          />
        </Field>

        <Button
          type="submit"
          disabled={status === "loading"}
          variant="danger"
          size="md"
          fullWidth
          className="mt-1"
        >
          {status === "loading" ? (
            <>
              <IconSpinner className="w-5 h-5 animate-spin" />
              Sending…
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-sm text-gray-600 border-t pt-6">
        {contactDetails.map((item) => (
          <div key={item.label}>
            <p className="font-semibold text-gray-800">{item.label}</p>
            {item.href ? (
              <a href={item.href} className="hover:text-red-600 transition">
                {item.value}
              </a>
            ) : (
              <p>{item.value}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Button
          href="https://wa.me/2348166576670"
          external
          variant="whatsapp"
          size="md"
          aria-label="Chat on WhatsApp"
        >
          <IconWhatsApp className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

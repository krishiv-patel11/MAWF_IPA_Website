import React from "react";
import {
  Send,
  CheckCircle2,
} from "lucide-react";
import { useForm } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mppzqpzd");

  if (state.succeeded) {
    return (
      <section className="bg-[hsl(206_60%_98%)] pb-20 lg:pb-28">
        <div className="mx-auto max-w-[800px] px-6 lg:px-10">
          <div className="rounded-3xl border border-[hsl(152_70%_60%)] bg-[hsl(152_70%_96%)] p-10 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(152_70%_52%)] text-white">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="mt-6 font-display text-3xl text-[hsl(175_60%_18%)]">
              Message received
            </h3>

            <p className="mt-3 text-lg text-[hsl(175_40%_30%)]">
              Thank you for reaching out. Our team will get back to you soon.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-6 inline-flex items-center rounded-xl bg-[hsl(205_78%_44%)] px-6 py-3 text-base font-semibold text-white hover:bg-[hsl(205_78%_40%)] transition-colors"
            >
              Send another message
            </button>

          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[hsl(206_60%_98%)] pb-20 lg:pb-28">
      <div className="mx-auto max-w-[800px] px-6 lg:px-10">

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[hsl(205_38%_88%)] bg-white p-8 lg:p-10 shadow-xl shadow-blue-100/50"
        >

          <div className="grid sm:grid-cols-2 gap-5">

            <Field
              label="Full name"
              name="name"
              placeholder="Jane Doe"
              required
            />

            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="jane@email.com"
              required
            />

          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-5">

            <Field
              label="Phone"
              name="phone"
              type="tel"
              placeholder="(813) 555-0100"
            />

            <div>
              <label
                htmlFor="role"
                className="block text-base font-medium text-[hsl(215_35%_24%)] mb-2"
              >
                I am a…
              </label>

              <select
                id="role"
                name="role"
                className="w-full rounded-xl border border-[hsl(205_38%_88%)] bg-white px-4 py-3.5 text-lg text-[hsl(215_35%_24%)] focus:outline-none focus:ring-2 focus:ring-[hsl(205_78%_44%)]"
              >
                <option>Patient</option>
                <option>Provider</option>
                <option>Health Plan Partner</option>
                <option>Agent / Broker</option>
              </select>
            </div>

          </div>

          <div className="mt-5">

            <label
              htmlFor="message"
              className="block text-base font-medium text-[hsl(215_35%_24%)] mb-2"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="How can we help?"
              className="w-full rounded-xl border border-[hsl(205_38%_88%)] bg-white px-4 py-3.5 text-lg text-[hsl(215_35%_24%)] placeholder:text-[hsl(215_22%_60%)] focus:outline-none focus:ring-2 focus:ring-[hsl(205_78%_44%)]"
            />

          </div>

          {state.errors && (
            <p className="mt-4 text-sm text-red-600">
              Something went wrong while sending your message. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={state.submitting}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[hsl(205_78%_44%)] px-6 py-4 text-lg font-semibold text-white hover:bg-[hsl(205_78%_40%)] transition-colors disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-5 w-5" />
            {state.submitting ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="block text-base font-medium text-[hsl(215_35%_24%)] mb-2"
      >
        {label}

        {required && (
          <span className="text-[hsl(205_78%_44%)]">
            {" "}*
          </span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[hsl(205_38%_88%)] bg-white px-4 py-3.5 text-lg text-[hsl(215_35%_24%)] placeholder:text-[hsl(215_22%_60%)] focus:outline-none focus:ring-2 focus:ring-[hsl(205_78%_44%)]"
      />

    </div>
  );
}
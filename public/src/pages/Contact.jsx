import React from "react";
import { Phone } from "lucide-react";

import Header from "../components/mawf/Header";
import Footer from "../components/mawf/Footer";
import PageHeader from "../components/mawf/PageHeader";
import ContactForm from "../components/mawf/ContactForm";

export default function Contact() {
  return (
    <div className="bg-[hsl(206_60%_98%)]">

      <Header />

      <PageHeader
        eyebrow="Contact Us"
        title="We'd love to hear from you"
        subtitle={
          <>
            Send us a message and our team will get back to you. Prefer to call? Reach us at{" "}

            <a
              href="tel:8139914000"
              className="font-semibold text-[hsl(205_78%_42%)] underline-offset-4 hover:underline inline-flex items-center gap-1"
            >
              <Phone className="h-4 w-4" />
              (813) 991-4000
            </a>

            .
          </>
        }
      />

      <ContactForm />

      <Footer />

    </div>
  );
}
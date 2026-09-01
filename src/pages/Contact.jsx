import React from "react";
import { Phone } from "lucide-react";
import SEO from "../components/mawf/SEO";
import Header from "../components/mawf/Header";
import Footer from "../components/mawf/Footer";
import PageHeader from "../components/mawf/PageHeader";
import ContactForm from "../components/mawf/ContactForm";

export default function Contact() {
  return (
    <div className="bg-[hsl(206_60%_98%)]">

      <SEO
        title="Contact Us"
        description="Contact Medical Associates of West Florida IPA. Reach our team by phone or send us a message online."
        path="/contact"
      />

      <Header />

      <PageHeader
        eyebrow="Contact Us"
        title="We'd love to hear from you"
        subtitle={
          <>
            Send us a message and our team will get back to you. Prefer to call? Reach us at{" "}

            <a
              href="tel:7278619800"
              className="font-semibold text-[hsl(205_78%_42%)] underline-offset-4 hover:underline inline-flex items-center gap-1"
            >
              <Phone className="h-4 w-4" />
              (727) 861-9800
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
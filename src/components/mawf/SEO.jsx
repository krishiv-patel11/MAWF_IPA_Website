import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  path = "",
  doctor,
}) {
  const siteName = "Medical Associates of West Florida IPA";
  const fullTitle = title
    ? `${title} | ${siteName}`
    : siteName;

  const canonicalUrl = `https://mawfipa.com${path}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: siteName,
    url: "https://mawfipa.com",
    logo: "https://mawfipa.com/images/logo.png",
    telephone: "+1-727-861-9800",
    email: "info@mawfipa.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7575 State Rd 52",
      addressLocality: "Hudson",
      addressRegion: "FL",
      postalCode: "34667",
      addressCountry: "US",
    },
  };

  const doctorSchema = doctor
    ? {
        "@context": "https://schema.org",
        "@type": "Physician",
        name: doctor.name,
        description: doctor.bio
          ? doctor.bio.replace(/\s+/g, " ").slice(0, 300)
          : undefined,
        image: doctor.photo
          ? `https://mawfipa.com${doctor.photo}`
          : undefined,
        url: canonicalUrl,
        medicalSpecialty: doctor.specialty || undefined,
        memberOf: {
          "@type": "MedicalOrganization",
          name: siteName,
          url: "https://mawfipa.com",
        },
      }
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        name="twitter:card"
        content="summary"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <script type="application/ld+json">
        {JSON.stringify(
          doctorSchema || organizationSchema
        )}
      </script>
    </Helmet>
  );
}
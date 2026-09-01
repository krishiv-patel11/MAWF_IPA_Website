import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  path = "",
}) {
  const siteName = "Medical Associates of West Florida IPA";
  const fullTitle = title
    ? `${title} | ${siteName}`
    : siteName;

  const canonicalUrl = `https://mawfipa.com${path}`;

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
    </Helmet>
  );
}

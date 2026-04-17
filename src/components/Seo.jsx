import Head from "next/head";
import { companyInfo } from "@/data/mock";

const SITE_URL = "https://designdraft.co.in";

const BASE_LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: "Design Draft",
  description:
    "Leading builders, architects, and interior designers in Thrissur, Kerala with 25+ years of experience.",
  url: SITE_URL,
  telephone: "+917736885666",
  email: "Info@designdraft.co.in",
  foundingDate: "1998",
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "86V8+8F7, Irinjalakuda",
    addressLocality: "Thrissur",
    addressRegion: "Kerala",
    postalCode: "680121",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.3432705,
    longitude: 76.2149378,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "00:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "67",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: [
    { "@type": "City", name: "Thrissur" },
    { "@type": "City", name: "Irinjalakuda" },
    { "@type": "City", name: "Chalakudy" },
    { "@type": "State", name: "Kerala" },
  ],
  hasMap: "https://www.google.com/maps/place/Design+Draft/@10.3432705,76.2149378,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba7f7600df007a3:0xe5986fb3f129bde0",
  sameAs: [
    "https://www.google.com/maps/place/Design+Draft/@10.3432705,76.2149378,17z",
  ],
};

export default function Seo({
  title,
  description,
  path = "/",
  keywords = [],
  image = "https://images.unsplash.com/photo-1544984243-ec57ea16fe25",
  schema = null,
}) {
  const canonical = `${SITE_URL}${path}`;
  const computedKeywords =
    keywords.length > 0
      ? keywords.join(", ")
      : `${companyInfo.name}, Thrissur builders, Kerala architects`;

  const schemas = [BASE_LOCAL_BUSINESS_SCHEMA, ...(schema ? (Array.isArray(schema) ? schema : [schema]) : [])];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={computedKeywords} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={companyInfo.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </Head>
  );
}

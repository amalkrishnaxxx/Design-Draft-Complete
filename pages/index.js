import Home from "@/pages/Home";
import Seo from "@/components/Seo";
import { seoKeywords } from "@/data/mock";

const HOME_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Design Draft",
    url: "https://designdraft.co.in",
    logo: "https://designdraft.co.in/logo.png",
    foundingDate: "1998",
    description: "Thrissur's leading builders, architects and developers since 1998.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+917736885666",
      contactType: "customer service",
      availableLanguage: ["English", "Malayalam"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Irinjalakuda",
      addressLocality: "Thrissur",
      addressRegion: "Kerala",
      postalCode: "680121",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/Designdraft13",
      "https://www.instagram.com/_design_draft/",
      "https://www.google.com/maps/place/Design+Draft/@10.3432705,76.2149378,17z",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Design Draft",
    url: "https://designdraft.co.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://designdraft.co.in/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who are the best builders in Thrissur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Design Draft is one of the top builders in Thrissur, Kerala with 25+ years of experience and 250+ completed residential and commercial projects.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Design Draft offer in Thrissur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Design Draft offers architectural design, interior design, exterior design, construction & contracting, project management, and landscaping services in Thrissur, Kerala.",
        },
      },
      {
        "@type": "Question",
        name: "How much does home construction cost in Thrissur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Home construction costs in Thrissur typically range from ₹1,800 to ₹3,500+ per sq ft depending on the design, materials, and finishes. Contact Design Draft for a free detailed estimate.",
        },
      },
      {
        "@type": "Question",
        name: "Does Design Draft build traditional Kerala style homes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Design Draft specializes in both traditional Kerala nalukettu style homes and modern contemporary designs. We also offer hybrid designs that blend both styles.",
        },
      },
    ],
  },
];

export default function IndexPage() {
  return (
    <>
      <Seo
        title="Design Draft | Builders and Developers in Thrissur"
        description="Design Draft is a leading builders and architects team in Thrissur, Kerala. Explore residential and commercial construction, design, and turnkey solutions."
        path="/"
        keywords={seoKeywords}
        schema={HOME_SCHEMA}
      />
      <Home />
    </>
  );
}

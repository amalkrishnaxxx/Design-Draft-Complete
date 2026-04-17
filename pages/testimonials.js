import Testimonials from "@/pages/Testimonials";
import Seo from "@/components/Seo";

const TESTIMONIALS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Design Draft Building Services",
  description: "Leading builders, architects and interior designers in Thrissur, Kerala",
  brand: { "@type": "Brand", name: "Design Draft" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "67",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Rajesh Kumar" },
      reviewBody: "Design Draft transformed our dream into reality. Their attention to detail and commitment to quality is exceptional.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Priya Menon" },
      reviewBody: "Outstanding architectural design and construction quality! Highly recommended for both residential and commercial projects.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Suma Thomas" },
      reviewBody: "The best builders in Thrissur! Design Draft delivered beyond our expectations.",
    },
  ],
};

export default function TestimonialsPage() {
  return (
    <>
      <Seo
        title="Client Testimonials | Design Draft Thrissur"
        description="Read client testimonials and reviews for Design Draft, one of the most trusted builders and developers in Thrissur."
        path="/testimonials"
        keywords={[
          "best builders in Thrissur",
          "builders in Thrissur",
          "building contractors in Thrissur",
          "home builders in Thrissur",
        ]}
        schema={TESTIMONIALS_SCHEMA}
      />
      <Testimonials />
    </>
  );
}

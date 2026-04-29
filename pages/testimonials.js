import Testimonials from "@/pages/Testimonials";
import Seo from "@/components/Seo";

const TESTIMONIALS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Client Testimonials for Design Draft Thrissur",
  description: "Client testimonials and project feedback for Design Draft builders and designers in Thrissur, Kerala.",
  url: "https://designdraft.co.in/testimonials",
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

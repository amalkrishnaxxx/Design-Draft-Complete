import Testimonials from "@/pages/Testimonials";
import Seo from "@/components/Seo";

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
      />
      <Testimonials />
    </>
  );
}

import About from "@/pages/About";
import Seo from "@/components/Seo";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Design Draft | Trusted Builders in Thrissur"
        description="Learn about Design Draft, a trusted builders and architectural company in Thrissur with 25+ years of residential and commercial project experience."
        path="/about"
        keywords={[
          "builders in Thrissur",
          "architects in Thrissur",
          "building developers in Thrissur",
          "home builders in Thrissur",
        ]}
      />
      <About />
    </>
  );
}

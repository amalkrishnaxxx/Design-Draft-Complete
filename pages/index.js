import Home from "@/pages/Home";
import Seo from "@/components/Seo";
import { seoKeywords } from "@/data/mock";

export default function IndexPage() {
  return (
    <>
      <Seo
        title="Design Draft | Builders and Developers in Thrissur"
        description="Design Draft is a leading builders and architects team in Thrissur, Kerala. Explore residential and commercial construction, design, and turnkey solutions."
        path="/"
        keywords={seoKeywords}
      />
      <Home />
    </>
  );
}

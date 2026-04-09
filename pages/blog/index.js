import Blog from "@/pages/Blog";
import Seo from "@/components/Seo";

export default function BlogPage() {
  return (
    <>
      <Seo
        title="Design and Construction Blog | Design Draft Thrissur"
        description="Read expert blog posts on house design, architecture, construction planning, and interior design trends in Thrissur and Kerala."
        path="/blog"
        keywords={[
          "builders in Thrissur",
          "architects in Thrissur",
          "interior designers in Thrissur",
          "building contractors in Thrissur",
          "home builders in Thrissur",
        ]}
      />
      <Blog />
    </>
  );
}

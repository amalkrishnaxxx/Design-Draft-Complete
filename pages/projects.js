import Projects from "@/pages/Projects";
import Seo from "@/components/Seo";

export default function ProjectsPage() {
  return (
    <>
      <Seo
        title="Completed Construction Projects in Thrissur | Design Draft"
        description="Browse residential and commercial projects completed by Design Draft across Thrissur and Kerala."
        path="/projects"
        keywords={[
          "home builders in Thrissur",
          "residential builders in Thrissur",
          "commercial building contractors in Thrissur",
          "building developers in Thrissur",
          "house construction in Thrissur",
        ]}
      />
      <Projects />
    </>
  );
}

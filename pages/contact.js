import Contact from "@/pages/Contact";
import Seo from "@/components/Seo";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Design Draft | Builders in Thrissur"
        description="Contact Design Draft for architectural design, home construction, and turnkey project consultation in Thrissur and across Kerala."
        path="/contact"
        keywords={[
          "builders in Thrissur",
          "contractors in Thrissur",
          "building contractors in Thrissur",
          "architects in Thrissur",
          "interior designers in Thrissur",
          "exterior designers in Thrissur",
        ]}
      />
      <Contact />
    </>
  );
}

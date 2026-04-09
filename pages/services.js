import Services from "@/pages/Services";
import Seo from "@/components/Seo";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Construction and Design Services in Thrissur | Design Draft"
        description="Explore architectural design, interior design, construction, project management, and landscaping services by Design Draft in Thrissur, Kerala."
        path="/services"
        keywords={[
          "building contractors in Thrissur",
          "contractors in Thrissur",
          "architects in Thrissur",
          "interior designers in Thrissur",
          "exterior designers in Thrissur",
          "building developers in Thrissur",
          "turnkey construction in Thrissur",
        ]}
      />
      <Services />
    </>
  );
}

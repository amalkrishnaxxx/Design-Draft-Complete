import Services from "@/pages/Services";
import Seo from "@/components/Seo";

const SERVICES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Construction and Design Services by Design Draft Thrissur",
  description: "Comprehensive building and design services offered by Design Draft in Thrissur, Kerala",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Architectural Design",
        description: "Custom architectural planning for residential and commercial buildings in Thrissur, Kerala. Includes 3D visualization, Vastu-compliant designs, and structural engineering.",
        provider: { "@type": "LocalBusiness", name: "Design Draft", url: "https://designdraft.co.in" },
        areaServed: "Thrissur, Kerala",
        url: "https://designdraft.co.in/services#architectural-design",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Interior Design",
        description: "Customized interior design services for homes and commercial spaces in Thrissur, Kerala. Modern and classic themes, smart home integration.",
        provider: { "@type": "LocalBusiness", name: "Design Draft", url: "https://designdraft.co.in" },
        areaServed: "Thrissur, Kerala",
        url: "https://designdraft.co.in/services#interior-design",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Exterior Design",
        description: "Facade design and elevation planning for homes and commercial buildings in Thrissur. Weather-resistant, contemporary and traditional styles.",
        provider: { "@type": "LocalBusiness", name: "Design Draft", url: "https://designdraft.co.in" },
        areaServed: "Thrissur, Kerala",
        url: "https://designdraft.co.in/services#exterior-design",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Construction & Contracting",
        description: "Turnkey construction and contracting services in Thrissur, Kerala. Residential and commercial projects completed on time and within budget.",
        provider: { "@type": "LocalBusiness", name: "Design Draft", url: "https://designdraft.co.in" },
        areaServed: "Thrissur, Kerala",
        url: "https://designdraft.co.in/services#construction-contracting",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Project Management",
        description: "End-to-end construction project management in Thrissur. Vendor management, quality control, and timeline adherence for residential and commercial projects.",
        provider: { "@type": "LocalBusiness", name: "Design Draft", url: "https://designdraft.co.in" },
        areaServed: "Thrissur, Kerala",
        url: "https://designdraft.co.in/services#project-management",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Landscaping",
        description: "Complete landscape design and installation services in Thrissur, Kerala. Garden design, water features, outdoor lighting, and maintenance.",
        provider: { "@type": "LocalBusiness", name: "Design Draft", url: "https://designdraft.co.in" },
        areaServed: "Thrissur, Kerala",
        url: "https://designdraft.co.in/services#landscaping",
      },
    },
  ],
};

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
        schema={SERVICES_SCHEMA}
      />
      <Services />
    </>
  );
}

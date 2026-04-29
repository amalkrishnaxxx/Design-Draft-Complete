import Link from "next/link";
import Seo from "@/components/Seo";

const IRINJALAKUDA_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://designdraft.co.in/" },
      { "@type": "ListItem", position: 2, name: "Builders in Irinjalakuda", item: "https://designdraft.co.in/builders-in-irinjalakuda" },
    ],
  },
];

export default function BuildersInIrinjalakudaPage() {
  return (
    <>
      <Seo
        title="Builders in Irinjalakuda | Design Draft"
        description="Looking for experienced builders in Irinjalakuda? Design Draft offers architecture, interior design, and turnkey construction solutions."
        path="/builders-in-irinjalakuda"
        keywords={[
          "builders in Irinjalakuda",
          "home builders in Irinjalakuda",
          "construction company Irinjalakuda",
          "architects in Irinjalakuda",
        ]}
        schema={IRINJALAKUDA_SCHEMA}
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Builders in Irinjalakuda</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Design Draft provides residential and commercial construction in Irinjalakuda with end-to-end planning,
            architecture, interiors, and execution support.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-md bg-orange-500 px-5 py-3 text-white font-semibold hover:bg-orange-600">
              Request Consultation
            </Link>
            <Link href="/builders-in-thrissur" className="rounded-md border border-gray-300 px-5 py-3 text-gray-900 font-semibold hover:bg-gray-50">
              Builders in Thrissur
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


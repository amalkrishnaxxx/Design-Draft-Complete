import Link from "next/link";
import Seo from "@/components/Seo";

const KODUNGALLUR_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://designdraft.co.in/" },
      { "@type": "ListItem", position: 2, name: "Builders in Kodungallur", item: "https://designdraft.co.in/builders-in-kodungallur" },
    ],
  },
];

export default function BuildersInKodungallurPage() {
  return (
    <>
      <Seo
        title="Builders in Kodungallur | Design Draft"
        description="Need reliable builders in Kodungallur? Design Draft delivers architecture, interior design, and complete construction services."
        path="/builders-in-kodungallur"
        keywords={[
          "builders in Kodungallur",
          "construction company Kodungallur",
          "home builders Kodungallur",
          "building contractors Kodungallur",
        ]}
        schema={KODUNGALLUR_SCHEMA}
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Builders in Kodungallur</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Design Draft helps clients in Kodungallur build quality homes and commercial spaces with integrated
            architectural design, construction execution, and project management.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-md bg-orange-500 px-5 py-3 text-white font-semibold hover:bg-orange-600">
              Get Project Estimate
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


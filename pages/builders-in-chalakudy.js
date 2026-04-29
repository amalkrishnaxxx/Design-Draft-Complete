import Link from "next/link";
import Seo from "@/components/Seo";

const CHALAKUDY_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://designdraft.co.in/" },
      { "@type": "ListItem", position: 2, name: "Builders in Chalakudy", item: "https://designdraft.co.in/builders-in-chalakudy" },
    ],
  },
];

export default function BuildersInChalakudyPage() {
  return (
    <>
      <Seo
        title="Builders in Chalakudy | Design Draft"
        description="Design Draft offers trusted construction, architecture, and turnkey building services in Chalakudy and nearby regions."
        path="/builders-in-chalakudy"
        keywords={[
          "builders in Chalakudy",
          "home construction in Chalakudy",
          "building contractors in Chalakudy",
          "architects in Chalakudy",
        ]}
        schema={CHALAKUDY_SCHEMA}
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Builders in Chalakudy</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            From design approvals to final handover, Design Draft supports complete home and commercial construction
            projects in Chalakudy with quality-driven execution.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-md bg-orange-500 px-5 py-3 text-white font-semibold hover:bg-orange-600">
              Talk to Our Team
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


import Link from "next/link";
import Seo from "@/components/Seo";

const COST_PAGE_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://designdraft.co.in/" },
      { "@type": "ListItem", position: 2, name: "Construction Cost in Thrissur", item: "https://designdraft.co.in/construction-cost-thrissur" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the average construction cost in Thrissur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Construction cost in Thrissur varies by finish level, design complexity, and material quality. A common range is approximately Rs. 1,500 to Rs. 3,000+ per sq ft depending on project scope.",
        },
      },
      {
        "@type": "Question",
        name: "How can I reduce home construction cost without compromising quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can optimize costs through better design planning, clear material specifications, staged procurement, and experienced project management that minimizes rework and delays.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a detailed estimate before starting construction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Design Draft provides a project-specific estimate with scope, specifications, and milestone-based costing for better budget predictability.",
        },
      },
    ],
  },
];

export default function ConstructionCostThrissurPage() {
  return (
    <>
      <Seo
        title="Construction Cost in Thrissur: Home Building Budget Guide | Design Draft"
        description="Understand construction cost in Thrissur with practical pricing ranges, key cost factors, and budget planning tips for residential and commercial projects."
        path="/construction-cost-thrissur"
        keywords={[
          "construction cost in Thrissur",
          "house construction cost Thrissur",
          "cost per sq ft Thrissur",
          "home building budget Kerala",
          "builders estimate Thrissur",
        ]}
        schema={COST_PAGE_SCHEMA}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Construction Cost in Thrissur</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Construction cost in Thrissur depends on site conditions, structural design, materials, and finishing
            choices. For most projects, pricing is best planned in per-square-foot bands with a contingency buffer.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A practical working range for house construction in Thrissur is around Rs. 1,500 to Rs. 3,000+ per sq ft,
            depending on quality level and customization requirements. Complex designs and premium finishes increase
            total budget.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            For exact costing, you need a project-specific estimate with drawings, material specs, and milestone-based
            costing. This avoids hidden surprises and keeps execution aligned with your budget.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/blog/construction-cost-estimation-guide-thrissur" className="rounded-md border border-gray-300 px-5 py-3 text-gray-900 font-semibold hover:bg-gray-50">
              Read Detailed Cost Guide
            </Link>
            <Link href="/contact" className="rounded-md bg-orange-500 px-5 py-3 text-white font-semibold hover:bg-orange-600">
              Request Detailed Estimate
            </Link>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Related Local Construction Resources</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/builders-in-thrissur" className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-50">
                Builders in Thrissur
              </Link>
              <Link href="/services" className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-50">
                Construction and Design Services
              </Link>
              <Link href="/projects" className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-50">
                Completed Projects
              </Link>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="rounded-lg border border-gray-200 p-4">
                <summary className="cursor-pointer font-semibold text-gray-900">What is the average construction cost in Thrissur?</summary>
                <p className="mt-3 text-gray-700">
                  Costs vary by design and material quality, but many projects in Thrissur fall around Rs. 1,500 to Rs. 3,000+ per sq ft.
                </p>
              </details>
              <details className="rounded-lg border border-gray-200 p-4">
                <summary className="cursor-pointer font-semibold text-gray-900">How can I reduce cost without lowering quality?</summary>
                <p className="mt-3 text-gray-700">
                  Use clear specifications, optimize design complexity, and follow milestone-based project management to avoid rework.
                </p>
              </details>
              <details className="rounded-lg border border-gray-200 p-4">
                <summary className="cursor-pointer font-semibold text-gray-900">Can I get a detailed estimate before construction starts?</summary>
                <p className="mt-3 text-gray-700">
                  Yes. We provide project-specific estimates with scope, material assumptions, and milestone-based costing.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


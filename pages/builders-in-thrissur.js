import Link from "next/link";
import Seo from "@/components/Seo";

const BUILDERS_PAGE_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://designdraft.co.in/" },
      { "@type": "ListItem", position: 2, name: "Builders in Thrissur", item: "https://designdraft.co.in/builders-in-thrissur" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who are the trusted builders in Thrissur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Design Draft is a trusted builder in Thrissur with 25+ years of experience in residential and commercial construction, design, and project management.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer turnkey house construction in Thrissur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Design Draft offers turnkey construction in Thrissur including architecture, approvals support, construction execution, interiors, and handover.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get architectural and interior design in one package?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Design Draft provides integrated services for architecture, interior design, and construction so project quality and timelines are managed in one workflow.",
        },
      },
    ],
  },
];

export default function BuildersInThrissurPage() {
  return (
    <>
      <Seo
        title="Best Builders in Thrissur for Homes and Commercial Projects | Design Draft"
        description="Looking for trusted builders in Thrissur? Design Draft provides architectural design, house construction, interiors, and turnkey project execution across Thrissur and Kerala."
        path="/builders-in-thrissur"
        keywords={[
          "builders in Thrissur",
          "best builders in Thrissur",
          "home builders in Thrissur",
          "building contractors in Thrissur",
          "turnkey construction in Thrissur",
        ]}
        schema={BUILDERS_PAGE_SCHEMA}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Trusted Builders in Thrissur</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Design Draft is a Thrissur-based builders and design team with over 25 years of experience. We deliver
            residential homes, commercial buildings, and end-to-end turnkey construction with transparent project
            planning and quality-focused execution.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            If you are comparing builders in Thrissur, our combined architecture, interiors, and construction workflow
            helps reduce delays, improve build quality, and maintain budget control from concept to handover.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-md bg-orange-500 px-5 py-3 text-white font-semibold hover:bg-orange-600">
              Get Free Consultation
            </Link>
            <Link href="/projects" className="rounded-md border border-gray-300 px-5 py-3 text-gray-900 font-semibold hover:bg-gray-50">
              View Completed Projects
            </Link>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Service Areas Near Thrissur</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/developers-in-thrissur" className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-50">
                Developers in Thrissur
              </Link>
              <Link href="/architects-in-thrissur" className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-50">
                Architects in Thrissur
              </Link>
              <Link href="/interior-designers-in-thrissur" className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-50">
                Interior Designers in Thrissur
              </Link>
              <Link href="/contractors-in-thrissur" className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-50">
                Contractors in Thrissur
              </Link>
              <Link href="/builders-in-irinjalakuda" className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-50">
                Builders in Irinjalakuda
              </Link>
              <Link href="/builders-in-chalakudy" className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-50">
                Builders in Chalakudy
              </Link>
              <Link href="/builders-in-kodungallur" className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-50">
                Builders in Kodungallur
              </Link>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="rounded-lg border border-gray-200 p-4">
                <summary className="cursor-pointer font-semibold text-gray-900">Who are the trusted builders in Thrissur?</summary>
                <p className="mt-3 text-gray-700">
                  Design Draft is a trusted builder in Thrissur with 25+ years of residential and commercial construction experience.
                </p>
              </details>
              <details className="rounded-lg border border-gray-200 p-4">
                <summary className="cursor-pointer font-semibold text-gray-900">Do you offer turnkey house construction in Thrissur?</summary>
                <p className="mt-3 text-gray-700">
                  Yes. We offer turnkey services including planning, design, construction, interiors, and final handover.
                </p>
              </details>
              <details className="rounded-lg border border-gray-200 p-4">
                <summary className="cursor-pointer font-semibold text-gray-900">Can I get architecture and interior design in one package?</summary>
                <p className="mt-3 text-gray-700">
                  Yes. Our integrated process combines architecture, interiors, and construction under one team.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


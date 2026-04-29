import Link from "next/link";
import Seo from "@/components/Seo";
import { buildLocalSeoSchemas, localSeoRelatedLinks } from "@/data/localSeoPages";

export default function LocalSeoLandingPage({ page }) {
  const schemas = buildLocalSeoSchemas(page);
  const relatedLinks = localSeoRelatedLinks.filter((link) => link.path !== page.path).slice(0, 7);

  return (
    <>
      <Seo
        title={page.title}
        description={page.metaDescription}
        path={page.path}
        keywords={page.keywords}
        schema={schemas}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600">
              {page.eyebrow}
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">{page.intro}</p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">{page.proof}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/projects"
                className="rounded-md border border-gray-300 px-5 py-3 font-semibold text-gray-900 hover:bg-gray-50"
              >
                View Completed Projects
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900">Why Clients Choose Us</h2>
              <ul className="mt-5 space-y-3 text-gray-700">
                {page.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900">What We Handle</h2>
              <ul className="mt-5 space-y-3 text-gray-700">
                {page.services.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900">Project Workflow</h2>
              <ol className="mt-5 space-y-3 text-gray-700">
                {page.process.map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-14 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="rounded-lg border border-gray-200 p-4">
                  <summary className="cursor-pointer font-semibold text-gray-900">{faq.question}</summary>
                  <p className="mt-3 leading-relaxed text-gray-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-14 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Related Local Services</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

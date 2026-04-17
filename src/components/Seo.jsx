import Head from "next/head";
import { companyInfo } from "@/data/mock";

const SITE_URL = "https://designdraft.co.in";

export default function Seo({
  title,
  description,
  path = "/",
  keywords = [],
  image = "https://images.unsplash.com/photo-1544984243-ec57ea16fe25",
}) {
  const canonical = `${SITE_URL}${path}`;
  const computedKeywords =
    keywords.length > 0 ? keywords.join(", ") : `${companyInfo.name}, Thrissur builders, Kerala architects`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={computedKeywords} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={companyInfo.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script src="https://analytics.ahrefs.com/analytics.js" data-key="n4yPRZ3tRl9yvvTQ5A903g" async></script>
    </Head>
  );
}

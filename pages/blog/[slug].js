import BlogPost from "@/pages/BlogPost";
import Seo from "@/components/Seo";
import { blogPosts } from "@/data/mock";

export default function BlogSlugPage({ post }) {
  const fallbackTitle = "Blog Article | Design Draft";
  const fallbackDescription = "Construction and design insights from Design Draft.";

  const blogPostingSchema = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        author: {
          "@type": "Organization",
          name: post.author,
          url: "https://designdraft.co.in",
        },
        publisher: {
          "@type": "Organization",
          name: "Design Draft",
          url: "https://designdraft.co.in",
          logo: {
            "@type": "ImageObject",
            url: "https://designdraft.co.in/favicon.png",
          },
        },
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://designdraft.co.in/blog/${post.slug}`,
        },
        articleSection: post.category,
        keywords: post.content.match(/### Keywords:[^\n]*/)?.[0]?.replace("### Keywords:", "").trim(),
      }
    : null;

  return (
    <>
      <Seo
        title={post?.metaTitle || post?.title || fallbackTitle}
        description={post?.metaDescription || post?.excerpt || fallbackDescription}
        path={post ? `/blog/${post.slug}` : "/blog"}
        image={post?.image}
        schema={blogPostingSchema}
      />
      <BlogPost />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug) || null;
  return { props: { post } };
}

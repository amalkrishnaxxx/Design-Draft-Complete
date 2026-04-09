import BlogPost from "@/pages/BlogPost";
import Seo from "@/components/Seo";
import { blogPosts } from "@/data/mock";

export default function BlogSlugPage({ post }) {
  const fallbackTitle = "Blog Article | Design Draft";
  const fallbackDescription = "Construction and design insights from Design Draft.";

  return (
    <>
      <Seo
        title={post?.metaTitle || post?.title || fallbackTitle}
        description={post?.metaDescription || post?.excerpt || fallbackDescription}
        path={post ? `/blog/${post.slug}` : "/blog"}
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

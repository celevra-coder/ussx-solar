import Link from "next/link";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {PortableText} from "@portabletext/react";
import Logo from "../../Logo";
import {sanityFetch} from "@/sanity/lib/live";
import {urlFor} from "@/sanity/lib/image";

const POST_QUERY = `*[
  _type == "post" &&
  slug.current == $slug
][0] {
  _id,
  title,
  excerpt,
  publishedAt,
  body,
  mainImage,
  seoTitle,
  seoDescription,
  "author": author->name,
  "categories": categories[]->title
}`;

type BlogPost = {
  _id: string;
  title: string;
  excerpt?: string;
  publishedAt?: string;
  body?: any[];
  mainImage?: unknown;
  seoTitle?: string;
  seoDescription?: string;
  author?: string;
  categories?: string[];
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{slug: string}>;
}): Promise<Metadata> {
  const {slug} = await params;

  const {data: post} = await sanityFetch({
    query: POST_QUERY,
    params: {slug},
  }) as {data: BlogPost | null};

  if (!post) {
    return {
      title: "Статия | USS-X Solar",
    };
  }

  const image = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).fit("crop").url()
    : undefined;

  const description =
    post.seoDescription ||
    post.excerpt ||
    "Полезна информация от USS-X Solar.";

  return {
    title: post.seoTitle || `${post.title} | USS-X Solar`,
    description,
    openGraph: {
      title: post.seoTitle || post.title,
      description,
      type: "article",
      images: image ? [{url: image, width: 1200, height: 630}] : undefined,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{slug: string}>;
}) {
  const {slug} = await params;

  const {data: post} = await sanityFetch({
    query: POST_QUERY,
    params: {slug},
  }) as {data: BlogPost | null};

  if (!post) {
    notFound();
  }

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage)
        .width(1600)
        .url()
    : null;

  return (
    <main className="blog-page blog-article-page">
      <header className="blog-header">
        <Link href="/" className="blog-logo-link" aria-label="USS-X Solar">
          <Logo />
        </Link>

        <nav className="blog-nav">
          <Link href="/">Начало</Link>
          <Link href="/blog">Блог</Link>
          <Link href="/#contact" className="blog-contact-button">
            Свържи се
          </Link>
        </nav>
      </header>

      <article className="blog-article">
        <Link href="/blog" className="blog-back">
          ← Всички статии
        </Link>

        <div className="blog-article-meta">
          {post.categories?.[0] && <span>{post.categories[0]}</span>}

          {post.publishedAt && (
            <time>
              {new Intl.DateTimeFormat("bg-BG", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }).format(new Date(post.publishedAt))}
            </time>
          )}
        </div>

        <h1>{post.title}</h1>

        {post.excerpt && (
          <p className="blog-article-lead">{post.excerpt}</p>
        )}

        {post.author && (
          <div className="blog-article-author">
            Автор: <strong>{post.author}</strong>
          </div>
        )}

        {imageUrl && (
          <img
            className="blog-article-image"
            src={imageUrl}
            alt={post.title}
          />
        )}

        <div className="blog-article-body">
          {post.body && <PortableText value={post.body} />}
        </div>

        <div className="blog-article-bottom">
          <Link href="/blog">← Обратно към блога</Link>
          <Link href="/#contact">Свържи се с USS-X Solar →</Link>
        </div>
      </article>
    </main>
  );
}

import Link from "next/link";
import type {Metadata} from "next";
import Logo from "../Logo";
import {sanityFetch} from "@/sanity/lib/live";
import {urlFor} from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Блог | USS-X Solar",
  description:
    "Полезна информация за фотоволтаични системи, соларно оборудване, монтаж, поддръжка и енергийна ефективност.",
};

const POSTS_QUERY = `*[
  _type == "post" &&
  defined(slug.current) &&
  defined(publishedAt)
] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  "category": categories[0]->title
}`;

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  mainImage?: unknown;
  category?: string;
};

export default async function BlogPage() {
  const {data: posts} = await sanityFetch({
    query: POSTS_QUERY,
  }) as {data: Post[]};

  return (
    <main className="blog-page">
      <header className="blog-header">
        <Link href="/" className="blog-logo-link" aria-label="USS-X Solar">
          <Logo />
        </Link>

        <nav className="blog-nav">
          <Link href="/">Начало</Link>
          <Link href="/blog" className="is-active">Блог</Link>
          <Link href="/#contact" className="blog-contact-button">
            Свържи се
          </Link>
        </nav>
      </header>

      <section className="blog-hero">
        <span className="blog-kicker">USS-X SOLAR / БЛОГ</span>

        <h1>
          Знание за енергията.
          <br />
          <em>Практично и разбираемо.</em>
        </h1>

        <p>
          Полезна информация за фотоволтаични системи, оборудване,
          монтаж, експлоатация и поддръжка.
        </p>
      </section>

      <section className="blog-list">
        {posts.length === 0 ? (
          <div className="blog-empty">
            <span>Блогът е готов.</span>
            <h2>Очаквайте първите статии.</h2>
            <p>
              Публикуваните през USS-X Solar Studio материали ще се появяват
              автоматично тук.
            </p>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post, index) => {
              const imageUrl = post.mainImage
                ? urlFor(post.mainImage)
                    .width(1200)
                    .height(760)
                    .fit("crop")
                    .url()
                : null;

              return (
                <article
                  className={`blog-card ${index === 0 ? "blog-card-featured" : ""}`}
                  key={post._id}
                >
                  <Link href={`/blog/${post.slug}`} className="blog-card-image-link">
                    <div
                      className="blog-card-image"
                      style={
                        imageUrl
                          ? {backgroundImage: `url("${imageUrl}")`}
                          : undefined
                      }
                    >
                      {!imageUrl && <span>USS-X SOLAR</span>}
                    </div>
                  </Link>

                  <div className="blog-card-copy">
                    <div className="blog-card-meta">
                      <span>{post.category || "Полезно"}</span>
                      {post.publishedAt && (
                        <time>
                          {new Intl.DateTimeFormat("bg-BG", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          }).format(new Date(post.publishedAt))}
                        </time>
                      )}
                    </div>

                    <h2>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    {post.excerpt && <p>{post.excerpt}</p>}

                    <Link href={`/blog/${post.slug}`} className="blog-read-more">
                      Прочети статията →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

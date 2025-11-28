import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import articles from "@/data/articles.json";

export default function Article({ article }) {
    if (!article) return <div className="text-center py-20">Article not found</div>;

    return (
        <>
            <Head>
                <title>{article.title} - LiveHindustan Clone</title>
                <meta name="description" content={article.summary} />
            </Head>

            <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-[400px] w-full">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="p-6 md:p-10">
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded uppercase">
                            {article.category}
                        </span>
                        <span className="text-gray-500 text-sm">
                            {new Date(article.timestamp).toLocaleDateString(undefined, {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        {article.title}
                    </h1>

                    <div className="prose max-w-none text-gray-700 leading-relaxed text-lg">
                        <p className="font-semibold text-xl mb-6 text-gray-800">{article.summary}</p>
                        <p>{article.content}</p>
                        {/* Simulating more content */}
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="mt-4">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <div className="mt-10 pt-6 border-t border-gray-100">
                        <Link href="/" className="text-red-600 hover:text-red-800 font-medium flex items-center">
                            &larr; Back to Home
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
}

export async function getStaticPaths() {
    const paths = articles.map((article) => ({
        params: { slug: article.id },
    }));

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    const article = articles.find((a) => a.id === params.slug);

    if (!article) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            article,
        },
        revalidate: 60,
    };
}

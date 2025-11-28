import Head from "next/head";
import NewsCard from "@/components/NewsCard";
import articles from "@/data/articles.json";

export default function Home({ news }) {
  if (!news || news.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700">No news available at the moment.</h2>
        <p className="text-gray-500">Please check back later.</p>
      </div>
    );
  }

  const topStory = news[0];
  const otherStories = news.slice(1);

  return (
    <>
      <Head>
        <title>LiveHindustan Clone - Latest News</title>
        <meta name="description" content="Latest news from India and around the world" />
      </Head>

      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6 border-l-4 border-red-700 pl-4">Top Story</h1>
        {topStory && (
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-64 md:h-auto w-full">
              {/* We use a standard img tag here for simplicity if next/image has domain issues with external placeholders, 
                    but NewsCard uses next/image. Let's try next/image here too but we need to configure domains if they are external.
                    For now, assuming the placeholder domain is allowed or we will fix it. 
                    Actually, let's just use NewsCard logic or a custom hero card.
                */}
              <img
                src={topStory.image}
                alt={topStory.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <span className="text-red-600 font-bold uppercase tracking-wider mb-2">{topStory.category}</span>
              <h2 className="text-3xl font-bold mb-4 hover:text-red-700 transition-colors">
                <a href={`/news/${topStory.id}`}>{topStory.title}</a>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">{topStory.summary}</p>
              <div className="text-gray-400 text-sm">
                {new Date(topStory.timestamp).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-red-700 pl-4">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherStories.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  // In a real app, fetch from API
  return {
    props: {
      news: articles,
    },
    revalidate: 60, // ISR
  };
}

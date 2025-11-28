import Image from 'next/image';
import Link from 'next/link';

export default function NewsCard({ article }) {
    return (
        <Link href={`/news/${article.id}`} className="group">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-48 w-full">
                    <Image
                        src={article.image || "https://placehold.co/600x400/png?text=No+Image"}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                    <span className="text-xs font-semibold text-red-600 mb-2 uppercase tracking-wide">
                        {article.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-red-700 transition-colors">
                        {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 flex-grow">
                        {article.summary}
                    </p>
                    <div className="mt-4 text-xs text-gray-400">
                        {new Date(article.timestamp).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </div>
                </div>
            </div>
        </Link>
    );
}

import Link from 'next/link';
import { supabase } from '../lib/supabaseClient';

export default async function BlogContent() {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, title, excerpt, post_image, created_at')
    .order('created_at', { ascending: false })
    .limit(6);

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Unable to load blog posts</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {posts?.map((post) => (
          <Link 
            href={`/blog/${post.id}`} 
            key={post.id}
            className="group hover:shadow-lg transition-shadow duration-200 rounded-lg overflow-hidden"
          >
            <article className="bg-white rounded-lg overflow-hidden border border-gray-200">
              {post.post_image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.post_image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <p className="text-sm text-gray-500">
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}


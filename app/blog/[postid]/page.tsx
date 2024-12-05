import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from '../../../components/BlogPost';
import { supabase } from '../../../lib/supabaseClient';

interface BlogPostPageProps {
  params: Promise<{ postid: string }>;
}

export async function generateStaticParams() {
  try {
    const { data: posts, error } = await supabase.from('posts').select('id');

    if (error) {
      console.error('Error fetching post IDs:', error);
      return [];
    }

    return posts.map((post) => ({
      postid: post.id.toString(),
    }));
  } catch (err) {
    console.error('Unexpected error in generateStaticParams:', err);
    return [];
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { postid } = await params;

  try {
    const { data: post, error } = await supabase
      .from('posts')
      .select('id, title, content, post_image, created_at, excerpt')
      .eq('id', postid)
      .single();

    if (error || !post) {
      return (
        <main className="min-h-screen bg-gray-50">
          <Header />
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600">
              We couldn&apos;t find the blog post you&apos;re looking for. Please try again later.
            </p>
          </div>
          <Footer />
        </main>
      );
    }

    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto py-12">
          <BlogPost post={post} />
        </div>
        <Footer />
      </main>
    );
  } catch (err) {
    console.error('Unexpected error fetching blog post:', err);
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Error</h1>
          <p className="text-gray-600">
            Something went wrong. Please try again later.
          </p>
        </div>
        <Footer />
      </main>
    );
  }
}

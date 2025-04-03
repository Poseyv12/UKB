import { Metadata } from 'next';
import BlogPostContent from '@/components/BlogPostContent';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RecentBlogPosts from '@/components/RecentBlogPosts';

export const metadata: Metadata = {
  title: 'Blog - Ultimate Kitchen & Bath',
  description: 'Read our blog for tips, tricks, and insights on kitchen and bath remodeling in Boca Raton, FL.',
};

// Revalidate the page every hour
export const revalidate = 3600;

export default async function BlogPostPage({ params }: { params: Promise<{ postid: string }> }) {
  const { postid } = await params;
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <BlogPostContent slug={postid} />
        <div className="max-w-5xl mx-auto px-8 py-12">
          <RecentBlogPosts />
        </div>
      </main>
      <Footer />
    </>
  );
}

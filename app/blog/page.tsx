import { Metadata } from 'next';
import BlogList from '@/components/BlogList';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'UKB Blog - Ultimate Kitchen & Bath',
  description: 'Read our blog for tips, tricks, and insights on kitchen and bath remodeling in Boca Raton, FL.',
};

// Revalidate the page every hour
export const revalidate = 3600;

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-16 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">UKB Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the latest trends, tips, and insights for your kitchen and bathroom remodeling projects.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-12">
          <BlogList />
        </div>
      </main>
      <Footer />
    </>
  );
}


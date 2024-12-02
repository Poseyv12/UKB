import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    title: '10 Kitchen Design Trends for 2023',
    excerpt: 'Discover the hottest kitchen design trends that are taking the industry by storm this year.',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: 'May 15, 2023',
    author: 'Jane Smith',
  },
  {
    title: 'How to Choose the Perfect Bathroom Fixtures',
    excerpt: 'Learn the key factors to consider when selecting fixtures for your bathroom renovation project.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    date: 'April 28, 2023',
    author: 'John Doe',
  },
  {
    title: 'The Benefits of Open Concept Living Spaces',
    excerpt: 'Explore the advantages of open concept designs and how they can transform your home.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2100&q=80',
    date: 'April 10, 2023',
    author: 'Mike Johnson',
  },
]

export default function BlogContent() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">UK&B Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
                <Link href="#" className="mt-4 inline-block text-blue-600 hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


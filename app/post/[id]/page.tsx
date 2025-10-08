'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getPosts } from '../../admin/utils/storage';
import { Post } from '../../admin/types';
import { format } from 'date-fns';
import toast, { Toaster } from 'react-hot-toast';

export default function PostDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const postId = params.id as string;
    const allPosts = getPosts().filter((p) => p.status === 'published');
    const foundPost = allPosts.find((p) => p.id === postId);

    if (foundPost) {
      setPost(foundPost);

      // Get related posts from same category
      const related = allPosts
        .filter((p) => p.id !== postId && p.category === foundPost.category)
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [params.id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post?.title,
          text: post?.shortDescription,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <button
            onClick={() => router.push('/latest-news')}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Back to News
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Toaster position="top-center" />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        {/* Post Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-1 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              <Tag className="w-4 h-4" />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{format(new Date(post.publishedDate), 'MMMM dd, yyyy')}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>

          {/* Short Description */}
          <p className="text-xl text-gray-700 leading-relaxed">{post.shortDescription}</p>
        </motion.div>

        {/* Featured Image */}
        {post.thumbnail && post.thumbnail !== '/images/posts/default.jpg' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12 rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </motion.div>
        )}

        {/* Post Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none mb-16"
        >
          <div
            className="text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.75',
            }}
          />
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="border-t border-gray-200 pt-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  onClick={() => router.push(`/post/${relatedPost.id}`)}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  {relatedPost.thumbnail && relatedPost.thumbnail !== '/images/posts/default.jpg' ? (
                    <img
                      src={relatedPost.thumbnail}
                      alt={relatedPost.title}
                      className="w-full h-40 object-cover"
                    />
                  ) : (
                    <div className="w-full h-40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Tag className="w-12 h-12 text-white/50" />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.shortDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </article>

      <Footer />
    </div>
  );
}


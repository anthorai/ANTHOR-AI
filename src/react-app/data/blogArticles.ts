export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  slug: string;
}

export const aiNewsArticles: BlogArticle[] = [
  {
    id: '1',
    title: 'How GPT-5 is Transforming AI Automation in 2025',
    excerpt: 'Explore the groundbreaking capabilities of GPT-5 and how it\'s revolutionizing automation across industries, from content creation to advanced analytics.',
    author: 'ANKIT RATHOR',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'AI News',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop',
    tags: ['GPT-5', 'AI Automation', 'Innovation'],
    slug: 'how-gpt5-transforming-ai-automation-2025'
  },
  {
    id: '2',
    title: 'Top 10 AI Startups Revolutionizing Business',
    excerpt: 'Discover the most innovative AI startups of 2025 that are disrupting traditional business models and creating new market opportunities.',
    author: 'Sarah Chen',
    date: 'January 12, 2025',
    readTime: '10 min read',
    category: 'AI News',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=300&fit=crop',
    tags: ['Startups', 'Innovation', 'Business'],
    slug: 'top-10-ai-startups-revolutionizing-business'
  },
  {
    id: '3',
    title: 'The Future of Generative AI: Beyond Text and Image',
    excerpt: 'Generative AI is evolving beyond text and images. Learn about the latest developments in video generation, 3D modeling, and multi-modal AI systems.',
    author: 'Michael Torres',
    date: 'January 8, 2025',
    readTime: '12 min read',
    category: 'AI News',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=300&fit=crop',
    tags: ['Generative AI', 'Future Tech', 'Innovation'],
    slug: 'future-generative-ai-beyond-text-image'
  },
  {
    id: '4',
    title: 'How Anthor AI\'s ZYRA Suite Sets a New Benchmark for Shopify AI',
    excerpt: 'ZYRA by Anthor AI is redefining what\'s possible with AI-powered Shopify optimization. See how it compares to industry standards.',
    author: 'ANKIT RATHOR',
    date: 'January 5, 2025',
    readTime: '7 min read',
    category: 'AI News',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop',
    tags: ['ZYRA', 'Shopify', 'AI Innovation'],
    slug: 'zyra-suite-benchmark-shopify-ai'
  },
  {
    id: '5',
    title: 'Machine Learning Model Optimization Strategies',
    excerpt: 'Deep dive into advanced techniques for optimizing ML models, including quantization, pruning, and efficient training methods.',
    author: 'ANKIT RATHOR',
    date: 'December 28, 2024',
    readTime: '9 min read',
    category: 'AI News',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop',
    tags: ['Machine Learning', 'Optimization', 'Performance'],
    slug: 'machine-learning-model-optimization-strategies'
  },
  {
    id: '6',
    title: 'AI Ethics and Responsible Development in 2025',
    excerpt: 'As AI becomes more powerful, ethical considerations are paramount. Explore the latest frameworks for responsible AI development.',
    author: 'Dr. Emily Watson',
    date: 'December 22, 2024',
    readTime: '11 min read',
    category: 'AI News',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop',
    tags: ['AI Ethics', 'Responsibility', 'Governance'],
    slug: 'ai-ethics-responsible-development-2025'
  }
];

export const productUpdatesArticles: BlogArticle[] = [
  {
    id: '7',
    title: 'Introducing Anthor Guide AI 2.0 — Smarter, Faster, Simpler',
    excerpt: 'We\'re excited to announce Anthor Guide AI 2.0 with enhanced natural language understanding, faster response times, and a streamlined interface.',
    author: 'Anthor AI Team',
    date: 'January 18, 2025',
    readTime: '6 min read',
    category: 'Product Updates',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
    tags: ['Anthor Guide AI', 'Update', 'Features'],
    slug: 'anthor-guide-ai-2-0-smarter-faster-simpler'
  },
  {
    id: '8',
    title: 'ZYRA\'s SEO Intelligence Feature Gets Major Upgrade',
    excerpt: 'ZYRA now includes advanced SEO intelligence with real-time keyword optimization, competitor analysis, and automated content suggestions.',
    author: 'Dev Team',
    date: 'January 14, 2025',
    readTime: '5 min read',
    category: 'Product Updates',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop',
    tags: ['ZYRA', 'SEO', 'Update'],
    slug: 'zyra-seo-intelligence-major-upgrade'
  },
  {
    id: '9',
    title: 'New Cyberwave UI Enhancements for Better User Flow',
    excerpt: 'Experience our redesigned Cyberwave interface with improved navigation, faster load times, and a more intuitive user experience.',
    author: 'Design Team',
    date: 'January 10, 2025',
    readTime: '4 min read',
    category: 'Product Updates',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=300&fit=crop',
    tags: ['UI/UX', 'Design', 'Enhancement'],
    slug: 'cyberwave-ui-enhancements-better-user-flow'
  },
  {
    id: '10',
    title: 'Upcoming Anthor AI Analytics Platform: What to Expect',
    excerpt: 'Get a sneak peek at our upcoming analytics platform featuring predictive insights, custom dashboards, and advanced reporting capabilities.',
    author: 'Product Team',
    date: 'January 6, 2025',
    readTime: '7 min read',
    category: 'Product Updates',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
    tags: ['Analytics', 'Preview', 'Features'],
    slug: 'anthor-ai-analytics-platform-what-to-expect'
  },
  {
    id: '11',
    title: 'ZYRA 2.0: Enhanced Analytics and Predictive Intelligence',
    excerpt: 'Announcing major updates to ZYRA with advanced analytics, predictive modeling, and new automation features for Shopify merchants.',
    author: 'Anthor AI Team',
    date: 'December 10, 2024',
    readTime: '5 min read',
    category: 'Product Updates',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop',
    tags: ['ZYRA', 'Update', 'Analytics', 'Features'],
    slug: 'zyra-2-0-enhanced-analytics-predictive-intelligence'
  }
];

export const businessInsightsArticles: BlogArticle[] = [
  {
    id: '12',
    title: 'How AI Automation Boosts Enterprise Efficiency by 60%',
    excerpt: 'Real-world case studies showing how enterprise organizations achieved 60% efficiency gains through strategic AI automation implementation.',
    author: 'ANKIT RATHOR',
    date: 'January 16, 2025',
    readTime: '10 min read',
    category: 'Business Insights',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop',
    tags: ['Automation', 'Efficiency', 'Enterprise'],
    slug: 'ai-automation-boosts-enterprise-efficiency-60-percent'
  },
  {
    id: '13',
    title: '5 Ways AI is Reshaping E-commerce in 2025',
    excerpt: 'From personalized shopping experiences to inventory optimization, discover how AI is transforming the e-commerce landscape.',
    author: 'Jennifer Liu',
    date: 'January 13, 2025',
    readTime: '8 min read',
    category: 'Business Insights',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop',
    tags: ['E-commerce', 'AI Trends', 'Innovation'],
    slug: 'five-ways-ai-reshaping-ecommerce-2025'
  },
  {
    id: '14',
    title: 'Scaling with AI: Lessons from Anthor AI\'s Growth Strategy',
    excerpt: 'Learn the key strategies and lessons from Anthor AI\'s journey in scaling AI-powered solutions across global markets.',
    author: 'ANKIT RATHOR',
    date: 'January 9, 2025',
    readTime: '12 min read',
    category: 'Business Insights',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
    tags: ['Scaling', 'Growth', 'Strategy'],
    slug: 'scaling-with-ai-lessons-anthor-growth-strategy'
  },
  {
    id: '15',
    title: 'The Future of Work: AI-Powered Business Models',
    excerpt: 'Explore emerging business models powered by AI and how they\'re reshaping industries from healthcare to finance.',
    author: 'Marcus Johnson',
    date: 'January 4, 2025',
    readTime: '9 min read',
    category: 'Business Insights',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=300&fit=crop',
    tags: ['Future of Work', 'Business Models', 'AI'],
    slug: 'future-work-ai-powered-business-models'
  },
  {
    id: '16',
    title: 'Building Scalable AI Solutions: Lessons from 1000+ Implementations',
    excerpt: 'Key insights and best practices learned from implementing AI solutions across diverse industries and business sizes.',
    author: 'ANKIT RATHOR',
    date: 'December 5, 2024',
    readTime: '12 min read',
    category: 'Business Insights',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop',
    tags: ['AI', 'Scalability', 'Best Practices', 'Enterprise'],
    slug: 'building-scalable-ai-solutions-1000-implementations'
  },
  {
    id: '17',
    title: 'ROI Analysis: Measuring AI Implementation Success',
    excerpt: 'A comprehensive guide to measuring and optimizing ROI from AI implementations, with real metrics and benchmarks.',
    author: 'Analytics Team',
    date: 'December 3, 2024',
    readTime: '10 min read',
    category: 'Business Insights',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
    tags: ['ROI', 'Analytics', 'Metrics'],
    slug: 'roi-analysis-measuring-ai-implementation-success'
  }
];

export const allArticles = [
  ...aiNewsArticles,
  ...productUpdatesArticles,
  ...businessInsightsArticles
];

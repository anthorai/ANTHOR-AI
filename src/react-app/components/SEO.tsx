import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  author?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = '/assets/anthor-logo.png',
  ogType = 'website',
  keywords = 'AI SaaS, business automation software, AI workflow automation, AI for eCommerce, AI business solutions',
  author = 'Ankit Rathor',
  twitterCard = 'summary_large_image',
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | Anthor AI`;
    document.title = fullTitle;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      
      link.href = href;
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    if (canonical) {
      updateLinkTag('canonical', canonical);
    }

    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'Anthor AI', true);
    
    if (canonical) {
      updateMetaTag('og:url', canonical, true);
    }

    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:creator', '@AnthorAI');
    updateMetaTag('twitter:site', '@AnthorAI');

    updateMetaTag('theme-color', '#0ea5e9');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
  }, [title, description, canonical, ogImage, ogType, keywords, author, twitterCard, noindex]);

  return null;
}

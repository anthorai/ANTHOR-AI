import { useEffect } from 'react';

interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo: string;
  description: string;
  founder?: string;
  foundingDate?: string;
  address?: {
    street?: string;
    city: string;
    state: string;
    country: string;
  };
  socialMedia?: string[];
}

export function OrganizationSchema({
  name,
  url,
  logo,
  description,
  founder,
  foundingDate,
  address,
  socialMedia = []
}: OrganizationSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": name,
      "url": url,
      "logo": logo,
      "description": description,
      ...(founder && { "founder": { "@type": "Person", "name": founder } }),
      ...(foundingDate && { "foundingDate": foundingDate }),
      ...(address && {
        "address": {
          "@type": "PostalAddress",
          ...address.street && { "streetAddress": address.street },
          "addressLocality": address.city,
          "addressRegion": address.state,
          "addressCountry": address.country
        }
      }),
      ...(socialMedia.length > 0 && { "sameAs": socialMedia })
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'organization-schema';
    
    const existing = document.getElementById('organization-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('organization-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [name, url, logo, description, founder, foundingDate, address, socialMedia]);

  return null;
}

interface ProductSchemaProps {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export function ProductSchema({
  name,
  description,
  image,
  brand = "Anthor AI",
  offers,
  aggregateRating
}: ProductSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": name,
      "description": description,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      ...(image && { "image": image }),
      "provider": {
        "@type": "Organization",
        "name": brand
      },
      ...(offers && {
        "offers": {
          "@type": "Offer",
          ...offers.price && { "price": offers.price },
          ...offers.priceCurrency && { "priceCurrency": offers.priceCurrency },
          "availability": offers.availability || "https://schema.org/InStock"
        }
      }),
      ...(aggregateRating && {
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": aggregateRating.ratingValue,
          "reviewCount": aggregateRating.reviewCount
        }
      })
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'product-schema';
    
    const existing = document.getElementById('product-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('product-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [name, description, image, brand, offers, aggregateRating]);

  return null;
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image?: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  publisher?: string;
}

export function ArticleSchema({
  headline,
  description,
  image,
  author,
  datePublished,
  dateModified,
  publisher = "Anthor AI"
}: ArticleSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": headline,
      "description": description,
      ...(image && { "image": image }),
      "author": {
        "@type": "Person",
        "name": author
      },
      "datePublished": datePublished,
      "dateModified": dateModified || datePublished,
      "publisher": {
        "@type": "Organization",
        "name": publisher,
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}/assets/anthor-logo.png`
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'article-schema';
    
    const existing = document.getElementById('article-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('article-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [headline, description, image, author, datePublished, dateModified, publisher]);

  return null;
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'faq-schema';
    
    const existing = document.getElementById('faq-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('faq-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [faqs]);

  return null;
}

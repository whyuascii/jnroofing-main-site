
import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  keywords?: string;
  location?: string;
}

const SEOHead = ({
  title,
  description,
  canonicalUrl = window.location.href,
  ogType = 'website',
  ogImage = '/images/dura-verde-og-image.jpg',
  twitterCard = 'summary_large_image',
  keywords = 'roofing, roof repair, Florida roofing, roof installation',
  location = 'Florida',
}: SEOProps) => {
  const siteTitle = `DuraVerde Roofing | ${title}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${keywords}, ${location} roofing, professional roofing ${location}`} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="DuraVerde Roofing" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Geolocation Meta Tags */}
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content={location} />
    </Helmet>
  );
};

export default SEOHead;

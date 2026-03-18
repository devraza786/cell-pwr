import { Helmet } from 'react-helmet-async';

interface MetaHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
  children?: React.ReactNode;
}

const MetaHead: React.FC<MetaHeadProps> = ({
  title = 'Cell PWR - Premium Power & Wellness Products',
  description = 'Discover Cell PWR\'s premium power and wellness products designed to enhance your energy and performance.',
  keywords = 'power products, wellness, energy, performance enhancement',
  canonicalUrl = 'https://cellpwr.com',
  ogImage = 'https://cellpwr.com/og-image.jpg',
  ogType = 'website',
  twitterHandle = '@CellPWR',
  children,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Cell PWR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {children}
    </Helmet>
  );
};

export default MetaHead;

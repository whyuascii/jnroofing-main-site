
const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Define your site URLs
const urls = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact-us', changefreq: 'monthly', priority: 0.7 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/gallery', changefreq: 'monthly', priority: 0.6 },
  { url: '/services/residential-roofing', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/commercial-roofing', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/roof-repairs', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/roof-maintenance', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/roof-inspections', changefreq: 'monthly', priority: 0.7 }
];

async function generateSitemap() {
  try {
    // Create a sitemap stream
    const sitemapStream = new SitemapStream({ 
      hostname: 'https://www.duraverderoofing.com' 
    });

    // Add all URLs to the sitemap
    urls.forEach(item => {
      sitemapStream.write({
        url: item.url,
        changefreq: item.changefreq,
        priority: item.priority,
        lastmod: new Date().toISOString()
      });
    });

    // End the stream
    sitemapStream.end();

    // Generate the XML
    const sitemap = await streamToPromise(sitemapStream);
    
    // Write the sitemap to the public directory
    fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap.toString());
    
    console.log('Sitemap generated successfully!');

    // Ping search engines
    pingSearchEngines();
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

function pingSearchEngines() {
  const sitemapUrl = 'https://www.duraverderoofing.com/sitemap.xml';
  const engines = [
    `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
  ];

  engines.forEach(url => {
    try {
      https.get(url, (res) => {
        console.log(`Pinged ${url} - Status code: ${res.statusCode}`);
      }).on('error', (err) => {
        console.error(`Error pinging ${url}:`, err);
      });
    } catch (error) {
      console.error(`Error pinging search engines:`, error);
    }
  });
}

// Run the sitemap generation
generateSitemap();

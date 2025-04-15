
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Service' | 'FAQPage' | 'Review';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  let schemaData: any;

  switch (type) {
    case 'LocalBusiness':
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'RoofingContractor',
        name: 'DuraVerde J&N Roofing and Construction',
        url: 'https://www.duraverderoofing.com',
        logo: 'https://www.duraverderoofing.com/logo.jpg',
        telephone: '+14073000474',
        description: 'Professional roofing services for residential and commercial properties throughout Florida.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: data.streetAddress || 'Serving all of Florida',
          addressLocality: data.city || 'Orlando',
          addressRegion: 'FL',
          postalCode: data.postalCode || '',
          addressCountry: 'US'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: data.latitude || '28.5384',
          longitude: data.longitude || '-81.3789'
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '15:00'
          }
        ],
        priceRange: '$$',
        ...data
      };
      break;
      
    case 'Service':
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: data.serviceType,
        provider: {
          '@type': 'RoofingContractor',
          name: 'DuraVerde J&N Roofing and Construction',
          url: 'https://www.duraverderoofing.com'
        },
        areaServed: {
          '@type': 'State',
          name: 'Florida'
        },
        description: data.description,
        ...data
      };
      break;
      
    case 'FAQPage':
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.questions.map((q: any) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.answer
          }
        }))
      };
      break;
      
    case 'Review':
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Review',
        itemReviewed: {
          '@type': 'RoofingContractor',
          name: 'DuraVerde J&N Roofing and Construction'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: data.rating,
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: data.author
        },
        reviewBody: data.content,
        ...data
      };
      break;
      
    default:
      return null;
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;

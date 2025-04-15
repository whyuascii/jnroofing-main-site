
import React from 'react';

interface GoogleMapProps {
  title?: string;
  description?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ 
  title = "Find DuraVerde Roofing",
  description = "We serve all of Florida with quality roofing services"
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {title && (
        <div className="p-4 bg-verde-50">
          <h3 className="text-xl font-semibold text-verde-800">{title}</h3>
          {description && <p className="text-gray-600 mt-2">{description}</p>}
        </div>
      )}
      <div className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224444.55103473527!2d-81.47781599999999!3d28.4812625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1649946944320!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DuraVerde Roofing Location"
        />
      </div>
    </div>
  );
};

export default GoogleMap;

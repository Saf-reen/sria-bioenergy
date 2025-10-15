import React from "react";
import { offices } from "@/data/mockData";

const MapComponent: React.FC = () => {
  const src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.280746844092!2d78.3542804!3d17.4941067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9398a74e6225%3A0x9ab33bfbaff07f32!2sSria%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1760521105383!5m2!1sen!2sin";

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-full">
        <iframe
          title="Sria Infotech Map"
          src={src}
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-md p-4 rounded-lg shadow-lg">
        <h3 className="font-semibold mb-2">Our Global Offices</h3>
        <p className="text-sm text-muted-foreground">{offices.length} offices worldwide</p>
      </div>
    </div>
  );
};

export default MapComponent;

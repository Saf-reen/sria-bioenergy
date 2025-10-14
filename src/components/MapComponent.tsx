import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { offices } from "@/data/mockData";

// Note: Replace with actual Mapbox token
const MAPBOX_TOKEN = "pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUifQ.example";

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedOffice, setSelectedOffice] = useState<typeof offices[0] | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [20, 30],
      zoom: 1.5,
      projection: "globe" as any
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Add markers for each office
    offices.forEach((office) => {
      const el = document.createElement("div");
      el.className = "w-8 h-8 bg-primary rounded-full border-4 border-primary-foreground cursor-pointer hover:scale-110 transition-transform";
      
      const marker = new mapboxgl.Marker(el)
        .setLngLat([office.lng, office.lat])
        .addTo(map.current!);

      el.addEventListener("click", () => {
        setSelectedOffice(office);
        map.current?.flyTo({
          center: [office.lng, office.lat],
          zoom: 8,
          duration: 2000
        });
      });
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
      
      {selectedOffice && (
        <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-80 bg-background/95 backdrop-blur-md p-6 rounded-lg shadow-xl animate-fade-in">
          <h3 className="text-xl font-bold mb-2">{selectedOffice.name}</h3>
          <p className="text-muted-foreground mb-4">
            {selectedOffice.employees} employees
          </p>
          <button
            onClick={() => setSelectedOffice(null)}
            className="text-sm text-primary hover:underline"
          >
            Close
          </button>
        </div>
      )}

      <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-md p-4 rounded-lg shadow-lg">
        <h3 className="font-semibold mb-2">Our Global Offices</h3>
        <p className="text-sm text-muted-foreground">
          {offices.length} offices worldwide
        </p>
      </div>
    </div>
  );
};

export default MapComponent;

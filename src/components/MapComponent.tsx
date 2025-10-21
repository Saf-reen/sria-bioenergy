import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { offices } from "@/data/mockData";

// Move icon URL fixes to a client-only effect (avoids SSR/window issues)

type MapProps = {
  selectedOfficeId?: number | null;
};

const RecenterAndOpen: React.FC<{ officeId?: number | null }> = ({ officeId }) => {
  const map = useMap();
  useEffect(() => {
    if (!officeId) return;
    const office = offices.find((o) => o.id === officeId);
    if (!office) return;
    map.flyTo([office.lat, office.lng], 8, { duration: 1.2 });

    // open popup - find matching layer by position
    const targetLatLng = L.latLng(office.lat, office.lng);
    map.eachLayer((layer: any) => {
      if (layer.getLatLng && layer.getLatLng().equals(targetLatLng) && layer.openPopup) {
        layer.openPopup();
      }
    });
  }, [officeId, map]);
  return null;
};

const MapComponent: React.FC<MapProps> = ({ selectedOfficeId = null }) => {
  const defaultCenter: [number, number] = [offices[0].lat, offices[0].lng];
  // no imperative map ref required for current behavior

  useEffect(() => {
    // Set default marker icons using Vite-resolved URLs to avoid bundler issues
    try {
      const base = new URL("/", import.meta.url).origin;
      const iconRetina = base + "/node_modules/leaflet/dist/images/marker-icon-2x.png";
      const iconUrl = base + "/node_modules/leaflet/dist/images/marker-icon.png";
      const shadowUrl = base + "/node_modules/leaflet/dist/images/marker-shadow.png";
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetina,
        iconUrl: iconUrl,
        shadowUrl: shadowUrl,
      });
    } catch (e) {
      // ignore - fallback to default if resolution fails
    }
  }, []);

  return (
    <motion.div id="global-map" className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.6 }}
    >
      <MapContainer center={defaultCenter} zoom={4} className="w-full h-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {offices.map((office) => (
          <Marker key={office.id} position={[office.lat, office.lng]}>
            <Popup>
              <div className="font-bold">{office.name}</div>
              <div className="text-sm text-muted-foreground">{office.address}</div>
              <div className="text-sm mt-1">{office.phone} • {office.email}</div>
            </Popup>
          </Marker>
        ))}
        <RecenterAndOpen officeId={selectedOfficeId} />
      </MapContainer>
    </motion.div>
  );
};

export default MapComponent;

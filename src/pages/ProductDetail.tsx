import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/mockData";
import heroImage from "@/assets/biomass-pellets.jpg";
import ProductCard from "@/components/ProductCard";
import ProductsCarousel from "@/components/ProductsCarousel";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h2 className="section-title">Product Not Found</h2>
        <p className="text-muted-foreground">We couldn't find that product.</p>
        <Link to="/products" className="inline-flex items-center gap-2 mt-6">
          <ArrowLeft /> Back to products
        </Link>
      </div>
    );
  }

  // use a fixed light/beige hero background for all product pages
  const heroBg = "#efe8e0"; // light beige — change if you prefer a different color
  const isDark = false; // background is light, so use dark text

  return (
    <div className="min-h-screen">
      {/* Product hero: left title/desc, center image, right specs */}
      <section className="relative overflow-hidden" style={{ backgroundColor: heroBg }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
            {/* Left: title / description */}
            <div className="lg:col-span-1">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-foreground">{product.name}</h1>
              <p className="max-w-xl mb-8 text-muted-foreground">{product.description}</p>
            </div>

            {/* Center: tall product image (use product.heroImage if available so PNGs with transparency work) */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[360px] md:max-w-[420px] lg:max-w-[540px]">
                <img src={(product as any).heroImage || product.image || heroImage} alt={product.name} className="w-full h-[520px] object-contain mx-auto bg-transparent" />
              </div>
            </div>

            {/* Right: specs displayed large */}
            <div className="lg:col-span-1 text-foreground">
              <div className="space-y-8">
                {product.specs && Object.entries(product.specs).map(([k, v]) => (
                  <div key={k} className="border-b border-white/30 pb-6">
                    <div className="text-4xl lg:text-5xl font-light tracking-tight">{v}</div>
                    <div className="text-sm mt-2 capitalize text-muted-foreground">{k.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}

                <p className="text-xs text-white/60 mt-6">All specifications, figures, and images presented on this website are for illustrative and informational purposes only.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details panels: Origin / Availability / Sustainability (product-specific) */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="section-title mb-6">Product Details</h2>
        <DetailsPanels product={product} />
      </section>

      {/* Other products carousel (exclude current) - match Home: arrows + no native scrollbar */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-6">Other Products</h3>
        <ProductsCarousel hideScrollbar items={products.filter((p) => p.id !== product.id)} />
      </section>
    </div>
  );
};

export default ProductDetail;


/* ---------------- CarouselPreview component (local) ---------------- */
function CarouselPreview({ currentId }: { currentId: number | string }) {
  const idx = products.findIndex((p) => String(p.id) === String(currentId));
  const len = products.length;
  // start window so current product is the first (large) panel
  const initialWindow = useMemo(() => {
    if (idx === -1) return [0, 1 % len, (2 % len)];
    return [idx, (idx + 1) % len, (idx + 2) % len];
  }, [idx, len]);

  const [windowStart, setWindowStart] = useState<number>(initialWindow[0]);

  const getWindow = (start: number) => [start, (start + 1) % len, (start + 2) % len];

  const windowIds = getWindow(windowStart);

  const handleNext = () => {
    setWindowStart((s) => (s + 1) % len);
  };

  const handlePrev = () => {
    setWindowStart((s) => (s - 1 + len) % len);
  };

  // if fewer than 3 products, just render what's available
  if (len === 0) return null;

  return (
    <div className="relative">
      <div className="flex items-stretch gap-4">
        {windowIds.map((i, index) => {
          const p = products[i];
          const isActive = index === 0; // first one is displayed large

          const variants = {
            active: { scale: 1, opacity: 1, zIndex: 2, x: 0 },
            side: { scale: 0.88, opacity: 0.9, zIndex: 1, x: isActive ? 0 : (index === 1 ? 40 : -40) }
          } as const;

          // panel-specific content (title + body) - product can provide overrides via fields if needed
          const panelTitles = ["Origin", "Availability", "Sustainability"];
          const panelBodies = [
            // Origin fallback: product.description (or a shorter variant)
            p.description || "",
            // Availability fallback: generic text
            (p as any).availability || "This product is available through our network of suppliers and depends on seasonal and regional supply conditions.",
            // Sustainability fallback: generic sustainability text
            (p as any).sustainability || "We prioritize sustainable sourcing and traceability for this product across the supply chain."
          ];

          const title = panelTitles[index] || p.name;
          const body = panelBodies[index] || p.description;

          return (
            <motion.div
              layout
              key={p.id}
              initial={isActive ? "active" : "side"}
              animate={isActive ? "active" : "side"}
              variants={variants}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
              className={`flex-shrink-0 overflow-hidden rounded-lg ${isActive ? "w-2/3 lg:w-3/5" : "w-1/6 lg:w-1/6"} cursor-pointer`}
              onClick={() => setWindowStart(i)}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-full">
                <img src={p.image || heroImage} alt={p.name} className="w-full h-80 object-cover" />

                {/* show content card for active panel only (center) to match design */}
                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 }}
                    className="absolute left-4 bottom-4 bg-white px-6 py-6 rounded-2xl max-w-lg shadow-lg"
                  >
                    <h4 className="text-xl font-semibold mb-2">{title}</h4>
                    <p className="text-sm text-muted-foreground">{body}</p>
                  </motion.div>
                ) : (
                  // for side panels show vertical rotated label for quick access
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/95 rotate-[-90deg] origin-left text-sm font-medium">
                    {title}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* navigation arrows */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <motion.button whileHover={{ scale: 1.06 }} onClick={handlePrev} aria-label="previous" className="p-3 rounded-full bg-muted hover:bg-muted/80">
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
        <motion.button whileHover={{ scale: 1.06 }} onClick={handleNext} aria-label="next" className="p-3 rounded-full bg-muted hover:bg-muted/80">
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}

/* ---------------- DetailsPanels component (product-specific) ---------------- */
function DetailsPanels({ product }: { product: any }) {
  const panels = [
    { key: 'origin', title: 'Origin', body: product.origin || product.description || '' },
    { key: 'availability', title: 'Availability', body: product.availability || '' },
    { key: 'sustainability', title: 'Sustainability', body: product.sustainability || '' },
  ];

  // Desktop: keep the expanding panels behavior (open one large, two collapsed) — only shown on lg+
  const [open, setOpen] = useState<string>('origin');

  // Mobile: carousel window behavior (small screens)
  const len = panels.length;
  const [windowStart, setWindowStart] = useState<number>(0);
  const getWindow = (start: number) => [start, (start + 1) % len, (start + 2) % len];
  const windowIds = getWindow(windowStart);
  const handleNext = () => setWindowStart((s) => (s + 1) % len);
  const handlePrev = () => setWindowStart((s) => (s - 1 + len) % len);

  return (
    <>
      {/* Desktop expanding panels (original behavior) */}
      <div className="hidden lg:flex flex-row gap-6 items-stretch w-full">
        {panels.map((panel) => {
          const isOpen = open === panel.key;

          return (
            <motion.div
              key={panel.key}
              layout
              initial={{ borderRadius: 16 }}
              whileHover={{ scale: isOpen ? 1.01 : 1.005 }}
              transition={{ type: 'spring', stiffness: 160, damping: 20 }}
              // open ~80%, closed ~10% each on desktop
              className={`relative overflow-hidden rounded-2xl bg-cover bg-center shadow flex-shrink-0 ${isOpen ? 'basis-[80%] min-h-[80vh]' : 'basis-[10%] min-h-[80vh]'}`}
              style={{ backgroundImage: `url(${product.image || heroImage})` }}
              onClick={() => setOpen(panel.key)}
              role="button"
              tabIndex={0}
              onKeyDown={(e: any) => { if (e.key === 'Enter' || e.key === ' ') setOpen(panel.key); }}
            >
              {!isOpen && <div className="absolute inset-0 bg-black/30 " />}

              {!isOpen && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white font-semibold text-2xl transform -rotate-90 tracking-wide whitespace-nowrap">
                    {panel.title}
                  </span>
                </div>
              )}

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28 }}
                  className="absolute left-6 bottom-6 bg-white rounded-2xl shadow-lg p-6 w-[42%] min-h-[220px] max-w-[720px]"
                >
                  <h4 className="text-2xl font-semibold text-foreground mb-3">{panel.title}</h4>
                  <p className="text-sm text-muted-foreground">{panel.body || 'Details coming soon.'}</p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Mobile / small screens: horizontal carousel with arrows */}
      <div className="flex lg:hidden relative overflow-hidden">
        <div className="flex items-stretch gap-4 w-full no-scrollbar">
          {windowIds.map((i, index) => {
            const panel = panels[i];
            const isActive = index === 0; // treat first in window as active

            const panelWidthClass = isActive ? 'flex-shrink-0 w-[68%] sm:w-[60%] md:w-[55%]' : 'flex-shrink-0 w-[16%] sm:w-[18%] md:w-[20%]';
            const minHeightClass = 'min-h-[28vh] sm:min-h-[36vh] md:min-h-[56vh]';

            return (
              <motion.div
                layout
                key={panel.key}
                initial={{ borderRadius: 12 }}
                animate={{ scale: isActive ? 1 : 0.98, opacity: isActive ? 1 : 0.95 }}
                transition={{ type: 'spring', stiffness: 140, damping: 18 }}
                className={`relative overflow-hidden rounded-2xl bg-cover bg-center shadow cursor-pointer ${panelWidthClass} ${minHeightClass}`}
                style={{ backgroundImage: `url(${product.image || heroImage})` }}
                onClick={() => setWindowStart((s) => (s + 1) % len)}
              >
                {!isActive && <div className="absolute inset-0 bg-black/30" />}

                {!isActive ? (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-white font-semibold text-sm sm:text-lg transform -rotate-90 tracking-wide whitespace-nowrap">
                      {panel.title}
                    </span>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.26 }}
                    className="absolute left-4 bottom-4 bg-white rounded-2xl shadow-lg p-6 w-[86%] sm:w-[72%] md:w-[60%] min-h-[160px] max-w-[820px]"
                  >
                    <h4 className="text-2xl font-semibold text-foreground mb-3">{panel.title}</h4>
                    <p className="text-sm text-muted-foreground">{panel.body || 'Details coming soon.'}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-4">
          <motion.button whileHover={{ scale: 1.06 }} onClick={handlePrev} aria-label="previous details" className="p-3 rounded-full bg-muted hover:bg-muted/80">
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.06 }} onClick={handleNext} aria-label="next details" className="p-3 rounded-full bg-muted hover:bg-muted/80">
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </>
  );
}

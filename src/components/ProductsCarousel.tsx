import { useEffect, useRef, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/mockData";

interface ProductsCarouselProps {
	hideScrollbar?: boolean; // when true, hide native scrollbar and rely on arrows
}

const ProductsCarousel = ({ hideScrollbar = false }: ProductsCarouselProps) => {
	const [index, setIndex] = useState(0);
	const hoverTimerRef = useRef<number | null>(null);
	const hoverStartRef = useRef<number | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const onMouseEnter = () => {
			hoverStartRef.current = Date.now();
			// Start a timer to check 30s
			hoverTimerRef.current = window.setInterval(() => {
				const started = hoverStartRef.current || 0;
				if (Date.now() - started >= 30000) {
					// advance to next
					setIndex((i) => (i + 1) % products.length);
					// reset timer start to avoid repeated rapid advances
					hoverStartRef.current = Date.now();
				}
			}, 1000);
		};

		const onMouseLeave = () => {
			hoverStartRef.current = null;
			if (hoverTimerRef.current) {
				clearInterval(hoverTimerRef.current);
				hoverTimerRef.current = null;
			}
		};

		container.addEventListener("mouseenter", onMouseEnter);
		container.addEventListener("mouseleave", onMouseLeave);

		return () => {
			container.removeEventListener("mouseenter", onMouseEnter);
			container.removeEventListener("mouseleave", onMouseLeave);
			if (hoverTimerRef.current) clearInterval(hoverTimerRef.current);
		};
	}, []);

	// scroll selected item into view when index changes
	useEffect(() => {
		const el = itemRefs.current[index];
		if (el) {
			el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
		}
	}, [index]);

	return (
		<div ref={containerRef} className="relative">
			<div className={`grid grid-flow-col auto-cols-[min(280px,30vw)] gap-6 py-6 ${hideScrollbar ? "overflow-x-hidden no-scrollbar" : "overflow-x-auto"}`}>
				{products.map((p, i) => (
					<div key={p.id} ref={(el) => (itemRefs.current[i] = el)} className={`min-w-0 ${i === index ? "opacity-100" : "opacity-70"}`}>
						<ProductCard product={p} index={i} />
					</div>
				))}
			</div>

			{/* simple prev/next controls */}
			<div className="absolute left-4 top-1/2 -translate-y-1/2">
				<button
					className="w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center"
					onClick={() => setIndex((i) => (i - 1 + products.length) % products.length)}
					aria-label="Previous"
				>
					‹
				</button>
			</div>
			<div className="absolute right-4 top-1/2 -translate-y-1/2">
				<button
					className="w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center"
					onClick={() => setIndex((i) => (i + 1) % products.length)}
					aria-label="Next"
				>
					›
				</button>
			</div>
		</div>
	);
};

export default ProductsCarousel;

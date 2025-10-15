import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import biomassImage from "@/assets/biomass-pellets.jpg";
import { ArrowRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category?: string;
  description?: string;
  specs?: Record<string, string>;
  image?: string;
}

interface ProductCardProps {
  product: Product;
  index?: number;
  size?: "sm" | "md";
}

const ProductCard = ({ product, index = 0, size = "md" }: ProductCardProps) => {
  const imgSrc = product.image || biomassImage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <div className={`group relative rounded-2xl overflow-hidden bg-transparent h-full ${size === "sm" ? "max-w-xs mx-auto" : ""}`}>
        <Link to={`/products/${product.id}`} className="block">
          <div className={`${size === "sm" ? "aspect-[4/5]" : "aspect-[3/4]"} w-full overflow-hidden rounded-2xl bg-muted`}>
            <img
              src={imgSrc}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Footer: name + circle arrow */}
        <div className="flex items-center justify-between mt-4 px-2">
          <Link to={`/products/${product.id}`} className="text-center w-full">
            <div className="text-sm md:text-base text-muted-foreground">{product.name}</div>
          </Link>

          <Link to={`/products/${product.id}`} className="ml-4 inline-flex items-center justify-center w-9 h-9 rounded-full border border-muted/40 text-muted hover:bg-muted/60 transition-colors">
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

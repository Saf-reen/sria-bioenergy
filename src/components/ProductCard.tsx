import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import biomassImage from "@/assets/biomass-pellets.jpg";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    description: string;
    specs: Record<string, string>;
  };
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover-lift cursor-pointer group overflow-hidden">
        <div className="aspect-video overflow-hidden">
          <img
            src={biomassImage}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <Badge variant="secondary">{product.category}</Badge>
          </div>
          <CardTitle className="text-2xl">{product.name}</CardTitle>
          <CardDescription className="text-base">
            {product.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 mb-4">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-muted-foreground capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}:
                </span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full group/btn">
            Learn More
            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;

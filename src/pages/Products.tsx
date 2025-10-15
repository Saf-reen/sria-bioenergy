import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/mockData";
import heroImage from "@/assets/hero-biomass.jpg";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="OUR PRODUCTS"
        subtitle="SRIA BIOENERGY caters to a broad spectrum of clients, from large-scale producers, utilities, and industrial customers to smaller regional producers and distributors. Our diverse portfolio includes both industrial and premium-grade wood pellets and alternative biomass solutions."
        backgroundImage={heroImage}
        classHeight="h-[80vh]"
      />

      {/* Products Grid */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} size="sm" />
            ))}
          </div>

          {/* Product Details */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center mb-12">Why Choose Our Biomass?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    100% certified sustainable biomass
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Rigorous quality control at every stage
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Consistent specifications and performance
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Full traceability from forest to facility
                  </li>
                </ul>
              </div>

              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Global Delivery</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Worldwide distribution network
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Flexible delivery schedules
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Competitive pricing and terms
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Expert logistics support
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Product Specifications</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download our detailed product specification sheets for complete technical information.
            </p>
            <Button variant="default" size="lg">
              <FileDown className="mr-2 w-5 h-5" />
              Download Product Catalog (PDF)
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Products;

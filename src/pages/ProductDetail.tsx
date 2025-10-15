import { useParams, Link } from "react-router-dom";
import { products } from "@/data/mockData";
import heroImage from "@/assets/biomass-pellets.jpg";
import { ArrowLeft } from "lucide-react";

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

  return (
    <div className="min-h-screen">
      <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <img src={product.image || heroImage} alt={product.name} className="w-full rounded-lg" />
          </div>
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-muted-foreground mb-6">{product.description}</p>

            <h3 className="font-semibold mb-2">Specifications</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {product.specs && Object.entries(product.specs).map(([k, v]) => (
                <div key={k} className="bg-muted p-3 rounded">
                  <div className="text-sm text-muted-foreground capitalize">{k}</div>
                  <div className="font-medium">{v}</div>
                </div>
              ))}
            </div>

            <Link to="/products" className="inline-flex items-center gap-2 text-primary">
              <ArrowLeft /> Back to products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

import { useProducts } from "@/hooks/use-content";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";

export default function Products() {
  const { data: products, isLoading } = useProducts();
  const { t } = useLanguage();

  if (isLoading) return <div className="flex h-screen items-center justify-center">{t("common.loading")}</div>;

  return (
    <div className="min-h-screen bg-[#f0eee9]">
      <div className="bg-[#2a2d3a] pt-32 pb-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">{t("products.title")}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("products.subtitle")}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.map((product) => (
            <Card key={product.id} className="group border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full rounded-sm overflow-hidden">
              <div className="h-64 overflow-hidden relative bg-gray-100">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary text-white hover:bg-primary font-bold rounded-sm">
                    {product.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0 bg-transparent border-t border-gray-100 mt-auto flex items-center justify-between">
                 <span className="text-xs font-bold text-gray-400 tracking-widest">{t("products.availableBulk")}</span>
                 <Button variant="link" className="text-primary p-0 h-auto font-bold text-xs" asChild>
                   <Link href="/contact">{t("products.requestQuote")}</Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

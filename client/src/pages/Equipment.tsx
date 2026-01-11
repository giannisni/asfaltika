import { useEquipment } from "@/hooks/use-content";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

export default function Equipment() {
  const { data: equipment, isLoading } = useEquipment();

  if (isLoading) return <div className="flex h-screen items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">Our Fleet</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Modern machinery ensuring efficiency and precision</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment?.map((item) => (
            <Card key={item.id} className="border-none bg-gray-50 shadow-sm overflow-hidden group">
              <div className="h-64 bg-white p-6 flex items-center justify-center relative border-b border-gray-100">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-secondary mb-2 uppercase">{item.name}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

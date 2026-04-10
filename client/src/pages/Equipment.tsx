import { useEquipment } from "@/hooks/use-content";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";

export default function Equipment() {
  const { data: equipment, isLoading } = useEquipment();
  const { t } = useLanguage();

  if (isLoading) return <div className="flex h-screen items-center justify-center">{t("common.loading")}</div>;

  return (
    <div className="min-h-screen bg-[#f0eee9]">
      <div className="bg-[#2a2d3a] pt-32 pb-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">{t("equipment.title")}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("equipment.subtitle")}</p>
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
                <h3 className="text-lg font-bold text-secondary mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

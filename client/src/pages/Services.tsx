import { useServices } from "@/hooks/use-content";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function Services() {
  const { data: services, isLoading } = useServices();
  const { t } = useLanguage();

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">{t("services.loading")}</div>;
  }

  return (
    <div className="min-h-screen bg-[#f0eee9]">
      <div className="bg-[#2a2d3a] pt-32 pb-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">{t("services.title")}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 gap-12">
          {services?.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-sm shadow-lg overflow-hidden`}
            >
              <div className="lg:w-1/2 h-64 lg:h-auto relative">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">{service.title}</h2>
                <div className="w-16 h-1 bg-primary mb-6" />
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {[t("services.expertExecution"), t("services.qualityMaterials"), t("services.timelyDelivery")].map((item, i) => (
                    <li key={i} className="flex items-center text-secondary font-medium">
                      <div className="bg-primary/10 p-1 rounded-full mr-3">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

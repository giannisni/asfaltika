import { useProjects } from "@/hooks/use-content";
import { SectionHeader } from "@/components/SectionHeader";
import { Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();
  const { t } = useLanguage();
  const [filter, setFilter] = useState("All");

  if (isLoading) return <div className="flex h-screen items-center justify-center">{t("common.loading")}</div>;

  const filters = [
    { key: "All", label: t("projects.all") },
    { key: "Highways", label: t("projects.highways") },
    { key: "Urban", label: t("projects.urban") },
    { key: "Private", label: t("projects.private") },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-[#2a2d3a] pt-32 pb-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">{t("projects.title")}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("projects.subtitle")}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {filters.map((f) => (
            <Button
              key={f.key}
              variant={filter === f.key ? "default" : "outline"}
              onClick={() => setFilter(f.key)}
              className={`rounded-sm font-bold ${filter === f.key ? 'bg-primary hover:bg-primary/90 text-white border-primary' : 'bg-white text-secondary border-gray-200'}`}
            >
              {f.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <div key={project.id} className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-all group">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10" />
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-primary font-bold tracking-wider mb-2 gap-4">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {project.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {project.completionDate}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

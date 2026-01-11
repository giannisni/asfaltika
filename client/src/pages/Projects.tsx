import { useProjects } from "@/hooks/use-content";
import { SectionHeader } from "@/components/SectionHeader";
import { Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();
  const [filter, setFilter] = useState("All");

  if (isLoading) return <div className="flex h-screen items-center justify-center">Loading...</div>;

  // Assuming categories might be derived or static for now since schema doesn't have strict category field
  // We'll just show all for this demo as per schema
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">A portfolio of infrastructure excellence across Greece</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Filter Tabs (Visual only for now if no categories in schema) */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {['All', 'Highways', 'Urban', 'Private'].map((cat) => (
            <Button 
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className={`uppercase rounded-sm font-bold ${filter === cat ? 'bg-primary hover:bg-primary/90 text-white border-primary' : 'bg-white text-secondary border-gray-200'}`}
            >
              {cat}
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
                <div className="flex items-center text-xs text-primary font-bold uppercase tracking-wider mb-2 gap-4">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {project.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {project.completionDate}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-secondary mb-3 uppercase group-hover:text-primary transition-colors">
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
